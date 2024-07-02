const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const FightSchema = new Schema({

    EVENT: {
       type: String,
       required: true 
    },

    BOUT:{
        type: String,
        required: true
    },
    OUTCOME: {
        type: String,
        required: true
    },
    WEIGHTCLASS: {
        type: String,
        required: true
    },
    METHOD: {
        type: String,
        required: true
    },
    ROUND: {
        type: Number,
        required: true
    },
    TIME: {
        type: String,
        required: true
    },
    TIMEFORMAT: {
        type: String,
        required: true
    },
    REFEREE: {
        type: String,
        required: false
    },
    DETAILS: {
        type:String,
        required: false
    },
    URL: {
        type: String,
        required: true
    },

}, {timestamps: true})

module.exports = mongoose.model('Fight', FightSchema)