import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home/Home.vue';
import My from './pages/My/My.vue';
import ShoppingMall from './pages/ShoppingMall/ShoppingMall.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        redirect: '/Home'
    }, {
        path: '/Home',
        name: 'Home',
        component: Home,
    }, {
        path: '/ShoppingMall',
        name: 'ShoppingMall',
        component: ShoppingMall,
    }, {
        path: '/my',
        name: 'my',
        component: My,
    }]
});
export default router;