const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();

// let users = [];

const mid2 = (req, res, next) => {
  console.log('mid2');
  next();
}

const mid1 = (req, res, next) => {
  console.log('mid1');
  next();
}

router.get('/', mid2, usersController.getUsers);

router.post('/', mid1, usersController.addUser);

module.exports = router;