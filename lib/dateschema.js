const mongoose = require('mongoose')

const dateschema = new mongoose.Schema({
  date: String
})

module.exports = mongoose.model('Show', dateschema)