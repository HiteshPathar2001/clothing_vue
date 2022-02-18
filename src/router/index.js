import Vue from 'vue'
import createVue from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
// import Product from '../components/Products.vue'
import NotFound from '../components/NotFound.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
Vue.use(createVue);

const routes = [
    {
        path: '/',
        name:'home',
        components:{
            default:Home,
            footer:Footer,
            navbar:Navbar,
        },
        children : [
            {
                path:'',
                component:Slider,
            }
        ]
    },
    {
        path: '/products',
        name:'products',
        components:{
          default: Products,
            footer:Footer,
            navbar:Navbar,
        },
    },
    {
        path: '/about',
        name:'about',
        components:{
         default: About,
            footer:Footer,
            navbar:Navbar,
        }
    },
    {
        path: '/contact/:id?',
        name:'contact',
        components: {
            default: Contact,
            footer:Footer,
            navbar:Navbar,
        }
    },
    {
        path: '*',
        component: NotFound
    },
]

const router = new createVue({
    routes,
    mode:'history'

})

export default router
