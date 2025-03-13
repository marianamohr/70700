const express = require('express');

const app = express();

app.use(express.json());

app.get('/antes', (req, res) => {
  res.send('Antes do middleware');
});

// middleware de aplicação - se eu quero que seja aplicado em todas as rotas, eu coloco antes das rotas
app.use((req, res, next) =>{
  console.log('Middleware de aplicação executado na data: ', new Date());
  next();
})

app.get('/depois', (req, res) => {
  res.send('Depois do middleware');
});

app.get('/', (req, res) => {
  throw new Error('ERRO!!!!');
});

// middleware de endpoint
const mid1 = (req, res, next) => {
  req.mid1 = 'Middleware 1';
  next();
}

const mid2 = (req, res, next) => {
  req.mid2 = 'Middleware 2';
  next();
}

app.get('/endpoint', mid2, mid1, (req, res) => {
  res.json({ mid1: req.mid1, mid2: req.mid2 })
})

// middleware de erro - tem que ter 4 parâmetros e precisa ser o último
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json('Ocorreu um erro na aplicação');
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});