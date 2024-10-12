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
      firstName: 'aaa',
      secondName: 'sss',
      age: '6',
      isOnBudget: true,
      faculty: 'ddd',
      id: 6,
    },
  ],

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
    this.students = this.students.filter(student => student.id !== id)
  },

  editStudent(studentId, id, newStudent) {
    return Object.entries(newStudent).filter(
      subArray => subArray[1][id] === studentId
    )[0]
  },
}

// model.editStudent(6, { qqq: 444 })
// model.deleteStudent(6)
console.log(model.students)

// console.log(
//   {
//     id: 6,
//   }.id === 6
// )

let array = [3, 5, 7, 11, 13, 17]

console.log(array.indexOf(17))

let object = { a: 3, b: 5, c: 7 }

let arrObjs = [
  { a: 3, b: 5, c: 7 },
  { a: 3, b: 5, c: 7 },
  { a: 3, b: 5, c: 7 },
  { a: 3, b: 5, c: 7 },
  { a: 3, b: 5, c: 7 },
  { a: 33, b: 55, c: 77 },
  { a: 333, b: 555, c: 777 },
]

function findObjectByPropertyValue(arrObjs, prop, val) {
  return Object.entries(arrObjs).filter(
    subArray => subArray[1][prop] === val
  )[0]
}

const f = findObjectByPropertyValue(arrObjs, 'c', 77)

f

// f.a = 333333

arrObjs

// console.log(arrObjs.indexOf(obj.a === 3))

// console.log(arrObjs.a)

// console.log(array[0])

// console.log(array)

// console.log(object['a'])

// console.log(object.a)
