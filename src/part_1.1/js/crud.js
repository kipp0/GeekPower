
const form = document.querySelector('form')
const tbody = document.querySelector('.tbody')
const getURL = 'select.php'
const insertURL = 'insert.php'
const deleteURL = 'delete.php'
const updateURL = 'update.php'


window.onload = () => {

  $.get(getURL, response => tbody.innerHTML = build_users_table_body(response), 'json')
   .done(() => {

     add_delete_script('a[name="delete"]')
     add_edit_script('i[name="edit"]')
     add_submit_script('i[name="submit"]')
   })



}

form.onsubmit = e => {

  e.preventDefault()

  const data = {
    firstname: e.target[0].value,
    lastname: e.target[1].value,
    submit: e.target[2].value
  }

  $.post(insertURL, data, response => tbody.innerHTML = build_users_table_body(response), 'json')
  .done(() => {


    add_delete_script('a[name="delete"]')
    add_edit_script('i[name="edit"]')
    add_submit_script('i[name="submit"]')
  })
}















// FUNCTIONS

const build_users_table_body = response => {
  let result = ''
  response.forEach( item => {

    result += `<tr><td><input class="usersBox-disabled" type="text" value="${item.firstname}" disabled="true" /></td>` +
    `<td><input class="usersBox-disabled" type="text" value="${item.lastname}" disabled="true" /></td>` +
    `<td><a id="${item.id}" class="table-icon"><i name="edit" class="fa fa-pencil" aria-hidden="true"></i><i name="submit" class="hide fa fa-thumbs-up" aria-hidden="true"></i></a></td>` +
    `<td><a id ="${item.id}" name="delete" class="table-icon"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>`;
  })

  return result
}

const add_scripts = () => {

  add_delete_script('a[name="delete"]')
  add_edit_script('i[name="edit"]')
  add_submit_script('i[name="submit"]')
}

const add_delete_script = selector => {


  let delete_btns = document.querySelectorAll(selector)

  delete_btns.forEach( btn => {



                btn.onclick = e => {

                  let data = {
                    id: e.target.parentNode.id,
                    firstname: e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value,
                    lastname: e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0].value
                  }

                  $.post(deleteURL, data, response => tbody.innerHTML = build_users_table_body(response), 'json')
                  .done(() => {


                    add_delete_script('a[name="delete"]')
                    add_edit_script('i[name="edit"]')
                    add_submit_script('i[name="submit"]')
                  })

                }

              })

}

const add_edit_script = selector => {


  let edit_btns = document.querySelectorAll(selector)

  // console.log(selector, edit_btns);
  edit_btns.forEach( btn => {

                let firstname_box = btn.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0]
                let lastname_box = btn.parentNode.parentNode.previousElementSibling.children[0]

                btn.onclick = e => {

                  firstname_box.disabled = false
                  firstname_box.classList.add('usersBox-enabled')
                  firstname_box.classList.remove('usersBox-disabled')

                  lastname_box.disabled = false
                  lastname_box.classList.add('usersBox-enabled')
                  lastname_box.classList.remove('usersBox-disabled')

                  e.target.classList.add('hide')
                  e.target.nextElementSibling.classList.remove('hide')


                }

              })

}
const add_submit_script = selector => {


  let submit_btns = document.querySelectorAll(selector)

  // console.log(selector, submit_btns);

  submit_btns.forEach( btn => {

                let firstname_box = btn.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0]
                let lastname_box = btn.parentNode.parentNode.previousElementSibling.children[0]
                let prev_first_name = firstname_box.value,
                    prev_last_name = lastname_box.value

                btn.onclick = e => {


                  let userID = btn.parentNode.id,
                      data = {
                        id:userID,
                        firstname:firstname_box.value,
                        lastname:lastname_box.value
                      }




                  if (firstname_box.value !== prev_first_name || lastname_box.value !== prev_last_name) {

                    $.post(updateURL, data, 'json')
                      .done(() => {

                        add_delete_script('a[name="delete"]')
                        add_edit_script('i[name="edit"]')
                        add_submit_script('i[name="submit"]')
                      })
                  } else {
                    console.log('unchanged');
                  }

                  firstname_box.disabled = true
                  firstname_box.classList.remove('usersBox-enabled')
                  firstname_box.classList.add('usersBox-disabled')

                  lastname_box.disabled = true
                  lastname_box.classList.remove('usersBox-enabled')
                  lastname_box.classList.add('usersBox-disabled')

                  e.target.classList.add('hide')
                  e.target.previousElementSibling.classList.remove('hide')

                  prev_first_name = firstname_box.value
                  prev_last_name = lastname_box.value
                }

              })

}
