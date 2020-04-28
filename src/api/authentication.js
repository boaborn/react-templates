import axios from 'axios'
import config from './config'

const axiosInstance = axios.create({
  baseURL: config.baseURL
})

export const signIn = ({ username, password }) => {
  return axiosInstance.post('/signin', {
    username,
    password
  })
}
