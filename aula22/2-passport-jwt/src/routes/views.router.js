const express = require("express");
const userService = require("../service/user.service");
const passport = require("passport");
const passportCall = require("../utils/passport.utils");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get(
  "/home",
  passport.authenticate("jwt", { session: false }),
  // passportCall("jwt"),
  (req, res) => {
    res.render("index");
  }
);

router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  // passportCall("jwt"),
  async (req, res) => {
    let users = await userService.getUsers();
    // faz a conversão para JSON parars que o handlebars consiga renderizar
    // https://github.com/handlebars-lang/handlebars.js/issues/1642
    console.log(req.user);
    users = users.map((user) => user.toJSON());
    res.render("list", { users, isAdmin: req.user.role === "admin" });
  }
);

module.exports = router;
