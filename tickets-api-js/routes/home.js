const express = require("express");
const controller = require("../controllers/eventsController");
const router = express.Router();

router.get("/", controller.findEvents);

module.exports = router;
