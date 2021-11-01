// const express = require('express')
// const router = express.Router();
// const User = require('../models/user')


// //REGISTER
// router.post("/admin/newUser", async (req,res)=>{
//     try{
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password : req.body.password

//         })
//         const user = await newUser.save();
//         res.status(200).json("You Id is created").render("/")
//     }catch(err){
//         res.status(500).json(err)
//     }
// } )


// //lOGIN
// router.post("/admin/login", async(req,res)=>{
//     try {
//         const user =await User.findOne({
//             username: req.body.username
//         })
//         !user && res.status(400).json("Wrong Credentials")
        
        
//         const validates = await bcrypt.compare(req.body.password, user.password)
//         !validates && res.status(400).json("Wrong Credentials")

//         const{password, ...others} = user._doc
//         res.status(200).json(others);
        
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// module.exports = router