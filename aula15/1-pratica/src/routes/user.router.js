const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const userService = require("../service/user.service");
const upload = require("../middlewares/multer")
const router = express.Router();

router.post("/", validationUser, async (req, res) => {
  const user = req.body;
  const userCreated = await userService.createUser(user);
  res.render("userCreated", { name: userCreated.first_name });
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await userService.deleteUser(email);
  res.render("userDeletado", { email });
});

router.put("/:uid", validationUser, async (req, res) => {
  try {
    console.log("to no PUT")
    const user = req.body;
    const { uid } = req.params;
    console.log(uid);
    const newUser = await userService.updateUser(user, uid);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/upload", upload.single("file"), function (req, res) {
  try {
    const dados = fs.readFileSync(`./${req.file.path}`, "utf8");
    console.log(dados);
    // A manipulação do arquivo enviado pode ser feita aqui
    res.send("index");
  } catch (error) {
    res.status(500).json({error: error.message})
  }
});

module.exports = router;
