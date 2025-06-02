const {Router} = require('express');
const userController = require('../controllers/users.controller');

const router = Router();


router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.saveUser);

module.exports = router;