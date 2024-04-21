module.exports.createTicket = function (req, res) {
  const ticket = req.body || {};
  ticket.id = Math.floor(Math.random() * 100000);
  ticket.eventId = req.params?.eventId;
  res.status(200).json(ticket);
};

module.exports.getTicket = function (req, res) {
  const eventId = req.params?.eventId;
  const ticketId = req.params?.id;
  res.status(200).json({ ticketId, eventId });
};
