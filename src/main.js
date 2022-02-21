import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import VueCarousel from 'vue-carousel';
import Toasted from 'vue-toasted';
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
Vue.use(VueCarousel);
Vue.config.productionTip = false;
Vue.use(Toasted, {
    duration: 3000
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
