import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home/Home.vue';
import My from './pages/My/My.vue';
<<<<<<< HEAD
import Login from './pages/Login.vue';
import ShoppingMall from './pages/ShoppingMall/ShoppingMall.vue';
import Regis from './pages/Regis.vue';

// 我的
import Push from './pages/My/My address/Push.vue';
import Personal from './pages/My/Authentication/Personal.vue';
import Enterprise from './pages/My/Authentication/Enterprise.vue';
import SetUp from './pages/My/Set up/SetUp.vue';
=======
import Login from './Login.vue';
import ShoppingMall from './pages/ShoppingMall/ShoppingMall.vue';
import Push from './pages/My/My address/Push.vue'
>>>>>>> 453fabc0b8d639b8ee1222cecc3b55449159711c

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
        path:'/Regis',
        name:'Regis',
        component:Regis
    },        {
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
<<<<<<< HEAD
        // 添加地址
        path:'/push',
        name:'push',
        component:Push
    },{
        // 个人认证
        path:'/personal',
        name:'personal',
        component:Personal
    },{
        // 企业认证
        path:'/enterprise',
        name:'enterprise',
        component:Enterprise
    },{
        // 设置
        path:'/setup',
        name:'setup',
        component:SetUp
=======
        path:'/push',
        name:'push',
        component:Push
>>>>>>> 453fabc0b8d639b8ee1222cecc3b55449159711c
    }]
});
export default router;