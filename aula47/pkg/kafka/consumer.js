const { Kafka } = require('kafkajs');

class Consumer {
    constructor(brokers, groupId) {
        this.kafka = new Kafka({ brokers });
        this.consumer = this.kafka.consumer({ groupId });
    }

    async connect() {
        await this.consumer.connect();
    }

    async subscribe(conf) {
        await this.consumer.subscribe(conf);
    }

    async run(handler) {
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                await handler(message);
            },
        });
    }

    async disconnect() {
        await this.consumer.disconnect();
    }
}

module.exports = Consumer;
