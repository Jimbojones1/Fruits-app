const mongoose = require('mongoose');

const FruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  readyToEat: Boolean
})

module.exports = mongoose.model('Fruit', FruitSchema)
