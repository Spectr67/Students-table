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

  deleteStudent(student) {
    this.students.pop(student)
  },
}
