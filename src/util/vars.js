/**
 * vars 模块
 * @description 全局通用变量
 *              production块内是线上入口url
 *              else 块内是dev url
 */


// 全局引用jquery
import 'jquery'

let vars

if (process.env.NODE_ENV === 'production') {
    vars = {
        index: '/',
        announcement: '/announcement',
        exam: '/exam',
        member: '/member',
        mycenter: '/mycenter',
        problems: '/problems',
        course: '/course',
        manager: '/cms/',
        error: '/error/',
        login: '/login/?next=' + encodeURIComponent(window.location.href)
    }
} else {
    vars = {
        index: '/index.html',
        announcement: '/announcement.html',
        exam: '/exam.html',
        member: '/member.html',
        mycenter: '/mycenter.html',
        problems: '/problems.html',
        course: '/course.html',
        manager: '',
        error: '/error.html',
        login: '/login/?next=' + encodeURIComponent(window.location.href)
    }
}

export default vars
