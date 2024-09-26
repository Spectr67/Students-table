const API_STUDENTS = 'https://web-app.click/university/api/v1/students/'

const api = {
  async sendRequest(url) {
    const resp = await fetch(url)
    const json = await resp.json()
    return json
  },

  async getStudents() {
    let students = await this.sendRequest(API_STUDENTS)
    return students.payload
  },
}
