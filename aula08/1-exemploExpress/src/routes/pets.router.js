const express = require('express');

const router = express.Router();

let pets = [];

router.get('/', (req, res) => {
  return res.status(200).json(pets);
});

router.post('/', (req, res) => {
  try {
    const novoPet = req.body;
    pets.push(novoPet);
    return res.status(201).json(novoPet);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ erro: 'Erro ao cadastrar pet' });
  }
});

module.exports = router;