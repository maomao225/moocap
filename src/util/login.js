import api from 'api'
import {pageTo} from 'utils'

export function login() {
    // let params = parseUrl().params

    // this.$http.post(api.login, {
    //     username: params.username || 'duoduo',
    //     password: params.password || '123'
    // }).then((res) => {
    //     window.location.reload()
    // })
}

export function status() {
    this.$http.get(api.status, {
        skip: true
    }).then((res) => {
        if (res.data.id) {
            this.logined = true
            this.avatar = res.data.avatar || this.avatar
        } else {
            this.logined = false
        }
    })
}

export function logout() {
    this.$http.get(api.logout).then((res) => {
        pageTo('index', '', true)
    })
}

export default status
