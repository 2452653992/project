import axios from "axios";
import { setLocal } from "../common/js/utils";


axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'



export default axios