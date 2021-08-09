import axios from 'axios'
import { Toast } from 'vant'

const myhttp = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16281333366413511454359553","bc":"110100"}'
  }
})

// 添加请求拦截器---发送请求前
myhttp.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    
    // 我们写的代码，添加加载显示
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      overlay: true
      // duration: 0
    })
    
    return config
  }, 
  
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器---接收数据后
myhttp.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    
    Toast.clear()    // 这是我们写的代码，清除加载提示
    
    return response
  }, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default myhttp
