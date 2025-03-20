const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const viewRouter = require('./routes/view.router');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);

const socketServer = new Server(server);

let messages = [];

socketServer.on('connection', (socket) => {
  console.log('Usuário conectado');

  socket.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);

    const data = {
      socketId: socket.id,
      message: message
    };

    messages.push(data);

    socketServer.emit('message', messages);

    // socket.emit('message', messages); // manda só pro socket que originou a mensagem

    // socket.broadcast.emit('message', messages); // manda pra todos, menos pro socket que originou a mensagem
  })

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
    messages = [];
  });
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});