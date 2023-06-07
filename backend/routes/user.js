const multer = require('multer')
const express = require('express')
const {v4:uuidv4} = require('uuid')
const path = require('path')
let User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = uuidv4();
      const fileExtension = path.extname(file.originalname);
      cb(null, uniqueSuffix + fileExtension); // Generate a unique filename for each uploaded file
    }
  });

  const upload = multer({ storage });
const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', upload.single('photo'), async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const photo = req.file ? req.file.filename : null;
  
      const user = await User.signup(username, password, email, photo);
      const token = createToken(user._id); // Create a token using the user's _id
  
      const userData = {
        username: user.username,
        email: user.email,
        photo: user.photo
      };
  
      res.json({ user: userData, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

module.exports = router