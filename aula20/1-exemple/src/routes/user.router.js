const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const userService = require("../service/user.service");
const { isValidatePassword } = require("../utils/index");
const passport = require("passport");
isValidatePassword;
const router = express.Router();

router.post("/login", async (req, res) => {
  console.log("to no login rota");
  const user = req.body;

  const loginUser = await userService.loginUser(user);
  if (!loginUser) {
    return res.status(400).json({ status: "error", message: "Unauthorized" });
  } else {
    req.session.user = {
      first_name: loginUser.first_name,
      last_name: loginUser.last_name,
      email: loginUser.email,
      role: loginUser.role,
    };
    req.session.logged = true;
    if (loginUser.role === "admin") {
      req.session.admin = true;
    }
    res.redirect("/home");
  }
});

router.get("/faillogin", (req, res) => {
  console.log("faliled Strategy");
  res.send("Erro ao logar");
});

router.post("/register", async (req, res) => {
  if (!req.session.logged && !req.session.admin) {
    return res.render("index");
  }
  const user = req.body;
  await userService.createUser(user);
  res.render("userCreated", { name: req.body.first_name });
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  if (!req.session.logged) {
    return res.render("index");
  }
  await userService.deleteUser(email);
  res.render("userDeletado", { email });
});

router.put("/:uid", validationUser, async (req, res) => {
  try {
    if (!req.session.logged) {
      return res.render("index");
    }
    console.log("to no PUT");
    const user = req.body;
    const { uid } = req.params;
    console.log(uid);
    const newUser = await userService.updateUser(user, uid);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/redefinirSenha", async (req, res) => {
  try {
    console.log("to no Patch");
    const { username, password } = req.body;

    const newUser = await userService.redefinirSenha(username, password);
    if (!newUser) {
      return res.status(404).json({ message: "Not found" });
    }
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
