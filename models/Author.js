const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please write your name"]
    },
    lastname: {
        type: String,
        required: [true, "Please write your lastname"]
    },
    about: {
        type: String,
        required: [true, "Please write something about you"]
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author;