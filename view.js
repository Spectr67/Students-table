const elButtonGetStudents = document.querySelector('#btnGetStudents')
const elButtonAddStudent = document.querySelector('#btnAddStudent')
const elButtonDeliteStudent = document.querySelector('#btnDeleteStudent')
elButtonGetStudents.onclick = onClickGetStudents
elButtonAddStudent.onclick = onClickAddStudent
elButtonDeliteStudent.onclick = onClickDeleteStudent

function onClickDeleteStudent() {
  let idToDelete = document.querySelector('#idToDelete').value
  handleDeleteStudent(idToDelete)
}

function onClickGetStudents() {
  handleGetStudents()
}

function onClickAddStudent() {
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
  const elTdNone = document.createElement('th')
  const elTdId = document.createElement('th')
  const elTdFirstName = document.createElement('th')
  const elTdSecondName = document.createElement('th')
  const elTdAge = document.createElement('th')
  const elTdBudget = document.createElement('th')
  const elTdFaculty = document.createElement('th')

  elTdId.textContent = student.id
  elTdFirstName.textContent = student.firstName
  elTdSecondName.textContent = student.secondName
  elTdAge.textContent = student.age
  elTdBudget.textContent = student.isOnBudget
  elTdFaculty.textContent = student.faculty

  elTr.appendChild(elTdNone)
  elTr.appendChild(elTdId)
  elTr.appendChild(elTdFirstName)
  elTr.appendChild(elTdSecondName)
  elTr.appendChild(elTdAge)
  elTr.appendChild(elTdBudget)
  elTr.appendChild(elTdFaculty)

  return elTr
}
