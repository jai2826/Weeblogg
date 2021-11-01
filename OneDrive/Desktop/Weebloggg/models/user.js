const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
            required: true,
            unique:true
        },
        username: {
            type: String,
            required: true,
            unique:true
        },
        password: {
            type: String,
            default: "Weeblog@123",
            required: true
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("User" , user)