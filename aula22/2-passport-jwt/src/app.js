const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const passport = require('passport');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const initializePassport = require("./config/passport.config");
const pathView = path.join(`${__dirname}/views`);

const loginRoute = require("./routes/login.route");
const viewsRoute = require("./routes/views.router");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use(
  session({
    secret: "batatinha123",
  })
);
// mongoose.connect(process.ENV.MONGO_URL)
mongoose.connect('mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.catch((err) => {
    console.log(err);
    process.exit(1);
});

app.use("/api", loginRoute);
app.use("/", viewsRoute);


module.exports = app;
