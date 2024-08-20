async function handleLoadStudents() {
  await updateStudents()
  renderTable(students)
}