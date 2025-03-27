const express = require('express');
const uploader = require('../utils/multer');

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.status(200).send({ message: users });
});

router.post('/', uploader.single('avatar'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Campo avatar é obrigatório' });
  };

  console.log(req.file);

  let user = req.body;

  user.profile = req.file.path;

  users.push(user);
  res.status(201).send({ message: user });
})

module.exports = router;