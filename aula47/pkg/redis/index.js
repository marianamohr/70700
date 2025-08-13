const redis = require("ioredis");

class RedisClient {
    constructor(host, port) {
        this.client = redis.createClient({ host, port });
    }

    saveData(key, value) {
        this.client.set(key, value, (error, reply) => {
            if (error) {
                console.error('Error saving data:', error);
            } else {
                console.log('Data saved successfully:', reply);
            }
        });
    }

    getData(key) {
        this.client.get(key, (error, reply) => {
            if (error) {
                console.error('Error getting data:', error);
            } else {
                console.log('Data retrieved successfully:', reply);
            }
        });
    }
}

module.exports = RedisClient;
