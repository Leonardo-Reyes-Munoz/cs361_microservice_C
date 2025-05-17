const express = require('express');
const router = express.Router();

const {
  getAllImages,
  getPetImages,
  getHeroImages,
} = require('../controllers/images');

router.get('/', getAllImages);
router.get('/petimages', getPetImages);
router.get('/heroimages', getHeroImages);

module.exports = router;
