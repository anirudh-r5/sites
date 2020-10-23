const mongoose = require('mongoose')
const Show = require('./dateschema.js')

  // my attempt at PUT
// module.exports = class datequery{
//   static async putmovie (tag) {
//     try {
//       await mongoose.connect('mongodb://localhost/sites', { useNewUrlParser: true })
//       Show.insertMany({date: String(tag.search)})
//       return 1
//     } catch (error) {
//       console.error(error)
//       return 0
//     }
//   }
// }

  // my attempt at getting GET 
module.exports = class datequery {
  static async getdate (tag) {
    try {
      await mongoose.connect('mongodb://localhost/sites', { useNewUrlParser: true })
      const results = await friend1.find()
      return results
    } catch (error) {
      console.error(error)
    }
  }
}