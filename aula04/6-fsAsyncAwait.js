const fs = require('fs');

const operacoesAssincronas = async () => {
  await fs.promises.writeFile('./data/exemploPromises.txt', 'Hello again, Coders! Agora com Promises.');
  let resultado = await fs.promises.readFile('./data/exemploPromises.txt', 'utf-8');
  console.log(resultado);

  await fs.promises.writeFile('./data/exemploPromises.txt', 'Agora conteúdo novo! De novo!');
  resultado = await fs.promises.readFile('./data/exemploPromises.txt', 'utf-8');
  console.log(resultado);

  fs.appendFileSync('./data/exemploPromises.txt', ' Mais conteúdo!')
  resultado = fs.readFileSync('./data/exemploPromises.txt', 'utf-8');
  console.log(resultado);
}

console.log('Antes da função');
operacoesAssincronas();
console.log('Depois da função');