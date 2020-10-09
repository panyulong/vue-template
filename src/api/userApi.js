import axios from '@/utils/api.request'
import Config from '@/config/index'

export const getUserId = (query) => {
    return axios.request({
        url: Config.baseUrl + '/',
        method: 'post',
        params: query,
    })
}