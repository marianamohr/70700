const express = require('express');
const users = require('../users');

const router = express.Router();

router.post('/', (req, res) => {
  console.log('body', req.body);

  const { name, email, password } = req.body;
  if(!name || !email || !password) {
    return res.status(400).send('Name, email and password are required');
  }

  users.push({ name, email, password });

  console.log('users', users);
  res.status(201).send('User created');
});

module.exports = router;