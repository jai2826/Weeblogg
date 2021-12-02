const mongoose = require("mongoose")

const adminauth = new mongoose.Schema({
        email:{
            type:String,
        },
        contact:{
            type:Number
        },
        password:{
            type:String,
        },
    },
    {timestamps:true}
)
module.exports = new mongoose.model("Admins",adminauth)