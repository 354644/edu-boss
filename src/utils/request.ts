import axios from 'axios'

// const request = axios.create({
//   // 进行配置
// })

// 请求拦截器
// 创建axios实例，并设置通用属性
const request = axios.create({
  // 超时时间 - 2s
  timeout: 2000,
  // 默认前缀
  baseURL: ''
})

// request.interceptors.request.use((config) => {
//   // 根判断传入的 url 前缀，设置不同的 baseURL
//   config.baseURL = /^\/front/.test(config.url)
//     ? 'http://edufront.lagou.com'
//     : 'http://eduboss.lagou.com'
//   // 返回新的配置对象
//   return config
// })

// 响应拦截器

export default request
