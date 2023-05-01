const axios = require("axios");
const { KEY, URL } = process.env;

const getCharDetail = async (req, res) => {
  try {
    const DetailID = req.params.id;
    const response = await axios.get(`${URL}/character/${DetailID}?key=${KEY}`);
    const { id, image, name, gender, species, origin, status } = response.data;
    res.status(200).json({ id, image, name, gender, species, origin, status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharDetail;
