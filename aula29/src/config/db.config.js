const mongoose = require("mongoose");
const config = require("./config");

const connection = () => {
  return mongoose.connect(config.mongoUrl)
  .then(()=> {
    console.log("Mongo Conectado")
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
};

module.exports = connection;
