const { Kafka } = require('kafkajs');

class Producer {
  constructor(brokers, clientId) {
    this.kafka = new Kafka({ clientId, brokers });
    this.producer = this.kafka.producer();
  }

  async connect() {
    await this.producer.connect();
  }

  async send(topic, messages) {
    await this.producer.send({
      topic,
      messages,
    });
  }

  async disconnect() {
    await this.producer.disconnect();
  }
}

module.exports = Producer;
