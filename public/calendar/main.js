  // called by confirmed fn
  // putting the date picked
// const putdates = async (tags) => {                  //getMovies fn
//   console.log("hi")
//     try {
//       const response = await fetch(`http://localhost:3000/Calendar/Dude1.html?search=${tags}`)
//       return response
//     } catch (error) {
//       console.log(`An error occured: ${error}`)
//     }
//   }



  // called by confirmed fn
  // getting all dates picked
const getdate = async (tags) => {
  try {
    const response = await fetch(`http://localhost:3000/Friend1.html?search=${tags}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`An error occured: ${error}`)
  }
}

  // learn this part (used to show the dates picked)
// const showdates = (date) => {
//   console.log(date)
//   const num = movie.length / 3
//   let index = 0
//   let ancestor = null
//   const lists = []
//   for (let i = 0; i < num; i++) {
//     let bool = false
//     ancestor = document.createElement('div')
//     ancestor.classList.add('column', 'is-one-third')
//     for (let i = 0; i < 3; i++) {
//       const parent = document.createElement('div')
//       const child = document.createElement('div')
//       parent.classList.add('box')
//       child.classList.add('content')
//       let p = document.createElement('p')
//       let s = document.createElement('strong')
//       s.innerText = 'Name: '
//       p.appendChild(s)
//       p.appendChild(document.createTextNode(movie[index].Name))
//       child.append(p)
//       p = document.createElement('p')
//       s = document.createElement('strong')
//       s.innerText = 'Date: '
//       p.appendChild(s)
//       p.appendChild(document.createTextNode(movie[index].Date))
//       child.append(p)
//       p = document.createElement('p')
//       s = document.createElement('strong')
//       s.innerText = 'Time: '
//       p.appendChild(s)
//       p.appendChild(document.createTextNode(movie[index].Time))
//       child.append(p)
//       p = document.createElement('p')
//       s = document.createElement('strong')
//       s.innerText = 'Available Seats: '
//       p.appendChild(s)
//       p.appendChild(document.createTextNode(movie[index].Seats))
//       child.append(p)
//       parent.append(child)
//       index++
//       ancestor.appendChild(parent)
//       if (!movie[index]) {
//         i = 4
//         bool = true
//       }
//     }
//     lists.push(ancestor)
//     const temp1 = document.createElement('li')
//     const temp2 = document.createElement('a')
//     temp2.classList.add('pagination-link')
//     temp2.innerText = i + 1
//     temp1.appendChild(temp2)
//     document.getElementById('pages').appendChild(temp1)
//     if (bool) {
//       break
//     }
//   }
//   document.getElementById('list').appendChild(lists[0])
//   const temp = document.getElementById('pages').children[0]
//   temp.firstChild.classList.add('is-current')
//   document.getElementById('paginator').classList.remove('is-invisible')
//   return lists
// }


  // called by sendit() fn
  // calls the putdates and getdates fn
const confirmed = async (element, bool) => {           //searcher
    // const temp = await putdates(element);
    const temp = await getdate(element.value)
    const lists = showdates(temp)
  }


  // called on clicking the confirm date button in Friend1.html
function sendit() {
    var x = document.getElementById("datess").value;
    confirmed(x);
 }