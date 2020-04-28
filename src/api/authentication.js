import axios from 'axios'
import { baseURL } from 'config'

const axiosInstance = axios.create({
  baseURL
})

export const signIn = ({ username, password }) => {
  return axiosInstance.post('/signin', {
    username,
    password
  })
}
