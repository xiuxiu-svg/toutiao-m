// 包装请求基准路径
import axios from 'axios'
import jsonBig from 'json-bigint'
import store from '@/store/'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  // axios支持自定义处理后台相应数据
  transformResponse: [function (data) {
    try {
      // 如果转换成功则返回转换的数据结果
      return jsonBig.parse(data)
    } catch (err) {
      console.log(err)
      // 如果转换失败，则包装为统一数据格式并返回
      return {
        data
      }
    }
  }]
})
// 请求拦截器token处理
request.interceptors.request.use(function (config) {
  // console.log(config)
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
export default request
