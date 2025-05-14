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

router.get("/register", 
  passportCall("jwt"), (req, res) => {
  console.log(req.session);
  console.log(req?.session?.user?.role === "admin");
  res.render("register", {
    isAdmin: req?.session?.user?.role === "admin" || false,
  });
});


router.get("/list", passportCall("jwt"), async (req, res) => {
  let users = await userService.getUsers();
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  //res.render("list", { users, allowDelete: req?.session?.user?.role === "admin" || false,
  // allowEdit: req?.session?.user?.role === "admin" || false });
  res.render("list", {
    users,
    isAdmin: req?.session?.user?.role === "admin" || false,
  });
});

router.get(
  "/usuario-deletado/:email",
 passportCall("jwt"),
  async (req, res) => {
    const { email } = req.params;
    res.render("userDeletado", { email });
  }
);

router.get("/edit/:uid", 
  passportCall("jwt"),
   async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  console.log("XXXXXX", user);
  user = user.map((u) => u.toJSON());
  console.log("YYYYYY", req?.session?.user);
  res.render("edit", { 
    user: user[0],  
    isAdmin: req?.session?.user?.role === "admin" || false,
    userLogged: req?.session?.user
   });
});

router.get("/error", passportCall("jwt"), (req, res) => {
  res.render("error");
});

module.exports = router;
