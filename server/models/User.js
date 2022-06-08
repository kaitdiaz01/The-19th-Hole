const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    required: true,
    type: Number,
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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('Userlogin', userSchema);

module.exports = User
;