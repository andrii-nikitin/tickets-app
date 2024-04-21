const express = require("express");
const controller = require("../controllers/eventsController");
const router = express.Router();

router
  .route(`/:id`)
  .get(controller.getEvent)
  .put(controller.updateEvent)
  .delete(controller.deleteEvent);

router.post("/", controller.createEvent);

module.exports = router;
