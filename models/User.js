const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user1Schema = new Schema({
        name: {
            type:String
        },
        email:{
            type: String
        },
        phone:{
            type:String
        },
        password: {
            type:String
        }
    }, {timestamps: true})

    const User = mongoose.model('User', user1Schema)
    module.exports = User