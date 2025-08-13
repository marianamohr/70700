const { v4: uuidv4 } = require('uuid');
const Producer = require('../../pkg/kafka/producer'); // Ajuste o caminho conforme necessário

class ProducerService {
  constructor(brokers, clientId) {
    this.Producer = new Producer(brokers, clientId);
  }

  async initialize() {
    await this.Producer.connect();
  }

  validateOrder(order) {
    const { customerId, amount, items } = order;
    if (!customerId || !amount || !items || !Array.isArray(items)) {
      throw new Error('Invalid order data');
    }
  }

  createOrder(customerId, amount, items) {
    return {
      orderId: uuidv4(),
      customerId,
      amount,
      items,
    };
  }

  async sendOrder(order) {
    this.validateOrder(order);
    const topic = 'producer.v1';
    const messages = [
      { key: order.orderId, value: JSON.stringify(order) },
    ];
    await this.Producer.send(topic, messages);
  }

  async close() {
    await this.Producer.disconnect();
  }
}

module.exports = ProducerService;
