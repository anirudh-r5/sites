const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs/promises')
const { getMovie } = require('./lib/movieQuery')
const date = require('date-and-time')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'intro/intro.html'))
})

app.get('/calendar', async (req, res) => {
  if (!req.query.status) {
    res.sendFile(path.join(__dirname, 'public', 'calendar/calendar.html'))
  } else if (req.query.status === 'load') {
    try {
      const content = await fs.readFile('./data/calendarDates.json', { encoding: 'utf8' })
      res.json(content)
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log('File doesnt exist')
        res.send(null)
      } else {
        console.error(error)
      }
    }
  }
})

app.post('/calendar', async (req, res) => {
  if (!req.query.status) {
    res.send('WHICH?')
  } else {
    try {
      const content = await fs.readFile('./data/calendarDates.json', { encoding: 'utf8' })
      const obj = JSON.parse(content)
      if (req.query.status === '1') {
        obj.calendar1 = req.body
      } else if (req.query.status === '2') {
        obj.calendar2 = req.body
      } else if (req.query.status === '3') {
        obj.calendar3 = req.body
      } else {
        console.warn('Unknown request')
        res.send(null)
      }
      await fs.writeFile('./data/calendarDates.json', JSON.stringify(obj, null, 4))
      res.send('SUCCESS')
    } catch (error) {
      console.error(error)
    }
  }
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
