const express = require("express");
const userService = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/redefinir", (req, res) => {
  res.render("redefinir");
});

router.get("/home", (req, res) => {
  if (!req.session.logged) {
    return res.redirect("/")
  }
  res.render("index");
});
router.get("/register", (req, res) => {
  if (!req.session.admin) {
    return res.redirect("/home")
  }
  res.render("register");
});
router.get("/list", async (req, res) => {
  if (!req.session.logged) {
    return res.redirect("/")
  }
  let users = await userService.getUsers();
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  res.render("list", { users, isAdmin: req.session.admin });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  if (!req.session.logged) {
    return res.redirect("/")
  }
  const { email } = req.params;
  res.render("userDeletado", { email });
});

router.get("/edit/:uid", async (req, res) => {
  if (!req.session.logged) {
    return res.redirect("/")
  }
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  user = user.map((u) => u.toJSON());
  res.render("edit", { user: user[0] });
});

module.exports = router;
