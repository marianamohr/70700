const express = require('express');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear URL-encoded

const server = http.createServer(app);
const io = new Server(server);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);

io.on('connection', (socket) => {
  console.log('Usuário conectado');
  
  socket.on('authenticate', (user) => {
    socket.broadcast.emit('user connected', user);
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

server.listen(8080, () => {
  console.log('Servidor iniciado en http://localhost:8080');
})