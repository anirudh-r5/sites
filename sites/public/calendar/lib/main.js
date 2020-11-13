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

document.addEventListener('DOMContentLoaded', async () => {
  let unsaved1 = false
  let unsaved2 = false
  let unsaved3 = false
  const today = new Date()
  const options1 = {
    type: 'date',
    minDate: today,
    maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 31),
    monthFirst: false,
    inline: true,
    selectAdjacentDays: true,
    disabledDaysOfWeek: [1, 2, 3, 4],
    initialDate: today,
    eventDates: [{}],
    eventClass: 'inverted red',
    onSelect: (select) => {
      const date = { date: new Date(select.getFullYear(), select.getMonth(), select.getDate()) }
      let flag = false
      options1.eventDates.every((ele, index, arr) => {
        if (JSON.stringify(ele) === JSON.stringify(date)) {
          arr.splice(index, 1)
          $('#calendar1').calendar('setting', 'eventDates', arr)
          $('#calendar1').calendar('refresh')
          document.getElementById('save1').classList.remove('is-hidden')
          unsaved1 = true
          flag = false
          return false
        }
        flag = true
        return true
      })
      if (flag) {
        options1.eventDates.push(date)
        $('#calendar1').calendar('setting', 'eventDates', options1.eventDates)
        $('#calendar1').calendar('refresh')
        document.getElementById('save1').classList.remove('is-hidden')
        unsaved1 = true
        return false
      }
    }
  }
  const options2 = {
    type: 'date',
    minDate: today,
    maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 31),
    monthFirst: false,
    inline: true,
    selectAdjacentDays: true,
    disabledDaysOfWeek: [1, 2, 3, 4],
    initialDate: today,
    eventDates: [{}],
    eventClass: 'inverted green',
    onSelect: (select) => {
      const date = { date: new Date(select.getFullYear(), select.getMonth(), select.getDate()) }
      let flag = false
      options2.eventDates.every((ele, index, arr) => {
        if (JSON.stringify(ele) === JSON.stringify(date)) {
          arr.splice(index, 1)
          $('#calendar2').calendar('setting', 'eventDates', arr)
          $('#calendar2').calendar('refresh')
          document.getElementById('save2').classList.remove('is-hidden')
          unsaved2 = true
          flag = false
          return false
        }
        flag = true
        return true
      })
      if (flag) {
        options2.eventDates.push(date)
        $('#calendar2').calendar('setting', 'eventDates', options2.eventDates)
        $('#calendar2').calendar('refresh')
        document.getElementById('save2').classList.remove('is-hidden')
        unsaved2 = true
        return false
      }
    }
  }
  const options3 = {
    type: 'date',
    minDate: today,
    maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 31),
    monthFirst: false,
    inline: true,
    selectAdjacentDays: true,
    disabledDaysOfWeek: [1, 2, 3, 4],
    initialDate: today,
    eventDates: [{}],
    eventClass: 'inverted blue',
    onSelect: (select) => {
      const date = { date: new Date(select.getFullYear(), select.getMonth(), select.getDate()) }
      let flag = false
      options3.eventDates.every((ele, index, arr) => {
        if (JSON.stringify(ele) === JSON.stringify(date)) {
          arr.splice(index, 1)
          $('#calendar3').calendar('setting', 'eventDates', arr)
          $('#calendar3').calendar('refresh')
          document.getElementById('save3').classList.remove('is-hidden')
          unsaved3 = true
          flag = false
          return false
        }
        flag = true
        return true
      })
      if (flag) {
        options3.eventDates.push(date)
        $('#calendar3').calendar('setting', 'eventDates', options3.eventDates)
        $('#calendar3').calendar('refresh')
        document.getElementById('save3').classList.remove('is-hidden')
        unsaved3 = true
        return false
      }
    }
  }
  const getDates = async () => {
    const response = await fetch('http://localhost:3000/calendar?status=load')
    const obj = await response.json()
    const data = JSON.parse(obj)
    data.calendar1.forEach(ele => {
      const temp = { date: new Date(ele.date) }
      options1.eventDates.push(temp)
    })
    data.calendar2.forEach(ele => {
      const temp = { date: new Date(ele.date) }
      options2.eventDates.push(temp)
    })
    data.calendar3.forEach(ele => {
      const temp = { date: new Date(ele.date) }
      options3.eventDates.push(temp)
    })
  }
  const setDates = async (dates, num) => {
    dates.shift()
    try {
      const response = await fetch(`http://localhost:3000/calendar?status=${num}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dates)
      })
      dates.unshift({})
      const state = await response.text()
      console.log(state)
      return state
    } catch (error) {
      console.error(error)
    }
  }
  await getDates()
  $('#calendar1').calendar(options1)
  $('#calendar2').calendar(options2)
  $('#calendar3').calendar(options3)
  document.getElementById('people').addEventListener('click', (e) => {
    e.stopPropagation()
    if (!e.target.parentElement.classList.contains('is-active')) {
      document.querySelector('li.is-active').classList.remove('is-active')
      e.target.parentElement.classList.add('is-active')
      switch (e.target.textContent) {
        case 'Guy 1':
          if (unsaved1) {
            document.getElementById('save1').classList.remove('is-hidden')
          }
          document.getElementById('calendar1').classList.remove('is-hidden')
          document.getElementById('calendar2').classList.add('is-hidden')
          document.getElementById('save2').classList.add('is-hidden')
          document.getElementById('calendar3').classList.add('is-hidden')
          document.getElementById('save3').classList.add('is-hidden')
          break
        case 'Guy 2':
          if (unsaved2) {
            document.getElementById('save2').classList.remove('is-hidden')
          }
          document.getElementById('calendar2').classList.remove('is-hidden')
          document.getElementById('calendar1').classList.add('is-hidden')
          document.getElementById('save1').classList.add('is-hidden')
          document.getElementById('calendar3').classList.add('is-hidden')
          document.getElementById('save3').classList.add('is-hidden')
          break
        case 'Guy 3':
          if (unsaved3) {
            document.getElementById('save3').classList.remove('is-hidden')
          }
          document.getElementById('calendar3').classList.remove('is-hidden')
          document.getElementById('calendar2').classList.add('is-hidden')
          document.getElementById('save2').classList.add('is-hidden')
          document.getElementById('calendar1').classList.add('is-hidden')
          document.getElementById('save1').classList.add('is-hidden')

          break
      }
    }
  })
  document.getElementById('confirm1').addEventListener('click', async (e) => {
    e.target.classList.add('is-loading')
    e.target.disabled = true
    document.getElementById('cancel1').classList.add('is-hidden')
    const status = await setDates(options1.eventDates, 1)
    if (status === 'SUCCESS') {
      e.target.classList.remove('is-loading', 'is-danger')
      e.target.classList.add('is-primary', 'shake-constant', 'shake-little')
      e.target.innerHTML = 'Schedule Saved!'
      unsaved1 = false
      setTimeout(() => e.target.classList.remove('shake-constant', 'shake-little'), 250)
      setTimeout(async () => {
        await animateCSS('#save1', 'fadeOut')
        const temp = document.getElementById('save1')
        if (!temp.classList.contains('is-hidden')) {
          temp.classList.add('is-hidden')
        }
        e.target.innerHTML = 'Save'
        e.target.classList.remove('is-primary', 'shake-constant', 'shake-little')
        e.target.classList.add('is-danger')
        e.target.disabled = false
        document.getElementById('cancel1').classList.remove('is-hidden')
      }, 1000)
    }
  })
  document.getElementById('confirm2').addEventListener('click', async (e) => {
    e.target.classList.add('is-loading')
    e.target.disabled = true
    document.getElementById('cancel2').classList.add('is-hidden')
    const status = await setDates(options2.eventDates, 2)
    if (status === 'SUCCESS') {
      e.target.classList.remove('is-loading', 'is-success')
      e.target.classList.add('is-primary', 'shake-constant', 'shake-little')
      e.target.innerHTML = 'Schedule Saved!'
      unsaved2 = false
      setTimeout(() => e.target.classList.remove('shake-constant', 'shake-little'), 250)
      setTimeout(async () => {
        await animateCSS('#save2', 'fadeOut')
        const temp = document.getElementById('save2')
        if (!temp.classList.contains('is-hidden')) {
          temp.classList.add('is-hidden')
        }
        e.target.innerHTML = 'Save'
        e.target.classList.remove('is-primary', 'shake-constant', 'shake-little')
        e.target.classList.add('is-success')
        e.target.disabled = false
        document.getElementById('cancel2').classList.remove('is-hidden')
      }, 750)
    }
  })
  document.getElementById('confirm3').addEventListener('click', async (e) => {
    e.target.classList.add('is-loading')
    e.target.disabled = true
    document.getElementById('cancel3').classList.add('is-hidden')
    const status = await setDates(options2.eventDates, 3)
    if (status === 'SUCCESS') {
      e.target.classList.remove('is-loading', 'is-info')
      e.target.classList.add('is-primary', 'shake-constant', 'shake-little')
      e.target.innerHTML = 'Schedule Saved!'
      unsaved3 = false
      setTimeout(() => e.target.classList.remove('shake-constant', 'shake-little'), 250)
      setTimeout(async () => {
        await animateCSS('#save3', 'fadeOut')
        const temp = document.getElementById('save3')
        if (!temp.classList.contains('is-hidden')) {
          temp.classList.add('is-hidden')
        }
        e.target.innerHTML = 'Save'
        e.target.classList.remove('is-primary', 'shake-constant', 'shake-little')
        e.target.classList.add('is-info')
        e.target.disabled = false
        document.getElementById('cancel3').classList.remove('is-hidden')
      }, 750)
    }
  })
}, false)
