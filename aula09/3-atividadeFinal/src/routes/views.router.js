const express = require('express');
const users = require('../users');

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register', { style: 'index.css'});
});

router.get('/list', (req, res) => {
  res.render('list', { style: 'index.css', users });
});

router.get('/', (req, res) => {
  res.render('index', { style: 'index.css'});
});

module.exports = router;