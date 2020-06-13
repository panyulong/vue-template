import axios from '@/utils/api.request'
import Config from '@/config/index'
export default{
    getAuth(query){
        return axios.request({
            url:'/wechat/auth',
            method:'get',
            params:query
        })
    },
    getUserInfo(query){
        return axios.request({
            url:'/wechat/getUserInfo',
            method:'get',
            params:query
        })
    },
    getAccessToken(query){
        return axios.request({
            url:'/wechat/getAccessToken',
            method:'get',
            params:query
        })
    },
}