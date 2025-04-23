const orderModel = require("./model/order.model");
const studentModel = require("./model/student.model");
const mongoose = require("mongoose");

const main = async () => {
  mongoose
    .connect(
      "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

  /*
  const insert = await orderModel.insertMany([
    {
      name: "Peperoni",
      size: "medium",
      price: 45,
      quantity: 5,
      date: '2024-02-13T08:14:30Z',
    },
    {
      name: "escargot",
      size: "small",
      price: 65,
      quantity: 1,
      date: '2024-02-13T08:14:30Z',
    },
    {
      name: "parma",
      size: "medium",
      price: 50,
      quantity: 5,
      date: '2024-02-13T08:14:30Z',
    },
    {
      name: "caprese",
      size: "medium",
      price: 40,
      quantity: 10,
      date: '2024-02-13T08:14:30Z',
    }
  ]);

  */
  //const orders = await orderModel.find()
  //console.log(orders)

  const result = await reportPizzas("large", [45,60]);
  console.log(result);
};

const reportPizzas = async (pizzaSize, rangePrice) => {
  const result = await orderModel.aggregate([
    {
      $match: { size: pizzaSize },
      // $match: { $and: [{ size: pizzaSize }, { price: { $gte: rangePrice[0], $lt: rangePrice[1] } }] },
    },

    {
      $group: {
        _id: "$name",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    { $sort: { totalQuantity: -1 } },
    { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
    { $project: { _id: 0, orders: "$orders" } },
    { $merge: { into: "reports" } },
     
  ]);
  return result;
};

main();
