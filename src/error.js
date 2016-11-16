import 'style/style.scss'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import template from 'layout/error.html'
import {parseUrl, pageTo} from 'utils'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueResource)

const App = new Vue({
    el: 'app',
    template: template,
    data: {
        pageName: 'error',
        type: parseUrl().params.c || '404',
        linktext: '<a href="/">MOOCAP首页</a>',
        count: 3
    },
    components: {
        'component-header': Header,
        'component-footer': Footer
    },
    ready() {

        // 500页3秒跳转
        if (this.type === '500') {
            setInterval(() => {
                if (--this.count === 0) {
                    pageTo('index')
                }
            }, 1000)
        }

    }
})

export default App
