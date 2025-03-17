const express = require('express');
const petsController = require('../controllers/pets.controller');

const router = express.Router();

// let pets = []; // passou para o controller

// // middleware de rota
// router.use((req, res, next) => {
//   console.log('Middleware de rota executado na data: ', new Date());
//   next();
// });

router.get('/', petsController.getPets);

router.post('/', petsController.addPet);

module.exports = router;