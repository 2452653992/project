import axios from "axios";
import { setLocal } from "../common/js/utils";

//每次请求带token
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
//请求头类型
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 响应拦截器
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
     showFailToast('服务端异常！')
      return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
      if (res.data.message) showFailToast(res.data.message)
      if (res.data.resultCode == 416) {
        router.push({ path: '/NewLogin' })
      }
      if (res.data.data && window.location.hash == '#/NewLogin') {
        setLocal('token', res.data.data)
        axios.defaults.headers['token'] = res.data.data
      }
      return Promise.reject(res.data)
    }
  
    return res.data
  })
function myAxios(axiosConfig) {
    const service = axios.create({
        baseURL: 'https://yapi.werun.top:8888/mock/474',
        timeout: 10000,
    });

    return service(axiosConfig)
}

export default myAxios