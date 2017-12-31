const FORM = document.querySelector('form')
const DAY1 = document.querySelector('#day1')
const DAY2 = document.querySelector('#day2')
const SUBMIT = document.querySelector('[name="submit"]')
const RESULT = document.querySelector('#result')

FORM.onsubmit = e => {
  e.preventDefault()

  let start_date = DAY1.value
  let end_date = DAY2.value
  let submit_value = SUBMIT.value

  let DATA = {
    submit: submit_value,
    start_date: start_date,
    end_date: end_date
  }

  $.post('calculate.php', DATA, res => {

    console.log('res',res);
    RESULT.classList.add('result-grow')
    RESULT.innerHTML = `<h1>Weekdays Between Selected Dates</h1><h1>${res}</h1>`
  })

}
