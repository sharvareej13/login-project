const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: {
        type:String
    },
    designation: {
        type:String
    },
    email:{
        type: String
    },
    phone:{
        type:String
    },
    age: {
        type:Number
    }
    
}, {timestamps: true})

const Person = mongoose.model('Person', personSchema)
module.exports = Person