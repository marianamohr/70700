const express = require("express");
const userModel = require("../models/users.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/id/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await userModel.findById(uid)
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/email/:email", async (req, res) => {
  try {
    const { email } = req.params;
    console.log(typeof email)
    const user = await userModel.find({email: email})
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const newUser = await userModel.create(user);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
