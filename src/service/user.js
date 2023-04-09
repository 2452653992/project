import axios from '../utils/axios'


export function login(params) {
    return axios.post('/login', params);// 返回值是一个promise对象？
}
