const db = require("../models/dbConnection")
const ObjectId = require("mongodb").ObjectId

//showAll Customers:
const showAll = (req, res) => {
    db((err,connection) => {
    
    connection.collection("customer").find().toArray((e, users) => {
        if(e) res.send(e)
        res.render("showAll", {
        pageTitle: "Show All Customers", users,
        isEmpty: users.length ==0 ? true : false
    })
    })

    })
}

//show Customer:

const show = (req,res)=>{
    let customerId = req.params.id
    db((err, connection) => {
        connection.collection("customer").findOne({_id: new ObjectId(customerId) }, 
        (e, result) => {
            res.render("show", {
        pageTitle:"User Data", 
        customer: result,
        isEmpty: result? false : true
    })
        })
    })

    
}



//add Customer:
const addCustomer = (req,res)=>{

    res.render("add", {
        pageTitle:"Add New User"
    })
}


const addLogic = (req, res) => {
    let customer = {...req.body}
db((err, connection) => {
connection.collection("customer").insertOne(req.body, (err, result) => {
    if(err) res.send(err) 
    res.redirect("/")
})
})
}

//edit user
const editUser = (req,res)=>{
    let userId = req.params.id
    db((err, connection) => {
        connection.collection("customer").findOne({_id: new ObjectId(userId) }, 
        (e, result) => {
            res.render("edit", {
        pageTitle:"Edit User", 
        user: result,
        isEmpty: result? false : true
    })
        })
    })



}

const editLogic = (req, res) => {
    db((err, connection)=> {
        if(err) res.send(err)
        connection.collection("customer").updateOne(
            {_id : new ObjectId(req.params.id)},
            {$set: req.body}
        ) 
        .then(()=> res.redirect("/"))
        .catch (e => res.send(e))
    })

}

//delete user
const deleteUser = (req,res)=>{
    let userId = req.params.id
    db((err, connection) => {
    connection.collection("customer").deleteOne({ _id : new ObjectId (userId)})
    .then (() => res.redirect("/"))
    .catch (e => res.send(e))
    })
    
}


//ADD Operation
const addOp = (req, res) => {
    res.render("addOp", {
        pageTitle: "Add Operation"
    })
}

//Add Operation Logic
const addOpLogic = (req, res) => {

    db((err, connection) => {
        connection.collection("customer").insertOne(req.body, (err, result) => {
            if(err) res.send(err) 
            res.redirect("/")
        })
        })

}
module.exports = {showAll, addCustomer, editUser, show , deleteUser, addLogic, editLogic, addOp, addOpLogic}
