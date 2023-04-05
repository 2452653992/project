import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

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
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
