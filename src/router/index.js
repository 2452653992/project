import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'
import Increase from '../pages/Increase.vue'

const routes = [
    {
        path: '/',
        redirect: "/Login"
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/Increase',
        component: Increase
    },
    {
        path: '/Home',
        component: Home
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
