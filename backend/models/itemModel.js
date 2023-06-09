const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  release: {
    type: Date,
    format: "%Y-%m-%d",
  },
  discontinued: {
    type: Date,
    format: "%Y-%m-%d",
  },
  manufacturer: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);