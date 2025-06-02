const express = require('express');
const router = express.Router();

const { getAllPetData, getPetDescriptionById } = require('../controllers/pets');

router.get('/', getAllPetData);
router.get('/:id', getPetDescriptionById);

module.exports = router;
