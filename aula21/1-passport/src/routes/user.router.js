const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const userService = require("../service/user.service");
const { isValidatePassword } = require("../utils/index");
const passport = require("passport");
isValidatePassword;
const router = express.Router();

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/user/faillogin" }),
  async (req, res) => {
    console.log("to no login rota");
    if (!req.user)
      return res.status(400).json({ status: "error", message: "Unauthorized" });
    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      role: req.user.role,
    };
    return res.render('index');
  }
);

router.get("/faillogin", (req, res) => {
  console.log("faliled Strategy");
  res.send("Erro ao logar");
});

router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failregister" }),
  async (req, res) => {
    res.render("userCreated", { name: req.body.first_name });
  }
);

router.get("/failregister", (req, res) => {
  console.log("faliled Strategy");
  res.send("Erro ao registrar");
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await userService.deleteUser(email);
  res.render("userDeletado", { email });
});

router.put("/:uid", validationUser, async (req, res) => {
  try {
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

module.exports = router;
