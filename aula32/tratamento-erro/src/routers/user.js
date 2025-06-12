const { Router } = require("express");
const CustomError = require("../services/errors/CustomError");
const ErrorBuilder = require("../services/errors/errorBuilder");
const EErrors = require("../services/errors/enum");
const generateUserErrorInfo = require("../services/errors/info");

const users = [];

const router = Router();

router.get("/", (req, res) => {
  res.send({ status: "success", payload: users });
});

router.get("/:id", (req, res) => {
  console.log("Aqui", Number.isNaN(req.params.id));

  if (!Number.isNaN(req.params.id)) {
    /* CustomError.createError({
      name: "Id Not a Number",
      cause: "Id is a string and not a number",
      message: "Erro ao validar se id é um numero inteiro",
      code: 400,
    });
    */
    ErrorBuilder.Builder()
      .Name("Id Not a Number")
      .Message("Connection failed")
      .Cause("Id is a string and not a number")
      .Code(400)
      .Throw();
  }

  res.send({ status: "success", payload: users });
});

router.post("/", (req, res) => {
  const { first_name, last_name, age, email } = req.body;

  if (!first_name || !last_name || !email) {
    CustomError.createError({
      name: "User creation error",
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: "Erro tentando criar usuário",
      code: 404,
    });
  }

  const user = {
    first_name,
    last_name,
    age,
    email,
  };

  if (users.length === 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }
  users.push(user);
  res.send({ status: "success", payload: user });
});

module.exports = router;
