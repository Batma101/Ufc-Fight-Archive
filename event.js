const express = require('express')
const Fighter = require('../models/EventModel')
const {getEvent , createEvent , deleteEvent} = require('../controllers/fightController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
router.use(requireAuth)
// GET all fights in the event
router.get('/', getEvent)
//Create Event
router.post('/', createEvent)
//Delete Event
router.delete('/:id', deleteEvent)


module.exports = router