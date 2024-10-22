const model = {
  students: [
    {
      firstName: 'qqq',
      secondName: 'www',
      age: '4',
      isOnBudget: true,
      faculty: 'eee',
      id: 4,
    },
    {
      isEditable: false,
      firstName: 'aaa',
      secondName: 'sss',
      age: '6',
      isOnBudget: true,
      faculty: 'ddd',
      id: 6,
    },
  ],

  setStudents(students) {
    students.forEach(student => {
      student.isEditable = false
      // Object.assign(student, { isEditable: false })
    })
    this.students = students
  },

  getStudents() {
    return this.students //.filter(student => student.age >= 18)
  },

  addStudent(student) {
    this.students.push(student)
  },

  deleteStudent(id) {
    this.students = this.students.filter(student => student.id !== id)
  },

  editStudentById(id, updatedStudent) {
    const findedStudent = this.students.find(student => student.id === id)
    delete updatedStudent.id
    Object.assign(findedStudent, updatedStudent)
    updatedStudent.isEditable = false
  },

  saveStudentById(id) {},
}
