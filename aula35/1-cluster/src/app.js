const cluster = require('cluster');
const { cpus } = require('os');
const express = require('express');

const numCPUs = cpus().length;
// console.log(numCPUs);

const isPrimaryOrWorker = cluster.isPrimary ? `Processo pai` : `Worker`;

console.log(isPrimaryOrWorker);

if (cluster.isPrimary) {
  console.log(`Processo primário (PID ${process.pid}). Gerando worker`);
  console.log('Bye Bye');

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
} else {
  const app = express();

  console.log(`Sou um processo worker (PID ${process.pid}).`);

  app.get('/', (req, res) => {
    res.send({status: 'sucess', message: `Requisição atendida por um worker - ${process.pid}`})
  });

  app.get('/simpleOperation', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    res.send({ status: 'success', message: `O worker ${process.pid} atendeu a requisição e o resultado é ${sum}` });
  });

  app.get('/complexOperation', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    res.send({ status: 'success', message: `O worker ${process.pid} atendeu a requisição e o resultado é ${sum}` });
  });

  app.listen(8080, () => {
    console.log(`${process.pid}: Servidor rodando na porta 8080`);
  })
  
}