import axios from 'axios'

const API_URL = '/api/instructors/'

// Register instructor
const registerinstructor = async (instructorData) => {
  const response = await axios.post(API_URL, instructorData)

  if (response.data) {
    localStorage.setItem('instructor', JSON.stringify(response.data))
  }

  return response.data
}

// Login instructor
const logininstructor = async (instructorData) => {
  const response = await axios.post(API_URL + 'loginInstructor', instructorData)

  if (response.data) {
    localStorage.setItem('instructor', JSON.stringify(response.data))
  }

  return response.data
}

// Logout instructor
const logoutinstructor = () => {
  localStorage.removeItem('instructor')
}

const authService = {
  registerinstructor,
  logininstructor,
  logoutinstructor,
}

export default authService