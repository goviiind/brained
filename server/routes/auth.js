const express = require("express")
const router = express.Router()
const authController  = require("../controller/authController")

//User Login
router.post("/login" , authController().login)

//User Register
router.post("/" , authController().register)

module.exports = router