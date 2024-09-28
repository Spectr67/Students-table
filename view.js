const elButtonGetStudents = document.querySelector('#btnGetStudents')
const elButtonAddStudent = document.querySelector('#btnAddStudent')
elButtonGetStudents.onclick = onClickGetStudents
elButtonAddStudent.onclick = onClickAddStudent

function onClickGetStudents() {
  handleGetStudents()
}

function onClickAddStudent() {
  const listInputs = document.querySelectorAll('tfoot input')
  const valuesInputs = Array.from(listInputs).map(input => {
    if (input.value) return input.value
    if (isFinite(x)) return +input.value
    if (input.type === 'checkbox') return input.checked
  })
  const props = ['firstName', 'secondName', 'age', 'isOnBudget', 'faculty']

  const entries = props.map((_, idx) => [props[idx], valuesInputs[idx]])
  const object = Object.fromEntries(entries)

  console.log(entries)
  console.log(object)

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
