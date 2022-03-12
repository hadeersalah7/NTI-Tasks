const chalk = require("chalk")

const dealWithCustomer = require("./dealWithCustomer")

const addCustomer = (customerData) => {
    try {  
        if(customerData.name <3) throw new Error ("Name is invalid")
    const customer = dealWithCustomer.readData()

    customer.push(customerData)
    
    dealWithCustomer.writeData(customer)

    console.log(chalk.green("New Customer Added"))
}
 catch(err){
     console.log(chalk.red(err.message))
 }
}


const addOperation = (accNumber, type, value, date) => {
   const customer = dealWithCustomer.readData()

   const i = customer.findIndex(u => u.accNumber == accNumber)

   console.log(i)

   const remainingNum = customer[i]["remaingBalance"]

   if(type= "add") {
       if (value > 5000) return console.log("value added succefully")

   } else if (type="withdraw") {
       if (remainingNum < value) return console.log("Your balance is unsufficient")
   }
    
 date = customer[i].getTime()

   dealWithCustomer.writeData()
}



module.exports = {addCustomer, addOperation}