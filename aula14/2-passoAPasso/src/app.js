const express = require("express");
const connection = require("./db/db")
const userRoute = require("./routes/users.route");

const app = express();
app.use(express.json());

connection()

app.use("/users", userRoute)


module.exports = app;