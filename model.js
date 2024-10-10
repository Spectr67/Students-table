const model = {
  students: [],

  setStudents(students) {
    this.students = students
  },

  getStudents() {
    return this.students //.filter(student => student.age >= 18)
  },

  addStudent(student) {
    this.students.push(student)
  },

  addStudentFromEntries(entries) {
    //
  },

  deleteStudent(id) {
    this.students.filter(student => student !== id)
  },

  editStudent(id, newStudent) {
    const index = this.students.indexOf(id)
    if (index !== -1) {
      this.students[index] = newStudent
    }
  },
}
