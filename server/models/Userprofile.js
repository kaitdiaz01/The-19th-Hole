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
    type: String,
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
userProfileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userProfileSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Userprofile = mongoose.model("Userprofile", userProfileSchema);

module.exports = Userprofile;
