const express = require("express");
const userRouter = require("./routes/users.router");
const orderRouter = require("./routes/orders.router");
const businessRouter = require("./routes/business.router");
const connection = require("./config/db.config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/business", businessRouter);

connection();

module.exports = app;
