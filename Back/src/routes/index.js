const express = require("express");
const onsearchRuta = require("../routes/onsearchRouter");
const DetailRuta = require("../routes/detailRouter");
const router = express.Router();
const logins = require("../routes/login.Router");
const favoritoss = require("../routes/favRoutes");
// MAILDDWARES:
router.use("/favoritos", favoritoss);
router.use("/login", logins);
router.use("/detail", DetailRuta);
router.use("/onsearch", onsearchRuta);

module.exports = router;
