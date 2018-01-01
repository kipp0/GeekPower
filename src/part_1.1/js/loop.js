const FORM = document.querySelector('form')
const DAY1 = document.querySelector('#day1')
const DAY2 = document.querySelector('#day2')
const SUBMIT = document.querySelector('[name="submit"]')
const RESULT = document.querySelector('#result')

  $('#day1').datepicker({
    dateFormat: 'yy-mm-dd'
  });
  $('#day2').datepicker({
    dateFormat: 'yy-mm-dd'
  });

FORM.onsubmit = e => {
  e.preventDefault()

  let start_date = DAY1.value
  let end_date = DAY2.value
  let submit_value = SUBMIT.value

  console.log();
  let DATA = {
    submit: submit_value,
    start_date: start_date,
    end_date: end_date
  }

  if ( is_valid_date(start_date) && is_valid_date(end_date)) {

    $.post('calculate.php', DATA, res => {

      console.log('res',res);
      RESULT.classList.add('result-grow')
      RESULT.innerHTML = `<h1>Weekdays Between Selected Dates</h1><h1>${res}</h1>`
    })
  } else {
    RESULT.classList.add('result-grow')
    RESULT.innerHTML = `BAD DATE INPUT`
  }


}



function is_valid_date(date) {

  var date_regex =  /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  return !(date_regex.test(date)) ? false : true
}
