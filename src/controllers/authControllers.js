// import userModel from '../models/userModel';
const User = require('../models/user');
const userModel = require('../models/userModel');
const JWT = require('jsonwebtoken');
const authHelpers = require('../helpers/authHelpers')
require("dotenv").config();

const registerController = async (req,res) => {
    try {
        const {name,email,password,phone,address} =req.body
        //validation start
        if (!name){
            return res.send({error:'Name is required'})
        }
        if (!email){
            return res.send({error:'email is required'})
        }
        if (!password){
            return res.send({error:'password is required'})
        }
        if (!phone){
            return res.send({error:'phone is required'})
        }
        if (!address){
            return res.send({error:'address is required'})
        }
        //validationend
        //check existing user
        user_exist = await userModel.findOne({email})
        if (user_exist){
            return res.send({success:'You are already regiter please. Proceed to login'})
        }
        const hashPassword =  await authHelpers.hashPassword(password);
        // user register
        const user = new userModel({name,email,password:hashPassword,phone,address})
        await userModel.create(user)
        if (user){
            return res.status(201).send({
                success:true,
                message:'User register Successfully',
                data: user
            })
        }
    } catch (error) {
        console.log("Something went wrong."+error)
        res.status(500).send({
            success:false,
            message:'Error in register',
            error:error
        })
        
    }
};


const getuser = async (req,res)=>{
    try{
        const allUser = await userModel.find();
        if(!allUser){
            return res.status(404).json({
                status:false,
                message:'Empty Data'
            })
        }
        return res.status(200).json({
            status:true,
            data:allUser
        })
    }
    catch(error){
        return res.status(500).json({
            message:'SOMETHING WENT WRONG'
        })
    }
}

const loginController = async(req,res)=>{
    try {
       const {email,password}= req.body
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'email or password is wrong', 
            })
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(404).send({
                success:false,
                message:"you are not register please register first."
            })
        }

        const match = await authHelpers.comparePassword(password,user.password)

        if(!match){
            return res.status(200).send({
                success:False,
                message:"password are wrong."
            }) 
        }

        token = await JWT.sign({ _id: user._id},process.env.JWT_KEY,{expiresIn:"7d"})

        return res.status(200).send({
            success:true,
            message:"Login success.",
            user:{
                user_name:user.name,
                phone_no :user.phone,
                email : user.email,
                address : user.address
            },
            token:token
        }) 
    } catch (error) {
        console.log("Something went wrong."+error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error:error
        })
    }
}

const testController = async(req,res) =>{
    return res.status(200).json({
        status:true ,
        message:'Proctected routes'
    })

}

module.exports = {registerController, getuser, loginController,testController}