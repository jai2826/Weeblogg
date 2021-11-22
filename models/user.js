const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type : String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        confirm: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = new mongoose.model("User" , user)