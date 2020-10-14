const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'intro/intro.html'))
})

app.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar/calendar.html'))
})

app.get('/cinema', (req, res) => {
  if (!req.query.search) {
    res.sendFile(path.join(__dirname, 'public', 'cinema/cinema.html'))
  } else {
    console.log(req.query)
    res.sendFile(path.join(__dirname, 'data.json'))
  }
})

app.get('/restaurant', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'restaurant/restaurant.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
