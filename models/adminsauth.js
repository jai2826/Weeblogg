const mongoose = require("mongoose")

const adminauth = new mongoose.Schema(
    {
        email:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required:true
        }
    }
)
module.exports = new mongoose.model("adminsuth",adminauth)