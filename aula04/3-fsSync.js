const fs = require('fs');

const produtos = [
  { produto: 'Café', preco: 8.50 },
  { produto: 'Arroz', preco: 5.50 }
];

fs.writeFileSync('./data/exemplo.txt', JSON.stringify(produtos));

const exists = fs.existsSync('./data/exemplo.txt');
console.log(exists);

let conteudo;

if (exists) {
  conteudo = fs.readFileSync('./data/exemplo.txt', 'utf-8');
  console.log(conteudo);
  fs.writeFileSync('./data/exemplo.txt', ' Agora conteúdo novo!') // substitui

  fs.appendFileSync('./data/exemplo.txt', '\nMais conteúdo!') // acrescenta
  conteudo = fs.readFileSync('./data/exemplo.txt', 'utf-8');
  console.log(conteudo);

  fs.unlinkSync('./data/exemplo.txt'); // deleta o arquivo
}
