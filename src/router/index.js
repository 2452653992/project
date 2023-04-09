import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Note from '../components/Note.vue'
import Increase from '../components/Increase.vue'
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
        path: '/Note',
        component: Note
    },
    {
        path: '/Increase',
        component: Increase
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
