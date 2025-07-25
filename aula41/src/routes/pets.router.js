import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

router.get('/',petsController.getAllPets);
router.get('/:pid', petsController.getPetById)
router.post('/',petsController.createPet);
router.put('/:pid',petsController.updatePet);
router.delete('/:pid',petsController.deletePet);
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);

export default router;