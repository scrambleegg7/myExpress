const mongoose = require("mongoose");


// new approach , uuid v1 is deprecated.
const { ObjectId } = mongoose.Schema;
//const Post = require("./post");

const courseSchema = new mongoose.Schema({
    course: String,
    tag: String,
    created: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("Course", courseSchema);

