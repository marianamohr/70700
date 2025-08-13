const { v4: uuidv4 } = require("uuid");
const RedisClient = require("../pkg/redis/index");
const KafkaConsumer = require("../pkg/kafka/consumer");

const kafka = new KafkaConsumer(["localhost:9092"], "test-group");
const redis = new RedisClient("localhost", 6379);

const generateInvoice = (order) => {
  return {
    invoiceId: uuidv4(),
    orderId: order.orderId,
    customerId: order.customerId,
    amount: order.amount,
    items: order.items,
    date: new Date().toISOString(),
  };
};

const handler = async (message) => {
  const order = JSON.parse(message.value.toString());

  const invoice = generateInvoice(order);
  console.log("Generated invoice:", invoice);

  try {
    const key = `invoice:${invoice.invoiceId}`;
    const value = JSON.stringify(invoice);
    await redis.saveData(key, value);
    console.log(`Invoice saved to Redis with ID ${invoice.invoiceId}`);
  } catch (error) {
    console.error("Error saving message to Redis:", error);
  }
};

const runConsumer = async () => {
  await kafka.connect();
  await kafka.subscribe({ topic: "producer.v1", fromBeginning: true });

  await kafka.run(handler);
};

runConsumer().catch(console.error);
