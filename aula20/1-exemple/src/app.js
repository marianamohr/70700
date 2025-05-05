const express = require("express");

const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const pathView = path.join(`${__dirname}/views`);
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("passport");
const initializePassport = require("./config/passport.config");

const MongoStore = require("connect-mongo");

const viewRouter = require("./routes/views.router");
const userRouter = require("./routes/user.router");
const sessionRouter = require('./routes/session.route');
const cookieRouter = require("./routes/cookie.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("batatinha123"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 600,
    }),
    secret: "batatinha123",
    resave: false,
    saveUninitialized: false,
  })
);
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use("/", viewRouter);
app.use('/cookie', cookieRouter);
app.use('/session', sessionRouter);
app.use("/user", userRouter);

mongoose
  .connect(
    "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

module.exports = app;
