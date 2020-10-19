require('dotenv').config()
const mongoose = require('mongoose')
const Show = require('./movieSchema.js')
const capitalize = require('capitalize')

module.exports = class MovieQuery {
  static async getMovie (tag) {
    try {
      await mongoose.connect(`mongodb://${process.env.DB_HOST}/sites`, { useNewUrlParser: true })
      const results = await Show.find({ name: capitalize.words(tag.search) }).limit(20)
      return results
    } catch (error) {
      console.error(error)
    }
  }
}
