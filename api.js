const API_STUDENTS = 'https://web-app.click/university/api/v1/students/'

const api = {
  async sendRequest(url, method = 'GET', payload = null) {
    const options = { method }

    if (payload) {
      options.headers = { 'content-type': 'application/json' }
      options.body = JSON.stringify(payload)
    }

    const resp = await fetch(url, options)
    const json = await resp.json()
    return json.payload
  },

  async getStudents() {
    return await this.sendRequest(API_STUDENTS)
  },

  async postStudent(student) {
    return await this.sendRequest(API_STUDENTS, 'POST', student)
  },

  async deleteStudentById(id) {
    return await this.sendRequest(API_STUDENTS + id, 'DELETE')
  },
}

api.deleteStudentById(720)

// api.postStudent({
//   bad: 'bad',
//   firstName: 'Artur',
//   secondName: 'Kolodyazhniy',
//   age: 32,
//   isOnBudget: true,
//   faculty: 'xxxx',
// })
