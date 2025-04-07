const express = require("express");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const path = require("path");

const healthRouter = require("./routes/health.route");
const viewsRouter = require("./routes/views.route");
const userRouter = require("./routes/user.route");

const pathView = path.join(`${__dirname}/views`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(`${__dirname}/../public`);
console.log(staticPath)

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

// importacao das rotas
app.use("/static", express.static(staticPath));
app.use("/health", healthRouter);
app.use("/", viewsRouter);
app.use("/user", userRouter);

mongoose
  .connect(
    "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Mongo conectado");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });


module.exports = app;
