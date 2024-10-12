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
  elButtonDelete.onclick = onClickDeleteStudent
  elButtonEdit.onclick = onclickEditStudent

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

function onclickEditStudent(e) {
  const elTr = e.target.closest('tr')

  const studentId = elTr.querySelector('th').textContent
  const firstName = elTr.children[1].textContent
  const secondName = elTr.children[2].textContent
  const age = elTr.children[3].textContent
  const isOnBudget = elTr.children[4].textContent === 'Yes'
  const faculty = elTr.children[5].textContent
  renderStudentTr(e, firstName, secondName, age, isOnBudget, faculty)
  handleEditStudent(newStudent)
}

function renderStudentTr(e, firstName, secondName, age, isOnBudget, faculty) {
  const elTr = e.target.closest('tr')

  const inputFirstName = document.createElement('input')
  inputFirstName.type = 'text'
  inputFirstName.value = firstName

  const inputSecondName = document.createElement('input')
  inputSecondName.type = 'text'
  inputSecondName.value = secondName

  const inputAge = document.createElement('input')
  inputAge.type = 'number'
  inputAge.value = age

  const inputIsOnBudget = document.createElement('input')
  inputIsOnBudget.type = 'checkbox'
  inputIsOnBudget.checked = isOnBudget

  const inputFaculty = document.createElement('input')
  inputFaculty.type = 'text'
  inputFaculty.value = faculty

  elTr.children[1].innerHTML = ''
  elTr.children[1].appendChild(inputFirstName)

  elTr.children[2].innerHTML = ''
  elTr.children[2].appendChild(inputSecondName)

  elTr.children[3].innerHTML = ''
  elTr.children[3].appendChild(inputAge)

  elTr.children[4].innerHTML = ''
  elTr.children[4].appendChild(inputIsOnBudget)

  elTr.children[5].innerHTML = ''
  elTr.children[5].appendChild(inputFaculty)

  const saveButton = document.createElement('button')
  saveButton.textContent = 'Сохранить'
  saveButton.onclick = function () {
    const updatedFirstName = inputFirstName.value
    const updatedSecondName = inputSecondName.value
    const updatedAge = inputAge.value
    const updatedIsOnBudget = inputIsOnBudget.checked
    const updatedFaculty = inputFaculty.value

    const newStudent = {
      firstName: updatedFirstName,
      secondName: updatedSecondName,
      age: updatedAge,
      isOnBudget: updatedIsOnBudget,
      faculty: updatedFaculty,
    }

    handleEditStudent(studentId, newStudent)

    elTr.children[1].textContent = updatedFirstName
    elTr.children[2].textContent = updatedSecondName
    elTr.children[3].textContent = updatedAge
    elTr.children[4].textContent = updatedIsOnBudget ? 'Yes' : 'No'
    elTr.children[5].textContent = updatedFaculty
    saveButton.remove()
  }

  elTr.children[6].appendChild(saveButton)
}
