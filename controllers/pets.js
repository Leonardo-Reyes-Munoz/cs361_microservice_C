const { petData } = require('../assets/data');

console.log('Successful Request for all Pet Data.');
const getAllPetData = async (req, res) => {
  res.status(200).json(petData);
};

const getPetDescriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    let petInfo = '';
    petData.forEach(function (pet) {
      if (pet.id == id) {
        petInfo = pet.description;
      }
    });
    if (!petInfo) {
      res.status(201).send('Description not found');
    }

    console.log(
      `Successful request for Pet Description information for Pet with ID ${id}`
    );
    res.status(200).json(`${petInfo}`);
  } catch (err) {
    console.log('Error occurred: ', err);
  }
};

module.exports = {
  getAllPetData,
  getPetDescriptionById,
};
