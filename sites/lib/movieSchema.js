const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: Date,
  seats: Number
})

module.exports = mongoose.model('Show', movieSchema)
