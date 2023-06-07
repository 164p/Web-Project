const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photo: {
    type: String,
  } 
})

// static signup method
userSchema.statics.signup = async function(username ,password, email,photo) {

  // validation
  if (!username || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const email_exists = await this.findOne({ email })

  if (email_exists) {
    throw Error('Email already in use')
  }

  const username_exists = await this.findOne({ username })

  if (username_exists) {
    throw Error('Username already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)


  const user = await this.create({
    username,
    password: hash,
    email,
    photo,
  });

  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    photo: user.photo,
  };
}

// static login method
userSchema.statics.login = async function(username , password) {

  if (!username || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ username })
  if (!username) {
    throw Error('Incorrect username')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)