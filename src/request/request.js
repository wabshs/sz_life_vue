import axios from 'axios';

const request = axios.create({
    baseURL: 'http://nene0721.fun:8082',
    timeout: 15000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {

    // 只在不是 FormData 的情况下设置 Content-Type
    /*if (!(config.data instanceof FormData)) {
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
    }*/

    //真他妈坑啊小白速成课
    config.headers['Content-Type'] = 'multipart/form-data';

    // config.headers['token'] = user.token;  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default request