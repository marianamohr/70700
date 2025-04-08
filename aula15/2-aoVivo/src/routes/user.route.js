const express = require("express");
const upload = require("../middlewares/multer");
const userService = require("../service/user.service");
const fs = require("fs");
const userValidator = require("../middlewares/user.middleware")

const router = express.Router();

router.post("/", userValidator, async (req, res) => {
  try {
    const user = req.body;
    const userCreated = await userService.createUser(user);
    res.render("userCreated", { name: userCreated.first_name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:uid", async (req, res) => {
  try {
    const user = req.body;
    const { uid } = req.params;
    const userUpdated = await userService.updateUser(user, uid);
    res.status(201).json(userUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  const userDeleted = await userService.deleteUser(email);
  console.log(userDeleted);
  if (userDeleted.deletedCount === 1) {
    return res.render("userDeleted", { email });
  }
  return res.redirect("/");
});

router.post("/upload", upload.single("file"), async function (req, res) {
  try {
    const { email } = req.body;
    console.log(req.file.filename, email);
    await userService.addImage(email, req.file.filename);
    // A manipulação do arquivo enviado pode ser feita aqui
    res.redirect("/list");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
