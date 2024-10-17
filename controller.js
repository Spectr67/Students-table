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

async function handleDeleteStudent(idToDelete) {
  await api.deleteStudentById(idToDelete)
  model.deleteStudent(idToDelete)
  renderTableTBody(model.getStudents())
}

async function handleEditStudent(studentId, updatedStudent) {
  console.log(studentId, updatedStudent)
  await api.patchStudentById(studentId, updatedStudent)
  model.editStudent(studentId, updatedStudent)
  renderTableTBodyList(model.getStudents())
}
