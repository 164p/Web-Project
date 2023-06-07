const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {username , password, email, photo} = req.body

  try {
    const user = await User.login(username, password,email,photo)
    // create a token
    const token = createToken(user._id)
    const userData = {
      username: user.username,
      email: user.email,
      photo: user.photo
    };

    res.json({ user: userData, token });
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {username , password, email, photo} = req.body

  try {
    const user = await User.signup(username , password, email, photo)

    // create a token
    const token = createToken(user._id)

    const userData = {
      username: user.username,
      email: user.email,
      photo: user.photo
    };

    res.json({ user: userData, token });
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }