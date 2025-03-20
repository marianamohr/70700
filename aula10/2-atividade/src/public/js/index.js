const socket = io();

console.log('Conectado ao servidor de socket');

const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const messageList = document.getElementById('messageList');

sendMessageButton.addEventListener('click', () => {
  const message = messageInput.value.trim();

  if (message != '') {
    socket.emit('message', message);
    messageInput.value = '';
    console.log('Mensagem enviada em tempo real');
  }
});

socket.on('message', (messages) => {
  messageList.innerHTML = '';

  messages.forEach((data) => {
    const li = document.createElement('li');
    li.textContent = `${data.socketId}: ${data.message}`;
    messageList.appendChild(li);
  });
});

