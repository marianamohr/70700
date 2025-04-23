const express = require("express");
const userService = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/home", (req, res) => {
  res.render("index", { name: req.session.user.username });
});

router.get("/register", (req, res) => {
  res.render("register", {
    isAdmin: req.session.admin,
    isLogged: req.session.logged,
  });
});

router.get("/list", async (req, res) => {
  let users = await userService.getUsers();
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642

  users = users.map((user) => user.toJSON());
  res.render("list", { users, isAdmin: req.session.admin });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  const { email } = req.params;
  res.render("userDeletado", { email });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  user = user.map((u) => u.toJSON());
  res.render("edit", {
    user: user[0],
    isAdmin: req.session.admin,
    isLogged: req.session.logged,
  });
});

module.exports = router;
