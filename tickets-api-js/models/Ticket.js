const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  event: {
    ref: "events",
    type: Schema.Types.ObjectId,
  },
  barCode: String,
  owner: String,
});

module.exports = mongoose.model("tickets", ticketSchema);
