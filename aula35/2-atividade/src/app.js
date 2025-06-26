const express = require('express');
const cluster = require('cluster');
const os = require('os');

const numCpus = os.cpus().length;

if (cluster.isPrimary) {
  console.log('Processo primário, gerando processo trabalhador');

  console.log(`Processadores disponíveis: ${numCpus}`);
  console.log(`Processador primário: ${process.pid} está rodando`);

  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} morreu, criando um novo worker.....`);
    cluster.fork();
  });
  
} else {
  const app = express();
  app.get('/', (req, res) => {
    res.send('Olá do Worker ' + process.pid);
  })
  app.listen(8080, () => {
    console.log(`Worker ${process.pid} rodando na porta 8080`);
  })
}   