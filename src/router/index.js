import Vue from 'vue'
import VueRouter from 'vue-router'
import base from './base'
Vue.use(VueRouter)
const createRouter = () => new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        ...base,
        // { path: '*',  name:'找不到页面', component: noFound }
    ],
})
const Router = createRouter()

Router.resetRouter = () => {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default Router