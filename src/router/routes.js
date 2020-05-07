import Home from '../pages/Home/Home.vue';
import Buy from '../pages/Buy/Buy.vue';
import Login from '../pages/Login/Login.vue';
import Search from '../pages/Search/Search.vue';
import Personal from '../pages/Personal/Personal.vue';
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar.vue';

export default [
    //注册路由
    {
        path:'/home',
        component: Home
    },
    {
        path:'/buy',
        component: Buy
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/search',
        component: Search
    },
    {
        path:'/personal',
        component: Personal
    },
    {
        path:'/shoppingCar',
        component: ShoppingCar
    },
    {
        path : '/',
        redirect : '/home'
    }

]