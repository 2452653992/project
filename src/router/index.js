import { createRouter, createWebHashHistory } from 'vue-router'


import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'

// import Increase from '../pages/Increase.vue' // 该组件由对话框实现
import NewLogin from '../pages/NewLogin.vue'
const routes = [
    {
        path: '/',
        redirect: "/NewLogin"
    },
    {
        path: '/NewLogin',
        component: NewLogin
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/Home',
        component: Home
    },
    

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
