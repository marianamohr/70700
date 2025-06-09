const express = require("express");
// const config = require("./config/config");
const usersRoutes = require("./routes/users.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});
app.use("/api/users", usersRoutes);

module.exports = app;
