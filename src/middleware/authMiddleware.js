const JWT = require('jsonwebtoken');
const userModel = require('../models/userModel');
require("dotenv").config();

const requireSignIn = async(req,res,next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_KEY
        )
        req.user = decode 
        next()
    } catch (error) {
        console.log("error in docode "+error);
    }
}

//check loginuser is admin or not
const isAdmin = async(req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message:'Unauthorized Access.'
            })
        } else {
            next() 
        }
        
    } catch (error) {
        console.log("error"+error);
    }
}


module.exports = {requireSignIn,isAdmin} 