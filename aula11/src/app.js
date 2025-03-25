const express = require('express');
// const _dirname = require('./utils');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/view.router');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = new Server(server);

// Configura o Handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
// app.set('views', _dirname + '/views');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos
// app.use(express.static(_dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal renderizando uma página usando Handlebars
app.use('/', viewsRouter);

// Configuração do Socket.IO para troca de mensagens em tempo real
io.on('connection', (socket) => {
  console.log('Usuário conectado');

  // Evento de autenticação de usuário
  socket.on('authenticate', (user) => {
    console.log('Usuário autenticado', user);

    // Emitir evento para notificar novo usuário conectado para todos os clientes
    socket.broadcast.emit("userConnected", user);
  });

  // Recebe e retransmite a mensagem para todos os clientes conectados
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Retransmite a mensagem com o nome
  });

  // Mensagem ao desconectar
  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

// Inicia o servidor
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
