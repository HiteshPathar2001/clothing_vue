import Vue from 'vue'
import createVue from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import NotFound from '../components/NotFound.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

Vue.use(createVue);

const routes = [
    {
        path: '/',
        components: {
            default: Home,
            footer: Footer,
            navbar: Navbar,
        },
        children: [
            {
                path: '',
                name: 'home',
                component: Slider,
            }
        ]
    },
    {
        path: '/products',
        name: 'products',
        components: {
            default: Products,
            footer: Footer,
            navbar: Navbar,
        },
        meta: {requireAuth: true}
    },
    {
        path: '/about',
        name: 'about',
        components: {
            default: About,
            footer: Footer,
            navbar: Navbar,
        }
    },
    {
        path: '/contact/:id?',
        name: 'contact',
        components: {
            default: Contact,
            footer: Footer,
            navbar: Navbar,
        }
    },
    {
        path: '*',
        component: NotFound
    },
]

const router = new createVue({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        alert("Please Login");
    } else {
        next();
    }
})
export default router
