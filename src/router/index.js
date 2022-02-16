import Vue from 'vue'
import createVue from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
Vue.use(createVue);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = new createVue({
    routes,
    mode:'history'
})

export default router
