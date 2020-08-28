import axios from 'axios'

function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  })

  axios.interceptors.request.use(
    config => {
      console.log('proxy-request')
      return config
    },
    err => err
  )

  axios.interceptors.response.use(
    res => {
      console.log('proxy-response')
      return res
    },
    err => err
  )

  return instance(config)
}

export default request
