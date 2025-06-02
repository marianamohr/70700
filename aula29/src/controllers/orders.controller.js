const orderDao = require("../DAO/order.dao");
const userDao = require("../DAO/user.dao");
const businessDao = require("../DAO/business.dao");

const getOrders = async (req, res) => {
  // TODO: criar regra que busca
  //as ordem no banco e suas validacoes
  res.send({ status: "success", result: "getOrders" });
};

const getOrderById = async (req, res) => {
  res.send({ status: "success", result: "getOrderById" });
};

const createOrder = async (req, res) => {
  const { user, business, products } = req.body;
  const userFound = await userDao.getUserById(user);
  if (!userFound) {
    return res.send({
      status: "error",
      result: `User with id: ${user} not found`,
    });
  }
  const businessFound = await businessDao.getBusinessById(business);
  if (!businessFound) {
    return res.send({
      status: "error",
      result: `business with id: ${business} not found`,
    });
  }

  const actualOrders = businessFound.products.filter((product) =>
    products.includes(product.id)
  );

  const sum = actualOrders.reduce((acc, current) => {
    acc += current.price;
    return acc;
  }, 0);

  const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);
  const order = {
    number: orderNumber,
    business,
    user,
    status: "pending",
    products: actualOrders.map((product) => product.id),
    totalPrice: sum,
  };
  const orderCreated = await orderDao.createOrder(order);

  userFound.orders.push(orderCreated._id);
  await userDao.updateUser(user, userFound);

  res.send({ status: "success", result: order });
};

const resolveOrder = async (req, res) => {
  // buscar a ordem
  const {resolve} =req.query;
  const order = await orderDao.getOrderById(req.params.oid)
  console.log(order)
  order.status = resolve;
  console.log(order)
  await orderDao.resolveOrder(order._id, order)
 
  res.send({ status: "success", result: order });
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  resolveOrder,
};
