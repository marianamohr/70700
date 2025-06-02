const {Router} = require('express');
const businessController = require('../controllers/business.controller');

const router = Router();


router.get('/', businessController.getBusiness);
router.post('/', businessController.createBusiness);

router.get('/:bid', businessController.getBusinessById);
router.post('/:bid/product', businessController.addProduct);

module.exports = router;