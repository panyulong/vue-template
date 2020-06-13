// import router from './router'
// import store from './store'
// import NProgrss from 'nprogress'
// import {getToken,setToken} from '@/utils/auth'
// import {token} from '@/const/const'
// NProgrss.configure({showSpinner:false})

// const whiteList = ['/home']

// const getCode = (code)=> { 
//     return new Promise((resolve, reject) => {
//         if (!code) {
//             store.dispatch('User/login')
//         } else {
//             let params = {
//                code:code
//             }
//             store.dispatch('User/getAccessToken',params).then(res=>{
//                 resolve(res)
//             })
//         }
//     })
// }
    
// router.beforeEach((to, from, next) => { 
//     NProgrss.start()
//     if(to.name) document.title = to.name;
//     const code = to.query['code']
//      if(getToken()){
//         if(!store.getters['User/userId']){
//             store.dispatch('User/getUserInfo').then(()=>{
//                 next()
//             })
//             // .catch((err)=>{
//             //     getCode(code).then(()=>{
//             //        next()
//             //     })
//             // })
//         }else{
//             next()
//         }
//     }else{
//         if(whiteList.includes(to.path)){
//             next()
//         }else{
//             getCode(code).then(()=>{
//                 next()
//             })
//         }
//     }
    
// })

// router.afterEach(to=>{
//     NProgrss.done()
//     window.scrollTo(0,0)
// })