const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const events = require("./routes/events");
const tickets = require("./routes/tickets");
const home = require("./routes/home");

const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/events", events);
app.use("/tickets", tickets);
app.use("/", home);
