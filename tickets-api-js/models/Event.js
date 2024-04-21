const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: String,
  date: Date,
  description: String,
  title: String,
});

module.exports = mongoose.model("events", eventSchema);
