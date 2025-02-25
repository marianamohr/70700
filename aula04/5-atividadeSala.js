const fs = require('fs');

const date = JSON.stringify(new Date());

const data = new Date().toString();
console.log(data);

fs.writeFile('./data/dataHora.txt', date, (err) => {
  if (err) {
    return console.log('Erro: ', err);
  }

  fs.readFile('./data/dataHora.txt', 'utf-8', (err, resultado) => {
    if (err) {
      return console.log('Erro: ', err);
    }
    console.log(resultado);
  });

  fs.writeFile('./data/dataHora.txt', 'Agora conteúdo novo!', (err) => {
    if (err) {
      return console.log('Erro: ', err);
    }

    fs.readFile('./data/dataHora.txt', 'utf-8', (err, resultado) => {
      if (err) {
        return console.log('Erro: ', err);
      }
      console.log(resultado);
    });
  });
});