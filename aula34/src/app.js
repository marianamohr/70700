const log = require("./pkg/logger");
const express = require("express");

const app = express();
app.use(express.json());

const users = [];

//app.use(log);

app.get("/", log, (req, res) => {
  req.logger.warn("Aqui");

  res.send("Hello World");
});

app.post("/", (req, res) => {
  req.logger.debug(`entrei na rota de cadastar user`);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    req.logger.warning(`- Tentativa de criar usuario com dados faltantes.`);
    return res.status(404).json({ message: "dados faltantes" });
  }
  const user = users.find((u) => u.email === email);
  if (user) {
    req.logger.error(
      `- Tentativa de cadastar novamente um user com o email => ${email}, email utilizado no user de  id ${user.id}`
    );
    return res.status(400).json({ message: "Erro ao cadastar usuario" });
  }
  req.logger.debug(`- iniciado o cadastro do usuario ${email} `);
  const newUser = { name, email, password, id: users.length + 1 };
  users.push(newUser);
  req.logger.debug(
    `- finalizado o cadastro do usuario ${email} com Id ${newUser.id}`
  );
  return res.status(201).json({ message: users });
});

app.get("/simpleOperation", (req, res) => {
  // const { logger } = req;
  // logger.http(`to no simpleOperation`);

  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

app.get("/complexOperation", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 10000000000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

module.exports = app;
