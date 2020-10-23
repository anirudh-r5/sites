const express = require('express')
const path = require('path')
const app = express()
const port = 3000
// const { putmovie } = require('./lib/datequery')
const { getdate } = require('./lib/datequery')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'intro/intro.html'))
})

app.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar/calendar.html'))
})

  // my attempt at PUT 
// app.get('/Dude1', (req, res) => {
//   if (!req.query.search) {
//     res.sendFile(path.join(__dirname, 'public', 'calendar/Dude1.html'))
//   } elsenp {
//     try {
//       const results = putmovie(req.query)
//       if (results === 0) {
//         res.send(null)
//       } else {
//         res.send(1)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// })

  // my attempt at GET 
// app.get('/Dude1', async (req, res) => {
//   if (!req.query.search) {
//     res.sendFile(path.join(__dirname, 'public', 'calendar/Friend1.html'))
//   } else {
//     try {
//       // res.sendFile(path.join(__dirname, 'public', 'calendar/Friend1.html'))
//       const results = await getdate(req.query)
//       if (results === []) {
//         res.send(null)
//       } else {
//         const parsedRes = []
//         results.forEach((ele) => {
//           parsedRes.push({
//             Date: ele.date
//           })
//         })
//         res.send(parsedRes)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// })

app.get('/cinema', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cinema/cinema.html'))
})

app.get('/restaurant', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'restaurant/restaurant.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
