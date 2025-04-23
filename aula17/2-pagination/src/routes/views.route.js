const express = require("express");
const userService = require("../service/users.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/list/:nome/:page/:limit", async (req, res) => {
  const { nome, page, limit } = req.params;
  console.log(nome, page, limit);
  let result;
  if (nome === "all") {
    result = await userService.getAll(page, limit);
  } else {
    result = await userService.getUsers(nome, page, limit);
  }

  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  console.log(result);
  const users = result.docs.map((user) => user.toJSON());
  delete result.docs;
  // console.log(result)
  res.render("list", { users, result });
});

module.exports = router;
