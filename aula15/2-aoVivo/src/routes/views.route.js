const express = require("express");

const userService = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/list", async (req, res) => {
  const users = await userService.getUsers();
  res.render("list", { users });
});

router.get("/userDeleted/:email", async (req, res) => {
  const { email } = req.params;
  res.render("userDeleted", { email });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getById(uid);
 
  return res.render("edit", { user: user });
});

router.get("/upload", (req, res) => {
  res.render("multer");
});

module.exports = router;
