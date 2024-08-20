const showButton = document.querySelector('button')
showButton.onclick = onClickShowTable

function onClickShowTable() {
  handleLoadStudents()
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
