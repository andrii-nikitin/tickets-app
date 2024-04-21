const { get } = require("lodash");
const Event = require("../models/Event");

module.exports.createEvent = async (req, res) => {
  const name = get(req, "body.name");
  const description = get(req, "body.description");

  await Event.create({ name, description })
    .then((response) => {
      console.log(`EventController : Added ${name} to Database`);
      res.status(201).json({
        status: "S",
        message: `Added ${name} to Database`,
        id: response._id,
      });
    })
    .catch(() => {
      console.error("EventController : Failed to add to DB");
      res.status(400).json({
        status: "E",
        message: "Failed to Add to Database",
      });
    });
};

module.exports.deleteEvent = async (req, res) => {
  const id = get(req, "params.id");

  await Event.findByIdAndDelete(id)
    .then(() => {
      console.log("EventController : Deleted from database");
      res.status(200).json({ status: "S", message: `Deleted from database` });
    })
    .catch(() => {
      console.error("EventController : Failed to delete from DB");
      res.status(400).json({
        status: "E",
        message: "Failed to Delete from Database",
      });
    });
};

module.exports.updateEvent = async (req, res) => {
  const id = get(req, "params.id");

  res.status(400).json({
    status: "E",
    message: "Not implemented yet",
  });
};

module.exports.getEvent = async (req, res) => {
  const id = get(req, "params.id");

  await Event.findById(id)
      .then((data) => {
        console.log("EventController : Fetch successfully from Database");
        res
            .status(200)
            .json({ status: "S", message: "Fetch successfully", data });
      })
      .catch(() => {
        console.error("EventController : Failed to fetch from  DB");
        res.status(400).json({
          status: "E",
          message: "Failed to Fetch from Database",
        });
      });
};

module.exports.findEvents = async (req, res) => {

  await Event.find()
      .then((data) => {
        console.log("EventController : Fetch successfully from Database");
        res
            .status(200)
            .json({ status: "S", message: "Fetch successfully", data });
      })
      .catch(() => {
        console.error("EventController : Failed to fetch from  DB");
        res.status(400).json({
          status: "E",
          message: "Failed to Fetch from Database",
        });
      });
};
