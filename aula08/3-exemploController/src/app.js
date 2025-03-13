const express = require('express');
const path = require('path');
const userRouter = require('./routes/user.router');
const petRouter = require('./routes/pets.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRouter);
app.use('/api/pets', petRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})