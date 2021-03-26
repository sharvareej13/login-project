const Person = require('../models/Person')

//show the list of employees
const index = (req,res, next) =>{
    Person.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured'
        })
    })
}
//show single user
const show = (req , res, next) => {
    let personID = req.body.personID
    Person.findById(personID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

//add an user
const store = (req, res, next) => {
    let person = new Person({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    person.save()
    .then(response => {
        res.json({
            message: ' user added success'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

//update an user
const update = (req, res, next) => {
    let personID = req.body.personID
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    person.findByIdAndUpdate(personID, {$set: updatedData})
    .then(() => {
        res.json({
            message: ' user updated success'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

//delete an user
const destroy = (req, res, next) => {
    let personID = req.body.personID
    Person.findByIdAndRemove(userID)
    .then(() => {
        res.json({
            message: ' user deleted success'
        })
    })
    
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}
 module.exports = {
     index, show, store, update, destroy
 }


