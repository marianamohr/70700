const express = require("express");
const userService = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("XXXXX", req.user);
  res.render("home", {
    name: req.user.first_name,
    lastName: req.user.last_name,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/localLogin", (req, res) => {
  res.render("locallogin");
});
module.exports = router;
