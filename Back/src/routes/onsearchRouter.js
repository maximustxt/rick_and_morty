const express = require("express");
const getCharById = require("../controllers/getCharById");
const onsearchRuta = express.Router();

onsearchRuta.get("/:id", getCharById);

module.exports = onsearchRuta;
