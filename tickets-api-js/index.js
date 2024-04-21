const express = require('express')
const events = require('./routes/events')
const tickets = require('./routes/tickets')

const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/events', events);
app.use('/tickets', tickets);
