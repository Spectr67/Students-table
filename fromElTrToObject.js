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

function fromElTrToObject(elTr) {
  return Array.from(elTr.children).map(elTd => elTd.children[0])
}
