const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    const node = document.querySelector(element)
    node.classList.add(`${prefix}animated`, animationName)

    function handleAnimationEnd () {
      node.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }
    node.addEventListener('animationend', handleAnimationEnd, { once: true })
  })

const searcher = (element, bool) => {
  if (element.value === '') {
    element.classList.add('is-danger')
    document.getElementById('searchBtn').classList.add('is-danger')
    var ele1 = document.getElementById('search')
    ele1.classList.add('shake-horizontal', 'shake-constant')
    setTimeout(() => ele1.classList.remove('shake-horizontal', 'shake-constant'), 250)
    document.getElementById('searchError').classList.remove('is-invisible')
  } else {
    element.classList.remove('is-danger')
    element.disabled = true
    var ele2 = document.getElementById('searchBtn')
    ele2.classList.remove('is-danger')
    ele2.classList.add('is-loading')
    ele2.disabled = true
    document.getElementById('searchError').classList.add('is-invisible')
    return getMovie(element.value)
  }
}

const getMovie = async (tags) => {
  try {
    const response = await fetch(`http://localhost:3000/cinema?search=${tags}`)
    const data = await response.json()
    console.log(data)
    return response
  } catch (error) {
    console.log(`An error occured: ${error}`)
  }
}

const showMovie = (movie) => {
  document.getElementById('movieTitle').innerHTML = movie
}

document.addEventListener('DOMContentLoaded', async () => {
  var movie = null
  await animateCSS('#main', 'fadeIn')
  document.getElementById('search').classList.remove('is-invisible')
  await animateCSS('#search', 'fadeIn')
  document.getElementById('searchBar').addEventListener('keyup', (event) => {
    event.preventDefault()
    if (event.key === 'Enter') {
      movie = searcher(event.target)
      showMovie(movie)
    }
  })
  document.getElementById('searchBtn').addEventListener('click', (event) => {
    movie = searcher(document.getElementById('searchBar'))
    showMovie(movie)
  })
}, false)
