const express = require("express");
const logins = express.Router();
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");

//*-----------------------------------GET----------------------*//

logins.get("/", async (req, res) => {
  try {
    const { username, password } = req.query;
    if (!username || !password) {
      res.status(400).json({ error: "faltan datos" });
    } else {
      const response = await login({ username, password });
      res.status(200).json({
        ...response,
        access: true,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//*-----------------------------------POST----------------------*//

logins.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: "faltan datos" });
    } else {
      const Respuesta = await postUser({ username, password });
      res.status(200).json(Respuesta);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = logins;
