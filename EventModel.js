const mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema = new Schema({
    user_id : {
        type: String,
        required: true
    },
    Name :{
        type: String,
        required: true
    },
    MainEvent : {
        type: String,
        required: true
    },
    Fight2 : {
        type: String,
        required: true
    },
    Fight3 : {
        type: String,
        required: true
    },
    Fight4 : {
        type: String,
        required: true
    },
    Fight5 : {
        type: String,
        required: true
    },
    Fight6 : {
        type: String,
        required: true
    },
    Fight7 : {
        type: String,
        required: true
    },
    Fight8 : {
        type: String,
        required: true
    },
    Fight9 : {
        type: String,
        required: true
    },
    Fight10 : {
        type: String,
        required: true
    },
    Fight11 : {
        type: String,
        required: false
    },
    Fight12 : {
        type: String,
        required: false
    },
    Fight13 : {
        type: String,
        required: false
    },
    Fight14 : {
        type: String,
        required: false
    },

},{timestamps:true})

module.exports = mongoose.model('Event', eventSchema)