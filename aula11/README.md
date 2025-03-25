
# WebSocket Chat Application  

Este repositório contém um exercício prático desenvolvido para demonstrar o uso de **WebSocket** em uma aplicação utilizando as bibliotecas **Express**, **Express-Handlebars**, **Nodemon** e **Socket.IO**. Este exercício faz parte do conteúdo apresentado aos alunos do curso de backend na **CoderHouse**.

## 🚀 Deploy  
A aplicação está hospedada no [Glitch](https://glitch.com/), permitindo que você visualize e interaja com o projeto diretamente no navegador.  

Acesse o deploy aqui: **[Link para o Glitch](https://lumpy-curse-spy.glitch.me/)**.  

---

## 🛠️ Tecnologias Utilizadas  

- **Express**: Framework para criação de servidores web no Node.js.  
- **Express-Handlebars**: Ferramenta para renderização de páginas dinâmicas com HTML.  
- **Socket.IO**: Biblioteca para comunicação em tempo real via WebSocket.  
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.  

---

## ⚙️ Instalação e Execução  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```  

2. **Instale as dependências:**  
   ```bash
   npm install
   ```  

3. **Inicie o servidor:**  
   ```bash
   npm run dev
   ```  
   O servidor será iniciado em `http://localhost:8080`.  

---

## 💡 Funcionalidades  

- Enviar mensagens em tempo real entre os usuários conectados.  
- Renderização de mensagens no front-end utilizando Handlebars.  
- Comunicação bidirecional entre cliente e servidor com Socket.IO.  

---

## 📝 Como Usar  

1. Acesse o endereço local ou o deploy no Glitch.  
2. Abra a aplicação em dois ou mais navegadores/abas.  
3. Digite uma mensagem no campo de texto e envie.  
4. Observe as mensagens aparecendo em tempo real para todos os usuários conectados.  

---

## 📂 Estrutura do Projeto  

```plaintext
├── public/               # Arquivos estáticos (CSS, JS, imagens)  
├── views/                # Templates Handlebars  
│   ├── layouts/          # Layouts base  
│   └── ...               # Páginas e componentes  
├── src/                  # Código fonte do servidor  
│   ├── app.js            # Configuração principal do app  
│   └── routes/           # Rotas da aplicação  
├── package.json          # Dependências e scripts  
└── README.md             # Documentação  
```

---

## 📚 Contexto Educacional  

Este exercício foi projetado como parte de uma aula prática para os estudantes da **CoderHouse** no módulo de backend. O objetivo foi ensinar a integração de WebSocket com uma aplicação em **Node.js**, promovendo a comunicação em tempo real entre cliente e servidor.

---

## 🖥️ Deploy no Glitch  

Para visualizar ou modificar o projeto diretamente no **Glitch**:  
1. Acesse [glitch.com](https://glitch.com/).  
2. Faça login com sua conta.  
3. Importe o repositório e inicie o ambiente.  

---

## 🏆 Desafios Propostos  

1. Adicionar um nome de usuário para identificar as mensagens.  
2. Exibir um alerta quando um novo usuário se conectar.  

---

## 🖋️ Contribuição  

Se você é um estudante e deseja aprimorar este exercício, sinta-se à vontade para criar um *fork*, fazer alterações e enviar um *pull request*.  

---

## 📧 Contato  

Caso tenha dúvidas ou sugestões, entre em contato:  
📩 **[alessandra.rosarezende@gmail.com]**  

---  

Divirta-se aprendendo e explorando WebSocket! 🚀  
