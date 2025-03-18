const express = require('express');

const router = express.Router();

const usuarios = [
  {
    nome: 'Alessandra',
    sobrenome: 'Rezende',
    idade: 37,
    email: 'ale@example.com',
    telefone: '123456789',
    role: 'admin'
  },
  {
    nome: 'Léo',
    sobrenome: 'Rezende',
    idade: 14,
    email: 'leo@example.com',
    telefone: '123-456-7890',
    role: 'user'
  },
  {
    nome: 'Helena',
    sobrenome: 'Rezende',
    idade: 11,
    email: 'helena@example.com',
    telefone: '987-654-3210',
    role: 'admin'
  },
  {
    nome: 'John',
    sobrenome: 'Doe',
    idade: 18,
    email: 'john@example.com',
    telefone: '111-222-3333',
    role: 'user'
  },
  {
    nome: 'Sue',
    sobrenome: 'Doe',
    idade: 18,
    email: 'sue@example.com',
    telefone: '444-555-6666',
    role: 'admin'
  },
  {
    nome: 'Back',
    sobrenome: 'End',
    idade: 25,
    email: 'backEnd@example.com',
    telefone: '777-888-9999',
    role: 'admin'
  }
];

const food = [
  { name: "Burgão", price: 10 },
  { name: "hotdog", price: 15 },
  { name: "Risoto", price: 40 },
  { name: "Pasta", price: 35 },
];

router.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * usuarios.length);
  const usuario = usuarios[randomIndex];

  res.render('user', {  // user -> view user.handlebars
    usuario,
    isAdmin: usuario.role === 'admin',
    food,
    style: 'index.css'
  });
});

module.exports = router;