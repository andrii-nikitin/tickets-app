function createEvent(req, res) {

}

function deleteEvent(req, res) {
    const eventId = req.params?.id
}

function updateEvent(req, res) {
    const eventId = req.params?.id
}

function getEvent(req, res) {
    const eventId = req.params?.id

    const event = {eventId}
    res.send(`Your event: ${JSON.stringify(event)}`)
}

module.exports = {createEvent, deleteEvent, updateEvent, getEvent}
