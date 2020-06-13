const home = (resolve)=> require(['@/views/home/home'],resolve)
const hello = (resolve)=> require(['@/views/hello/hello'],resolve)
export default [
    {
        path: '/',
        redirect: '/home/hello'
    },
    {
        path:'/home',
        name:'home',
        component:home,
        children:[
            {
                path: '/home/hello',
                name:'欢迎页',
                component: hello,
            },
        ]
    }
]