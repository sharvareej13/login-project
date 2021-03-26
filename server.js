const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan') 
const bodyParser = require('body-parser')

const PersonRoute = require('./routes/person')
const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb+srv://shara:sharamongo%4013@cluster0.z7wpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
const db =mongoose.connection

db.on('error', (err) => {
    console.log(err)
});

db.once('open', () =>{
    console.log('DB connected')
});

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3500

app.listen(PORT, ()=> {
    console.log('Server is running on port ${PORT}')
})

app.use('/api/person', PersonRoute)
app.use('/api', AuthRoute)