const express = require("express");
const userService = require("../service/users.service");
const upload = require("../middlewares/multer");
const fs = require("fs");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const userCreted = await userService.createUser({
      first_name,
      last_name,
      email,
      password,
    });
    return res.render("userCreated", { name: userCreted.first_name });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
router.delete("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const userDeleted = await userService.deleteUser(email);
    return res.status(200).json({ message: userDeleted });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:uid", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const { uid } = req.params;
    await userService.updateUser(
      { first_name, last_name, email, password },
      uid
    );
    return res.status(201).redirect("/");
  } catch (error) {}
});

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    //const dados = fs.readFileSync(`./${req.file.path}`, "utf8");
    const {email} = req.body;
    const dado = {email, pathImage: req.file.path }
    const pathUpdated = await userService.updatePathByUserEmail(dado)
    // A manipulação do arquivo enviado pode ser feita aqui
    res.send(pathUpdated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
