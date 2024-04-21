const express = require('express')
const controller = require('../controllers/ticketsController')
const router = express.Router()

router.get('/:eventId/:id', controller.getTicket)
router.post('/:eventId', controller.createTicket)

module.exports = router
