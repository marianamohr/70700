const express = require("express");
const userService = require("../service/users.service");

const router = express.Router();

router.get("/:nome/:page/:limit", async (req, res) => {
  const { nome, page, limit } = req.params;

  console.log(nome, page);

  const users = await userService.getUsers(nome, page, limit);

  return res.status(200).json({ message: users });
});

module.exports = router;
