const socket = io();

console.log('Olá, estou me comunicando pelo socket.io!');

socket.emit('message', 'Olá, servidor!');
socket.emit('message', 'Tudo bem?');

socket.on('message', (message) => {
  console.log(`Mensagem recebida: ${message}`);
});

socket.on('evento_individual', (message) => {
  console.log(`Mensagem recebida: ${message}`);
});

socket.on('evento_broadcast', (message) => {
  console.log(`Mensagem recebida: ${message}`);
});