const orderModel = require("../models/order.model");

const getOrders = async () => {
  const orders = await orderModel.find();
  return orders;
};
const getOrderById = async (id) => {
  const orders = await orderModel.findById(id);
  return orders;
};
const createOrder = async (order) => {
  const orderCreated = await orderModel.create(order);
  return orderCreated;
};

const resolveOrder = async (id, order) => {
  const result = await orderModel.updateOne({ _id: id }, { $set: order });
  return result;
};

module.exports = { getOrders, createOrder, resolveOrder, getOrderById };
