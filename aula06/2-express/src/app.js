const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Vá para a rota /saudar')
});

app.get('/saudar', (req, res) => {
  res.send('Olá, sejam bem vindos! Agora do express')
});

app.listen(8080, () => {
  console.log('Servidor na porta 8080');
})