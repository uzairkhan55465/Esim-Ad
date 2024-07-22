var router = require('express').Router();
var UserController = require('../../controller/userController')

// router.post("/", UserController.addUser)
router.post("/login", UserController.loginUser)

module.exports = router; 