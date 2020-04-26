import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
})

export default signIn = async payload => {
  const response = await axios.post('/sign', payload)
  console.log('signIn', response)
}

