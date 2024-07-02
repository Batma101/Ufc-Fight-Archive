const { json } = require('express')
const Fight = require('../models/FightModel')
const mongoose = require('mongoose')
const FighterModel = require('../models/FighterModel')
const Event = require('../models/EventModel')


// Get all fights for the Event coming up
const getEvent = async(req,res) => {
    const eventFights = (await Event.find({}))
    res.status(200).json(eventFights)
}


// get all Fights in UFc Fights
const getFights = async(req, res) => {
    const fights = (await Fight.find({}))

    res.status(200).json(fights)
    
}
// get all fighters
const getFighters = async(req, res) => {
    const fighters = (await FighterModel.find({}))


    res.status(200).json(fighters)
    
}


//Get Single Fighter
const getFighter = async(req,res) =>{
    const {name} = req.params

    //Checks if Id sent by user is a correct mongo db ID
   

    // Looks for the fighter in the Fights DB
    const fighter = await FighterModel.findOne({name}, )

    // If fight isnt found returns a 404 error with a message
    if (!FighterModel){
        return res.status(404).json({error: "No such fighter"})
    }

    // if Fight is found returns a status 200 with the fighter
    res.status(200).json(fighter)
}

// get single Fight

const getFight = async(req,res) =>{
    const {id} = req.params

    //Checks if Id sent by user is a correct mongo db ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such FIGHT'})
    }

    // Looks for the fight in the Fights DB
    const fight = await Fight.findById(id)

    // If fight isnt found returns a 404 error with a message
    if (!fight){
        return res.status(404).json({error: "No such fight"})
    }

    // if Fight is found returns a status 200 with the fight
    res.status(200).json(fight)
}


// create New Event Coming Up
    const createEvent = async(req,res) => {
        const {Name, MainEvent, Fight2,Fight3,Fight4,Fight5,Fight6,Fight7,Fight8,Fight9,Fight10,Fight11,Fight12,Fight13,Fight14} = req.body


            try {
                const event = await Event.create({Name, MainEvent, Fight2,Fight3,Fight4,Fight5,Fight6,Fight7,Fight8,Fight9,Fight10,Fight11,Fight12,Fight13,Fight14})
                res.status(200)

            } catch (error) {
                res.status(400).json({error: error.message})   
            }
    

    }


// create new fight
    const createFight = async(req,res) => {
        const{EVENT, BOUT, OUTCOME, WEIGHTCLASS, METHOD, ROUND, TIME, TIMEFORMAT,REFEREE, DETAILS,URL} = req.body
        // add Doc to DB
    try {
        const fight = await Fight.create({EVENT, BOUT, OUTCOME, WEIGHTCLASS, METHOD, ROUND, TIME, TIMEFORMAT,REFEREE, DETAILS,URL})
        res.status(200).json(fight)   
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    }
// create new Fighter 

    const createFighter = async(req,res) =>{
        const{name,nickname,division,record,age,height,weight,reach,imgURL} = req.body
        try {
            const fighter = await FighterModel.create({name,nickname,division,record,age,height,weight,reach,imgURL})
            res.status(200).json(fighter)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
//delete a workout
const deleteFight = async(req, res) =>{
    // Gets the Id from the User
    const {id} = req.params

    // Checks to see if the ID is a valid mongoose id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such FIGHT'})
    }

    // Finds the id and deletes it
    const fight = await Fight.findOneAndDelete({_id: id})

    // if Fight cannot be found sends back this message
    if(!fight){
        return res.status(404).json({error: 'No fight to delete'})
    }

    // If fight is found and deleted sends this back
    res.status(200).json(fight)
}

const deleteEvent = async(req,res) => {
    const {id} = req.params
    // Checks to see if the ID is a valid mongoose id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Event'})
    }

    // Finds the id and deletes it
    const event = await Event.findOneAndDelete({_id: id})

    // if Fight cannot be found sends back this message
    if(!event){
        return res.status(404).json({error: 'No fight to delete'})
    }

    // If Event is found and deleted sends this back
    res.status(200).json(event)
    } 


//update a fight
const updateFight = async(req, res) =>{
    //Gets id from the user search param
    const {id} = req.params

    // checks if id is a mongoose ID
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No such fight'})
    }

    // Finds the fight with that id and updates it. Because an object is bein
    //being sent. The req.body object has to get spread.
    const fight = await Fight.findOneAndUpdate({_id: id},{
        
        ...req.body

    })

    // if cant find fight send back status (404) with a message
    if(!fight) {
        res.status(404).json({error: 'No such Fight'})
    }

    // else send back status 200 with the fight with new params.
    res.status(200).json(fight)

}



module.exports = {
    createFight,
    getFights,
    getFight,
    updateFight,
    deleteFight,
    getFighters,
    getFighter,
    createFighter,
    getEvent,
    createEvent,
    deleteEvent
}