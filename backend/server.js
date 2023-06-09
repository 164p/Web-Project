require('dotenv').config()
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/items')
const userRoutes = require('./routes/user');
const collectionRoutes = require('./routes/collection')
const { collection } = require('./models/userModel');

const app = express()

app.use(express.json())
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/items', itemRoutes)
app.use('/api/user', userRoutes)
app.use('/api/collection', collectionRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })