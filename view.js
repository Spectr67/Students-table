const showButton = document.querySelector("button")
showButton.onclick = onClickShowTable

function onClickShowTable() {
  handleLoadStudents()
} 

function renderTable(students) {
// document.querySelector(".students").value = ' '
students.forEach(renderCellsRows)
}

function renderCellsRows(student) {
  const table = document.querySelector("table")
  const elTr = generateTable(student)
  table.appendChild(elTr)
}

function generateTable(student) {
const elTr = document.createElement("tr")
const elThiD = document.createElement("th")
const elThFirstName = document.createElement("th")
const elThSecondName= document.createElement("th")
const elThAge = document.createElement("th")
const elThBudget = document.createElement("th")
const elThFaculty = document.createElement("th")

elThiD.textContent = student.id
elThFirstName.textContent = student.firstName
elThSecondName.textContent = student.elThSecondName
elThAge.textContent = student.age
elThBudget.textContent = student.isOnBudget 
elThFaculty.textContent = student.faculty 

elTr.appendChild(elThiD)
elTr.appendChild(elThFirstName)
elTr.appendChild(elThSecondName)
elTr.appendChild(elThAge)
elTr.appendChild(elThBudget)
elTr.appendChild(elThFaculty)

elTr.classList.add('students')
return elTr
}




// Object.keys(col).forEach(key => console.log('hello ' + key))