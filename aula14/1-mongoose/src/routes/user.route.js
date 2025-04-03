const express = require("express");
const userService = require("../service/user.service");
const validationUser = require("../middlewares/user.middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await userService.getUsersById(uid);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/email/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userService.getByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// validationUser,
router.post("/", async (req, res) => {
  try {
    // { first_name, last_name, email }
    const user = req.body;
    const newUser = await userService.createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//validationUser,
router.put("/:uid", async (req, res) => {
  try {
    const user = req.body;
    const { uid } = req.params;
    console.log(user, uid);
    const newUser = await userService.updateUser(user, uid);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await userService.deleteUser(uid);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.status)
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
