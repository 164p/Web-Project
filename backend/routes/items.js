const express = require('express');
const router = express.Router();

const Item = require('../models/itemModel');

router.get('/test', (req, res) => res.send('item route testing!'));

router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemfound: 'No items found' }));
});

router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ noitemfound: 'No Item found' }));
});

 router.post('/', (req, res) => {
   Item.create(req.body)
     .then(item => res.json({ msg: 'Item added successfully' }))
     .catch(err => res.status(400).json({ error: 'Unable to add this item' }));
 });

router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, req.body)
    .then(item => res.json({ mgs: 'Item deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a item' }));
});

module.exports = router;