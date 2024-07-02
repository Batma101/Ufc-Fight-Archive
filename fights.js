const express = require('express')
const Fight = require('../models/FightModel')
const {
    createFight,
    getFights,
    getFight,
    deleteFight,
    updateFight,
} = require('../controllers/fightController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
 router.use(requireAuth)

// GET all FIGhTS
router.get('/', getFights)

// GET single fight

router.get('/:id',getFight)
// POST a new fight

router.post('/', createFight)

// DELETE single fight

router.delete('/:id',deleteFight)

// UPDATE A single fight

router.patch('/:id',updateFight)


module.exports = router