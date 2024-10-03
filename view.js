const elButtonGetStudents = document.querySelector('#btnGetStudents')
const elButtonAddStudent = document.querySelector('#btnAddStudent')
const elButtonDeliteStudent = document.querySelector('#btnDeleteStudent')
const elForm = document.querySelector('form')
elButtonGetStudents.onclick = onClickGetStudents
elButtonAddStudent.onclick = onClickAddStudent
elForm.onsubmit = onClickAddStudent
elButtonDeliteStudent.onclick = onClickDeleteStudent

function onClickDeleteStudent() {
  let idToDelete = document.querySelector('#idToDelete').value
  handleDeleteStudent(idToDelete)
}

function onClickGetStudents() {
  handleGetStudents()
}

function onClickAddStudent(e) {
  e.preventDefault()
  const firstName = document.getElementById('First_name').value
  const secondName = document.getElementById('Second_name').value
  const age = +document.getElementById('Age').value
  const isOnBudget = document.getElementById('Is_on_budget').checked
  const faculty = document.getElementById('Faculty').value

  const props = ['firstName', 'secondName', 'age', 'isOnBudget', 'faculty']
  const valuesInputs = [firstName, secondName, age, isOnBudget, faculty]

  const entries = props.map((prop, idx) => [prop, valuesInputs[idx]])
  const object = Object.fromEntries(entries)

  handleAddStudent(object)
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

function generateTr(student) {
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

  elSpanDelete.classList.add('material-symbols-outlined')
  elSpanEdit.classList.add('material-symbols-outlined')

  // elButtonDelete.textContent = '❌'
  // elButtonEdit.textContent = '📝'
  elTdId.textContent = student.id
  elTdFirstName.textContent = student.firstName
  elTdSecondName.textContent = student.secondName
  elTdAge.textContent = student.age
  elTdBudget.textContent = student.isOnBudget
  elTdFaculty.textContent = student.faculty

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

  return elTr
}
