const express = require('express')
const Fighter = require('../models/FighterModel')
const {getFighters, getFighter,createFighter} = require('../controllers/fightController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

 router.use(requireAuth)

// GET all fighters
router.get('/',getFighters)

// get single fighter

router.get('/:name',getFighter)

//Create fighter
router.post('/',createFighter)
module.exports = router