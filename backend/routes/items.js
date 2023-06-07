// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Item = require('../models/itemModel');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('item route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemfound: 'No items found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ noitemfound: 'No Item found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
 router.post('/', (req, res) => {
   Item.create(req.body)
     .then(item => res.json({ msg: 'Item added successfully' }))
     .catch(err => res.status(400).json({ error: 'Unable to add this item' }));
 });

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, req.body)
    .then(item => res.json({ mgs: 'Item deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a item' }));
});

module.exports = router;