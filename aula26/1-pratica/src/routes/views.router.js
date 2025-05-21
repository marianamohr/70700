const express = require("express");
const userService = require("../service/user.service");
const passportCall = require("../utils/passport.utils");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/home", passportCall("jwt"), (req, res) => {
  res.render("index");
});

router.get("/register", passportCall("jwt"), (req, res) => {
  res.render("register", {
    isAdmin: userService.validationAccess(req?.session?.user?.role),
  });
});

router.get("/list", passportCall("jwt"), async (req, res) => {
  const { users, isAdmin } = await userService.listAllAndValidationAccess(
    req?.session?.user?.role
  );
  return res.render("list", { users, isAdmin });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  const { email } = req.params;
  res.render("userDeletado", { email });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  res.render("edit", { user: user[0] });
});

module.exports = router;
