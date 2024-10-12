const elButtonGetStudents = document.querySelector('#btnGetStudents')
const elButtonAddStudent = document.querySelector('#btnAddStudent')
const elButtonDeliteStudent = document.querySelector('#btnDeleteStudent')
const elForm = document.querySelector('form')
elButtonGetStudents.onclick = onClickGetStudents
elButtonAddStudent.onclick = onClickAddStudent
elForm.onsubmit = onClickAddStudent

function parseForm(elForm) {
  const listFormElements = Array.from(elForm.elements)
  const entries = listFormElements.map(el => [
    el.name,
    el.type === 'checkbox' ? el.checked : el.value,
  ])
  const object = Object.fromEntries(entries)
  return object
}

function onClickDeleteStudent(e) {
  const elTr = e.target.closest('tr')
  const idToDelete = elTr.querySelector('th').textContent
  console.log(idToDelete)
  handleDeleteStudent(idToDelete)
}

function onClickGetStudents() {
  handleGetStudents()
}

function onClickAddStudent(e) {
  e.preventDefault()
  const createdStudent = parseForm(e.target)

  // const firstName = document.getElementById('First_name').value
  // const secondName = document.getElementById('Second_name').value
  // const age = +document.getElementById('Age').value
  // const isOnBudget = document.getElementById('Is_on_budget').checked
  // const faculty = document.getElementById('Faculty').value

  // const props = ['firstName', 'secondName', 'age', 'isOnBudget', 'faculty']
  // const valuesInputs = [firstName, secondName, age, isOnBudget, faculty]

  // const entries = props.map((prop, idx) => [prop, valuesInputs[idx]])
  // const object = Object.fromEntries(entries)

  handleAddStudent(createdStudent)
}

function renderTableTBodyList(students) {
  document.querySelector('tbody').innerHTML = ''
  students.forEach(renderTableTBody)
}

function renderTableTBody(student) {
  const elTbody = document.querySelector('tbody')
  const elTr = generateTr(student)
  elTbody.appendChild(elTr)
}

function generateTr(student, isEditable) {
  const elTr = document.createElement('tr')
  const elTdId = document.createElement('th')
  const elTdFirstName = document.createElement('td')
  const elTdSecondName = document.createElement('td')
  const elTdAge = document.createElement('td')
  const elTdBudget = document.createElement('td')
  const elTdFaculty = document.createElement('td')
  const elTdAction = document.createElement('td')
  const elButtonDelete = document.createElement('button')
  const elButtonEdit = document.createElement('button')
  const elSpanDelete = document.createElement('span')
  const elSpanEdit = document.createElement('span')
  elSpanDelete.textContent = 'delete'
  elSpanEdit.textContent = 'edit'
  elButtonDelete.onclick = onClickDeleteStudent
  elButtonEdit.onclick = onclickEditStudent
  elSpanDelete.classList.add('material-symbols-outlined')
  elSpanEdit.classList.add('material-symbols-outlined')

  const inputFirstName = document.createElement('input')
  const inputSecondName = document.createElement('input')
  const inputAge = document.createElement('input')
  const inputIsOnBudget = document.createElement('input')
  const inputFaculty = document.createElement('input')
  const saveButton = document.createElement('button')

  if (!isEditable) {
    inputFirstName.disabled = true
    inputSecondName.disabled = true
    inputAge.disabled = true
    inputIsOnBudget.disabled = true
    inputFaculty.disabled = true
  }

  inputFirstName.type = 'text'
  inputSecondName.type = 'text'
  inputAge.type = 'number'
  inputIsOnBudget.type = 'checkbox'
  inputFaculty.type = 'text'

  inputFirstName.name = 'firstName'
  inputSecondName.name = 'secondName'
  inputAge.name = 'age'
  inputIsOnBudget.name = 'isOnBudget'
  inputFaculty.name = 'faculty'

  inputFirstName.value = student.firstName
  inputSecondName.value = student.secondName
  inputAge.value = student.age
  inputIsOnBudget.checked = student.isOnBudget
  inputFaculty.value = student.faculty
  elTdFirstName.appendChild(inputFirstName)
  elTdSecondName.appendChild(inputSecondName)
  elTdAge.appendChild(inputAge)
  elTdBudget.appendChild(inputIsOnBudget)
  elTdFaculty.appendChild(inputFaculty)
  saveButton.textContent = 'Сохранить'
  saveButton.onclick = onClickButtonSaveTr
  elTdId.textContent = student.id
  elTr.appendChild(elTdId)
  elTr.appendChild(elTdFirstName)
  elTr.appendChild(elTdSecondName)
  elTr.appendChild(elTdAge)
  elTr.appendChild(elTdBudget)
  elTr.appendChild(elTdFaculty)
  elTr.appendChild(elTdAction)
  elTdAction.appendChild(elButtonEdit)
  elTdAction.appendChild(elButtonDelete)
  elButtonEdit.appendChild(elSpanEdit)
  elButtonDelete.appendChild(elSpanDelete)
  elTr.appendChild(saveButton)
  return elTr
}

function onclickEditStudent(e) {
  const elTr = e.target.closest('tr')

  renderStudentTrEdit(elTr, false)

  // handleEditStudent(newStudent)
}

function renderStudentTrEdit(elTr, noEdit) {
  elTr.querySelectorAll('input').forEach(elInput => (elInput.disabled = noEdit))
}

function onClickButtonSaveTr(e) {
  const elTr = e.target.closest('tr')

  renderStudentTrEdit(elTr, true)

  let q = fromElTrToObject(elTr)

  console.log(q)

  // handleEditStudent(studentId, newStudent)

  elTr.children[1].textContent = updatedFirstName
  elTr.children[2].textContent = updatedSecondName
  elTr.children[3].textContent = updatedAge
  elTr.children[4].textContent = updatedIsOnBudget ? 'Yes' : 'No'
  elTr.children[5].textContent = updatedFaculty
  saveButton.remove()
}
