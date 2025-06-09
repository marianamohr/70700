const express = require("express");
const config = require("./config/config");
const Mailer = require("./service/mailer");
const app = express();
app.use(express.json());

const mailer = new Mailer({
  service: "gmail",
  port: 587,
  user: "marianamohr@gmail.com",
  pass: config.gmailPasswd,
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/mail", async (req, res) => {
  const { to, subject, text } = req.body;
  console.log(to, subject, text);
  await mailer.sendEmail({ to, subject, text });
  return res.send("email enviado");
});

app.get("/mailImage", async (req, res) => {
  const { to, subject, cid, filename } = req.body;

  await mailer.sendImage({
    to,
    subject,
    cid,
    filename,
  });
  return res.send("email enviado");
});

module.exports = app;
