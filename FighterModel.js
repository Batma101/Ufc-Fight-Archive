const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const fighterSchema = new Schema ({

        name:{
            type : String,
            required : true
        },
        nickname:{
        type : String,
        required : true
        },
        division : {
            type : String,
            required : true
        },
        record : {
            type : String,
            required : true
        },
        age : {
            type : String,
            required : true
        },
        height : {
            type : String,
            required : true
        },
        weight : {
            type : String,
            required : true
        },
        reach:{
            type:String,
            required: false
        },
        imgURL : {
            type : String,
            required : true
    },

},{timestamps : true})

module.exports = mongoose.model('Fighter', fighterSchema)





















