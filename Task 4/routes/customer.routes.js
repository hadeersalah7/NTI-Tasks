const router = require("express").Router()

const customerController = require("../app/controllers/customer.controller")


router.get("/", customerController.showAll)
router.get("/add", customerController.addCustomer)
router.get("/show", customerController.show)
router.get("/addOp/:id", customerController.addOp)
module.exports = router