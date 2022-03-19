const router = require("express").Router()

const userController = require("../app/controllers/user.controller")


router.get("/", userController.showAll)
router.get("/add", userController.addCustomer)
router.post("/add", userController.addLogic)



// router.get("/", userController.showAll)

router.get("/edit/:id", userController.editUser)
router.post("/edit/:id", userController.editLogic)
router.get("/show/:id", userController.show)
router.get("/delete/:id", userController.deleteUser)


router.get("/addOp/:id", userController.addOp)
router.post("/addOp/:id", userController.addOpLogic)
module.exports = router