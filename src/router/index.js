import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//声明使用路由
Vue.use(VueRouter)

//生成路由器
export default new VueRouter({
    routes
})