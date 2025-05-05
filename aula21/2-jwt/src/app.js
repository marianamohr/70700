const express = require("express");
const { generateToken, authToken } = require("./utils");
const app = express();

const users = [];

app.use(express.json())

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find((user) => user.email === email);
  if (exists) {
    return res
      .status(400)
      .send({ status: "error", error: "User already exists" });
  }

  const user = { name, email, password };
    users.push(user);
    const accessToken = generateToken(user);
    return res.status(201).send({ status: "success", token: accessToken });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => 
      user.email === email && user.password === password);
    if (!user) {
        return res.status(400).send({ status: "error", error: "Invalid credentials" });
    }
    
    const accessToken = generateToken(user);
    return res.status(200).send({ status: "success", token: accessToken });
});

app.get("/current", authToken, (req, res) => {
    console.log("VVVVV",req.user)
    return res.status(200).send({ status: "success", user: req.user });
});

module.exports = app;
