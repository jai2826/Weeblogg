const mongoose = require('mongoose');

const category = new mongoose.Schema({
    name: {
        type: String,
        default: "Weeblog"
    }
})