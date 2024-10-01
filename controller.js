async function handleGetStudents() {
  const students = await api.getStudents()
  model.setStudents(students)
  renderTableTBodyList(model.getStudents())
}

async function handleAddStudent(student) {
  const createdStudent = await api.postStudent(student)
  model.addStudent(createdStudent)
  renderTableTBodyList(model.getStudents())
}

async function handleDeleteStudent(student) {
  const deletedStudent = await api.deleteStudentById(student)
  model.deleteStudent(deletedStudent)
  renderTableTBody(model.getStudents())
}
