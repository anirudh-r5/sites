const express = require('express')
const path = require('path')
const { getMovie } = require('./lib/movieQuery')
const date = require('date-and-time')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'intro/intro.html'))
})

app.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar/calendar.html'))
})

app.get('/cinema', async (req, res) => {
  if (!req.query.search) {
    res.sendFile(path.join(__dirname, 'public', 'cinema/cinema.html'))
  } else {
    try {
      const results = await getMovie(req.query)
      if (results === []) {
        res.send(null)
      } else {
        const parsedRes = []
        results.forEach((ele) => {
          parsedRes.push({
            Name: ele.name,
            Date: date.format(ele.date, 'dddd, MMM DD YYYY'),
            Time: date.format(ele.time, 'hh:mm A', true),
            Seats: ele.seats
          })
        })
        res.send(parsedRes)
      }
    } catch (error) {
      console.log(error)
    }
  }
})

app.get('/restaurant', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'restaurant/restaurant.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
