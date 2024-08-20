const API_STUDENTS = 'https://web-app.click/university/api/v1/students/'
let students = []

async function sendRequest(url) {
  const resp = await fetch(url)
  const json = await resp.json()
  return json
}

async function updateStudents() {
  let obj = await sendRequest(API_STUDENTS)
  students = obj.payload
  console.log(students)
}
