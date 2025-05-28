const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user.router");

const config = require("./config/config");
console.log(config);

const app = express();
app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);

module.exports = app;
