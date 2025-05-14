const { Router } = require("express");

const geralRouter = Router();

const words = ["casa", "carro", "moto", "bicicleta"];

geralRouter.param("word", (req, res, next, word) => {
  const value = words.find((w) => w === word);

  if (!value) {
    console.log(word, "nao está na lista");
    return res.status(404).json({message: `${word} não está na lista de palavras`})
  } else {
    console.log(word, "está na lista");
    req.word = value;
  }
  next();
});


geralRouter.param("id", (req, res, next, id) => {
  console.log("id", id);

  next();
});

geralRouter.get(
  //"/:word([0-9]+)",
  "/:word([a-zA-Z]+)",
  //"/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)",
  (req, res) => {
    res.send(`Você digitou: xxx ${req.params.word}`);
  }
);

geralRouter.get("/:word", (req, res) => {
  res.send(`Você digitou: ${req.word}`);
});

geralRouter.get("/carro/:carro", (req, res) => {
  res.send(`Você digitou: ccc ${req.params.carro}`);
});
/*
geralRouter.get("/:word", (req, res) => {
  res.send(`Você digitou: ${req.word}`);
});
*/

geralRouter.get("*", (req, res) => {
  res.status(404).send("Palavra nao permitida");
});

module.exports = geralRouter;
