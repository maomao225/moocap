import {pageTo} from 'utils'
import token from 'token'

function plugin(Vue) {
    if (Vue && Vue.http) {
        Vue.http.interceptors.push({

            request: function(request) {

                // post请求加X-CSRFToken
                // rel: https://docs.djangoproject.com/en/1.8/ref/csrf/
                if (request.method === 'post' || request.method === 'patch' || process.env.NODE_ENV !== 'production') {
                    request.headers['X-CSRFToken'] = token
                }
                return request
            },

            response: function(response) {

                const request = response.request || {}
                const data = response.data || {}

                // 请求参数skip,则跳过response处理
                // rel: 个人信息编辑页面studentme api
                if (request.params.skip) {
                    return response
                }

                // 接口404 500跳转到错误页面
                if (response.status === 404 || response.status === 500) {
                    pageTo(response.status)
                }

                // 接口显示未登录， 跳转登录页
                if (data.error && data.error_code === 20005) {
                    pageTo('login')
                }

                return response
            }

        })
    }
}

export default plugin
