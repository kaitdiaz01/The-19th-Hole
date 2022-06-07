const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    required: true,
    type: Int,
    trim: true,
  },
  city: {
    type: String,
    require: true,
    trim: true,
  },
  level: {
    type: String,
    require: true,
  },
  drink: {
    type: Boolean,
    require: true,
  },
  smoke: {
    type: Boolean,
    require: true,
  },
});

// set up pre-save middleware to create password


const Userprofile = mongoose.model("Userprofile", userProfileSchema);

module.exports = Userprofile;
