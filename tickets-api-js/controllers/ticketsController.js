function createTicket(req, res) {
    const eventId = req.params?.eventId
}

function getTicket(req, res) {
    const eventId = req.params?.eventId
    const ticketId = req.params?.id

    const ticket = {ticketId, eventId}
    res.send(`Your ticket for event is : ${JSON.stringify(ticket)}`)
}

module.exports = {createTicket, getTicket}
