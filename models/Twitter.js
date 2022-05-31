const mongoose = require("mongoose");

const twitterSchema = mongoose.Schema({
  name: String,
  save: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  like: [{
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  }],

});

const Twitter = mongoose.model("Twitter", twitterSchema);
module.exports = Twitter;
