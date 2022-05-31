const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    writer: String
    
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment