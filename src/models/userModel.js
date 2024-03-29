// import mongoose from "mongoose";
const mongoose = require('mongoose');

const userSchemanew = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }

},{timestamps:true}) 
// export default mongoose.model('users',userSchema)
const userModel = mongoose.model('Users', userSchemanew);

module.exports = userModel;