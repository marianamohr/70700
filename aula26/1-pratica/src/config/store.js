
const MongoStore = require("connect-mongo");
const config = require('./config')

module.exports = {
    store: MongoStore.create({
      mongoUrl: config.mongoUrl,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 600,
    }),
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
  }