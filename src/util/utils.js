import vars from 'vars'

/**
 * 设置容器高度
 * @description 解决footer位置靠上问题，container渲染后重设其min-height
 *              立即执行
 */
export function containerHeight() {

    let index = setInterval(() => {
        let container = document.querySelector('body > .container')
        if (container) {
            clearInterval(index)
            container.style.minHeight = document.documentElement.clientHeight - 300 + 'px'
        }
    }, 100)
}
containerHeight()

/**
 * 秒数转换
 * @param  {Number} second 秒
 * @return {Object}        countday    天
 *                         countHour   时
 *                         countMinute 分
 *                         countSecond 秒
 */
export function splitSecond(second) {
    var countday = second % (3600 * 24)
    var counthour = countday % (3600)
    return {
        countDay: Math.floor(second / (3600 * 24)),
        countHour: Math.floor(countday / (3600)),
        countMinute: counthour % 60 ? Math.floor(counthour / 60) : Math.floor(counthour / 60) - 1,
        countSecond: counthour % 60 ? counthour % 60 : 60
    }
}

/**
 * 格式化url
 * @param  {[String]} url
 * @return {[Object]}
 */
export function parseUrl(url = window.location.href) {
    var a = document.createElement('a')
    a.href = url
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function() {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue
                }
                s = seg[i].split('=')
                ret[s[0]] = s[1]
            }
            return ret
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [null, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [null, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    }
}


/**
 * 页面跳转
 * @param  {String} page   页面名
 * @param  {String} params 页面路由参数
 */
export function pageTo(page = 'index', params = '', reload = false) {
    if (page === 404 || page === 500) {
        window.location.href = vars['error'] + '?' + 'c=' + page
    }
    if (page in vars) {
        window.location.href = vars[page] + (reload ? '?t=' + (+new Date()) : '') + '#!' + params
    }
}
