const express = require('express');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');
const path = require('path');
const { Server } = require('socket.io');
const http = require('http');

const app = express();

const server = http.createServer(app);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);

const socketServer = new Server(server);

socketServer.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
  });

  socketServer.emit('message', 'Olá, cliente!'); // para todos os clientes

  socket.emit('evento_individual', 'Essa mensagem só vai ser recebida pelo cliente!'); // para um cliente

  socket.broadcast.emit('evento_broadcast', 'Essa mensagem vai ser recebida por todos os clientes, menos o emissor!'); // para todos os clientes, menos o emissor
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});