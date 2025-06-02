const mongoose = require("mongoose");
const collection = "Business";

const schema = new mongoose.Schema({
  name: String,
  products: [],
});

const model = mongoose.model(collection, schema);

module.exports = model;
