const API_STUDENTS = 'https://web-app.click/university/api/v1/students/'

const api = {
  async sendRequest(url, method = 'GET', payload = null) {
    const options = { method }

    if (payload) {
      options.headers = { 'content-type': 'application/json' }
      options.body = JSON.stringify(payload)
    }

    const resp = await fetch(url, options)
    const text = await resp.text()

    if (text) {
      const json = JSON.parse(text)
      return json.payload
    }
  },

  async getStudents() {
    return await this.sendRequest(API_STUDENTS)
  },

  async getStudentById(id) {
    return await this.sendRequest(API_STUDENTS + id)
  },

  async postStudent(student) {
    return await this.sendRequest(API_STUDENTS, 'POST', student)
  },

  async deleteStudentById(id) {
    await this.sendRequest(API_STUDENTS + id, 'DELETE')
  },

  async patchStudentById(id, student) {
    return await this.sendRequest(API_STUDENTS + id, 'PATCH', student)
  },
}

// async function qwerty() {
//   let i = 80
//   while (i < 800) {
//     await api.deleteStudentById(i)
//     i++
//   }
// }

// api.postStudent({
//   bad: 'bad',
//   firstName: 'Artur',
//   secondName: 'Kolodyazhniy',
//   age: 32,
//   isOnBudget: true,
//   faculty: 'xxxx',
// })
