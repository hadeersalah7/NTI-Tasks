const deal = require("../helpers/dealWithJSON")


//SHOW ALL CUSTOMERS:
const showAll = (req, res) => {
    let customers = deal.readData()
    res.render("showAll", {
        pageTitle: "Show All Customers", customers,
        isEmpty: customers.length == 0 ? true : false
    })
    
}


//ADD CUSTOMERS: 
const addCustomer = (req, res) => {
    let customer = {
    id: Date.now(),
    name: req.query.name,
    intialBalance: req.query.intialBalance,
    remaining: req.query.remaining
    }

    if(req.query.name && req.query.intialBalance && req.query.remaining){
        let data = deal.readData()
        data.push(customer)
        deal.writeData(data)
        res.redirect("/")
    }


    res.render("add", {
        pageTitle: "add Customer", customer
    })
}

//SHOW CUSTOMERS: 
const show = (req, res) => {
      
    let customerId = req.params.id

    let customerInfo = deal.readData()

    let customer = customerInfo.find(c => c.id == customerId)

    res.render("show", {
        pageTitle: "customer Data", customer,
        isEmpty: customer? true : false
    })
}

//ADD OPERATION:
// const addOp = (req, res) => {
// const accNum = req.params.accNum
//     let allCustomers = deal.readData()
//     let i = allCustomers.find(c => c.accNum == accNum)
//     if (req.query.opType == "withdraw") {
//         if ((allCustomers[i].remaining) < (req.query.OpVal)) return {message: "Your Balance is not enough"}
//     } else {
        
//     }
//     res.render("add operation", {
//         pageTitle: "Add New Operation"
//     })
// }


module.exports = {showAll, addCustomer, show}