const home = (resolve) => require(['@/views/home/home'], resolve);
export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: '首页',
        component: home,
    },
]