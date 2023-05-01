const express = require("express");
const { Router } = express;
const favoritoss = Router();
const { FavDelete, FavGet, FavPost } = require("../controllers/Fav");

favoritoss.get("/", async (req, res) => {
  try {
    const { idUser } = req.query;
    console.log(req.query);
    const resultado = await FavGet(idUser);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favoritoss.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { idUser } = req.query;
    const favdelete = await FavDelete(id, idUser);
    res.status(200).json(favdelete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favoritoss.post("/", async (req, res) => {
  try {
    const { name, image, species, gender, idUser } = req.body;
    if (!name || !image || !species || !gender) {
      res.status(401).json({ error: "Faltan datos" });
    } else {
      const personajeNuevo = await FavPost({
        name,
        image,
        species,
        gender,
        idUser,
      });
      res.status(200).json(personajeNuevo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = favoritoss;
