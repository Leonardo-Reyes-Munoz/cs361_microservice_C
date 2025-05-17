const getAllImages = async (req, res) => {
  res.send('Get all images');
};

const getPetImages = async (req, res) => {
  res.send(`Get pet images`);
};

const getHeroImages = async (req, res) => {
  res.send(`Get hero images`);
};

module.exports = {
  getAllImages,
  getPetImages,
  getHeroImages,
};
