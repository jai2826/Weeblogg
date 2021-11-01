const mongoose = require('mongoose')


const post = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        author: {
            type: String,
            default: "Anonymous"
        },
        category:{
            type: String,
            required:true 
        }
    },
    {timestamps: true}
)

module.exports = new  mongoose.model("Post", post)