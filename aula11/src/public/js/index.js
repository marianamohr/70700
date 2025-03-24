const socket = io();

let userName;

Swal.fire({
  title: 'Identificação',
  text: 'Necessário identificar-se para acessar o chat',
  input: 'text',
  inputLabel: 'Nome de usuário',
  allowOutsideClick: false,
  allowEscapeKey: false,
  icon: 'success',
  inputValidator: (value) => {
    if (!value) {
      return 'Por favor, insira um nome de usuário';
    }
  }
}).then((result) => {
  userName = result.value;

  socket.emit('authenticate', userName);

  socket.on('user connected', (user) => {
    if (user !== userName) {
      Swal.fire({
        title: 'Novo usuário conectado',
        text: `${user} entrou na sala`,
        icon: 'info',
        toast: true,
        position: 'top-right'
      })
    }
  });
});

socket.on('chat message', (msg) => {
  const chatBox = document.getElementById('chatBox');
  const message = document.createElement('p');
  message.textContent = msg;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage() {
  const message = document.getElementById('messageInput');
  if (message.value) {
    socket.emit('chat message', `${userName}: ${message.value}`);
  }
  message.value = '';  
}

messageInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (messageInput.value.trim().length > 0) {
      event.preventDefault();
      sendMessage();
    }
  }
});