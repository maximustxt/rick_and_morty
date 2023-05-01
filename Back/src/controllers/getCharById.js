const axios = require("axios");
const { KEY, URL } = process.env;

const getCharById = async (req, res) => {
  try {
    const idChar = req.params.id;
    const response = await axios.get(`${URL}/character/${idChar}?key=${KEY}`);
    const { id, name, species, gender, image } = response.data;
    const objeto = { id, name, species, gender, image };
    res.status(200).json(objeto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getCharById;
