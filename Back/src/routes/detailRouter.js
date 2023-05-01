const express = require("express");
const getCharDetail = require("../controllers/getCharDetail");
const DetailRuta = express.Router();

DetailRuta.get("/:id", getCharDetail);

module.exports = DetailRuta;
