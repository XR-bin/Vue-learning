import axios from 'axios'

const myhttp = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16281333366413511454359553","bc":"110100"}'
  }
})

export default myhttp
