import Axios from 'axios'
import {
  Dialog
} from 'vant';
import Config from '@/config/index'
import {
  Notify
} from 'vant';
const baseURL = Config.baseUrl;

class httpRequest {
  constructor() {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }

  // 销毁请求实例
  destroy(url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }

  // 请求拦截
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      let {
        data,
        code,
        msg
      } = res.data;
      const is = this.destroy(url)
      if (!is) {
        setTimeout(() => {
          // loading.hide()
        }, 500)
      }
      if (res.data && !code) {
        return res.data;
      }
      if (code !== 20000) {
        Notify({
          type: 'warning',
          message: msg || 'Error'
        });
        return Promise.reject(msg || 'Error');
      } else {
        return data || res.data;
      }
    }, (error) => {
      Dialog.alert({
        message: '服务异常',
        theme: 'round-button',
        confirmButtonText: '重新加载',
        confirmButtonColor: '#1989fa',
      }).then(() => {
        location.reload();
      });
      return Promise.reject(error)
    })
  }

  // 创建实例
  create() {
    let conf = {
      // baseURL: baseURL,
      // timeout: 6000,
      // headers: {
      // 'Content-Type': 'application/json; charset=utf-8',
      // }
      withCredentials: true,
      crossDomain: true
    }
    return Axios.create(conf)
  }

  // 合并请求实例
  mergeReqest(instances = []) {
    //
  }

  // 请求实例
  request(options) {
    var instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}

export default httpRequest