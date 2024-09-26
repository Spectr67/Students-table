async function handleGetStudents() {
  const students = await api.getStudents()
  model.setStudents(students)
  renderTableTBodyList(model.getStudents())
}

function handleAddStudent(student) {
  model.addStudent(student)
  renderTableTBodyList(model.getStudents())
}
