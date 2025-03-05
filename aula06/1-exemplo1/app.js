const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.end('Meu primeiro servidor backend na Coder! É um servidor http simples para testar o nodemon! Vale a pena')
});

server.listen(8080, () => {
  console.log('Servidor ouvindo na porta 8080');
});