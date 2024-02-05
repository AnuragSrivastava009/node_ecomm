const express = require('express')
const {registerController,getuser,loginController,testController} = require('../controllers/authControllers')
const middleware = require('../middleware/authMiddleware')

const router = express.Router()

// router.get("/getUser",getUser)
router.post("/register",registerController),
router.get("/getuser",getuser)
router.post("/login",loginController)
router.post("/test",middleware.requireSignIn,middleware.isAdmin,testController)


module.exports = router