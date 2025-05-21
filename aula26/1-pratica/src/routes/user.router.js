const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const passport = require("passport");
const userController = require("../controller/user.controller");

const passportCall = require("../utils/passport.utils");

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/user/faillogin" }),
  userController.login
);

router.post("/register", passportCall("jwt"), userController.register);

router.get("/failregister", (req, res) => {
  res.send("Erro ao registrar");
});

router.delete("/:email", userController.deleteUser);

router.put("/:uid", validationUser, userController.updateUser);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("accessToken");
  res.redirect("/");
});

module.exports = router;
