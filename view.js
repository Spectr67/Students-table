const elButtonGetStudents = document.querySelector('#btnGetStudents')
const elButtonAddStudent = document.querySelector('#btnAddStudent')
const elButtonDeliteStudent = document.querySelector('#btnDeleteStudent')
const elForm = document.querySelector('form')
elButtonGetStudents.onclick = onClickGetStudents
elButtonAddStudent.onclick = onClickAddStudent
elForm.onsubmit = onClickAddStudent

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
  e.preventDefault()

  const firstName = elTr.querySelector('td:nth-child(2)').textContent
  const secondName = elTr.querySelector('td:nth-child(3)').textContent
  const age = elTr.querySelector('td:nth-child(4)').textContent
  const isOnBudget = elTr.querySelector('td:nth-child(5)').textContent
  const faculty = elTr.querySelector('td:nth-child(6)').textContent

  const elTextareafirstName = document.createElement('textarea')
  elTextareafirstName.value = firstName

  const elTextareaSecondName = document.createElement('textarea')
  elTextareaSecondName.value = secondName

  const elTextareaAge = document.createElement('textarea')
  elTextareaAge.value = age

  const elTextareaOnBudget = document.createElement('textarea')
  elTextareaOnBudget.value = isOnBudget

  const elTextareafaculty = document.createElement('textarea')
  elTextareafaculty.value = faculty

  const firstNameCell = elTr.querySelector('td:nth-child(2)')
  const secondNameCell = elTr.querySelector('td:nth-child(3)')
  const ageCell = elTr.querySelector('td:nth-child(4)')
  const budgetCell = elTr.querySelector('td:nth-child(5)')
  const facultyCell = elTr.querySelector('td:nth-child(6)')

  firstNameCell.replaceWith(elTextareafirstName)
  secondNameCell.replaceWith(elTextareaSecondName)
  ageCell.replaceWith(elTextareaAge)
  budgetCell.replaceWith(elTextareaOnBudget)
  facultyCell.replaceWith(elTextareafaculty)

  const saveButton = document.createElement('button')
  saveButton.textContent = 'Сохранить'

  saveButton.onclick = () => {
    const updatedStudent = {
      updatedFirstName: elTextareafirstName.value,
      updatedSecondName: elTextareaSecondName.value,
      updatedAge: elTextareaAge.value,
      updatedOnBudget: elTextareaOnBudget.value,
      updatedFaculty: elTextareafaculty.value,
    }
    const id = document.querySelector
    handleEditStudent(id, updatedStudent)

    const newTdFirstName = document.createElement('td')
    newTdFirstName.textContent = updatedFirstName

    const newTdSecondName = document.createElement('td')
    newTdSecondName.textContent = updatedSecondName

    const newTdAge = document.createElement('td')
    newTdAge.textContent = updatedAge

    const newTdOnBudget = document.createElement('td')
    newTdOnBudget.textContent = updatedOnBudget

    const newTdFaculty = document.createElement('td')
    newTdFaculty.textContent = updatedFaculty

    firstNameCell.replaceWith(newTdFirstName)
    secondNameCell.replaceWith(newTdSecondName)
    ageCell.replaceWith(newTdAge)
    budgetCell.replaceWith(newTdOnBudget)
    facultyCell.replaceWith(newTdFaculty)

    saveButton.remove()
  }

  elTr.appendChild(saveButton)
}
