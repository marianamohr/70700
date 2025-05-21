const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

const store = require("./config/store");
const config = require("./config/config");

const initializePassport = require("./config/passport.config");
const pathView = path.join(`${__dirname}/views`);

const router = require("./routes/router");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.secret));
app.use(session(store));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);


app.use(passport.initialize());
app.use(passport.session());
initializePassport();


mongoose.connect(config.mongoUrl)
.then(()=>{
  console.log("Mongo Conectado")
})
.catch((err) => {
  console.log(err);
  process.exit(1);
});

app.use("/", router);

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

module.exports = app;
