const express = require("express");
const viewRouter = require("./routes/views.router")
const userRouter = require("./routes/user.router")
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const pathView = path.join(`${__dirname}/views`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);
const staticPath = path.join(`${__dirname}/../public`);

app.use("/", viewRouter)
app.use("/user", userRouter)

mongoose.connect('mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.catch((err) => {
    console.log(err);
    process.exit(1);
});

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

module.exports = app;
