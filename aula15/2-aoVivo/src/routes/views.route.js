const express = require("express");
const userService = require("../service/users.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/list", async (req, res) => {
  const users = await userService.getUsers();
  users.forEach((u) => {
    if (u.pathImage) {
      const newPath = u.pathImage.split("/").at(-1);
      u.pathImage = newPath
    }
  });
 //  console.log(users);
  res.render("list", { users });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  const { email } = req.params;
  res.render("userDeleted", { email });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  const user = await userService.getUserbyId(uid);

  res.render("edit", { user });
});

router.get("/upload", (req, res) => {
  res.render("multer");
});
module.exports = router;
