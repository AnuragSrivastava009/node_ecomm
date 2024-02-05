// const User = require('../models/user');

// const getUser = async (req,res)=>{
//     try{
//         const allUser = await User.find();
//         if(!allUser){
//             return res.status(404).json({
//                 status:false,
//                 message:'Empty Data'
//             })
//         }
//         return res.status(200).json({
//             status:true,
//             data:allUser
//         })
//     }
//     catch(error){
//         return res.status(500).json({
//             message:'SOMETHING WENT WRONG'
//         })
//     }
// }


// const createUser = async(req,res)=>{
//     try{
//         const userData = req.body
//         const user = await User.create(userData);
//         return res.status(201).json({
//             status:true,
//             data:user,
//             message:"User Create Successfully"
//         })

//     }catch(error){
//         return res.status(500).json({
//             status:false,
//             message:"SOMETHING WENT WRONG"
//         })
//     }
// }

// module.exports = {getUser,createUser}