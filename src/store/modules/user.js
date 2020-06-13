import userApi from '@/api/userApi'
import {token,loginUrl} from '@/const/const'
import {setToken,removeToken } from '@/utils/auth'

const state = {
    userId: '',
    userInfo: {}
}
const getters = {
    userId:state=>state.userId,
    userInfo:state=>state.userInfo,
}
const mutations = {
    setUserId (state, id) {
        state.userId = id
      },
    setUserInfo (state, info) {
    state.userInfo = info
    }
}

const actions = {
        // 前端退出
        fedLogout({commit}){
            commit('setUserId', '')
            removeToken()
            console.log('未登录，或登录失效，请登录')
          },
          login({commit,dispatch}){
            let redirectUrl = location.origin + location.pathname + location.search
            userApi.getAuth({redirectUrl:redirectUrl}).then(res=>{
              window.location.replace(res)
            })
          },
          // 退出登录
          handleLogOut ({state, commit}) {
            return new Promise((resolve, reject) => {
              userApi.logout().then(resp => {
                commit('setUserId', '')
                removeToken()
                resolve()
              }).catch(err => {
                reject(err)
              })
            })
          },
          // 获取token
          getAccessToken({dispatch, commit},params) {
            // 获取用户信息
            return new Promise((resolve, reject) => {
                userApi.getAccessToken(params).then(resp => {
                if (resp) {
                //  token
                resp[token] && setToken(resp[token])
                dispatch('getUserInfo')
                }
                resolve()
              }).catch(e => {
                reject(e)
              })
            })
          },
          // 获取用户相关信息,通过code获取 openId等用户信息
          getUserInfo ({dispatch, commit},params) {
            // 获取用户信息
            return new Promise((resolve, reject) => {
                userApi.getUserInfo(params).then(resp => {
                if (resp) {
                  commit('setUserId', resp.openid)
                   // 设置用户详细信息，可供前端调用
                  commit('setUserInfo', resp)
                }
                resolve()
              }).catch(e => {
                reject(e)
              })
            })
          },
}
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}