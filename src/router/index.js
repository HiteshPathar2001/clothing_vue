import Vue from 'vue'
import createVue from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Product from '../components/Products.vue'
Vue.use(createVue);

const routes = [
    {
        path: '/',
        name:'home',
        component: Home,
        children: [
            {
                path: 'product',
                component: Product,
            },
        ],
    },
    {
        path: '/products',
        name:'products',
        component: Products
    },
    {
        path: '/about',
        name:'about',
        component: About
    },
    {
        path: '/contact/:id',
        name:'contact',
        component: Contact
    },
]

const router = new createVue({
    routes,
    mode:'history'
})

export default router
