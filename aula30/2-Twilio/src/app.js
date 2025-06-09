const express = require("express");
const config = require("./config/config");

const twilio = require("twilio");

const client = twilio(config.twilioAccountSid, config.twilioAuthToken);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/sms", async (req, res) => {
  const { message } = req.body;
  try {
   const messages=  await client.messages.create({
    body: message,
    from: config.twilioPhoneNumber,
    to: "+13473582289",
  });
  return res.send(messages.sid);
  } catch (error) {
    return res.send(error.message);
  }
  
});

module.exports = app;
