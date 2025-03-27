const express = require('express');
const usersRouter = require('./routes/users.router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
