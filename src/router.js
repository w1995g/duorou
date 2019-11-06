import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home/Home.vue';
import My from './pages/My/My.vue';
import Login from './Login.vue';
import ShoppingMall from './pages/ShoppingMall/ShoppingMall.vue';
import Push from './pages/My/My address/Push.vue'

// 商品
import Chicken from './pages/ShoppingMall/Chicken.vue';
import DomesticPork from './pages/ShoppingMall/DomesticPork.vue';
import Duck from './pages/ShoppingMall/Duck.vue';
import ImportedBeef from './pages/ShoppingMall/ImportedBeef.vue';
import ImportedPork from './pages/ShoppingMall/ImportedPork.vue';
import Processed from './pages/ShoppingMall/Processed.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        redirect: '/Home'
    }, {
        path:'/Login',
        name:'Login',
        component: Login
    }, {
        path: '/Home',
        name: 'Home',
        component: Home,
    }, {
        path: '/ShoppingMall',
        name: 'ShoppingMall',
        component: ShoppingMall,
        children: [
            {
                path: '',
                redirect: {
                    path: '/ShoppingMall/ImportedPork',
                }
            }, {
                path: 'Chicken',
                name: 'Chicken',
                component: Chicken,
            }, {
                path: 'DomesticPork',
                name: 'DomesticPork',
                component: DomesticPork,
            }, {
                path: 'Duck',
                name: 'Duck',
                component: Duck,
            }, {
                path: 'ImportedBeef',
                name: 'ImportedBeef',
                component: ImportedBeef,
            }, {
                path: 'ImportedPork',
                name: 'ImportedPork',
                component: ImportedPork,
            }, {
                path: 'Processed',
                name: 'Processed',
                component: Processed,
            }]
    }, {
        path: '/my',
        name: 'my',
        component: My,
    },{
        path:'/push',
        name:'push',
        component:Push
    }]
});
export default router;