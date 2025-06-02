const mongoose = require("mongoose");
const orderCollection = "Orders";

const orderSchema = new mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.Schema.ObjectId,
    ref: "Business",
  },
  users: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  status: String,
  products: [],
  totalPrice: Number,
});

const orderModel = mongoose.model(orderCollection, orderSchema);

module.exports = orderModel;
