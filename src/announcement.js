import 'style/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFilter from 'vue-filter'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import List from 'module/announcement/announcement-list.vue'
import Detail from 'module/announcement/announcement-detail.vue'
import template from 'layout/announcement.html'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueFilter)


const router = new VueRouter()

const App = Vue.extend({
    template: template,
    data() {
        return {
            pageName: 'announcement'
        }
    },
    components: {
        'component-header': Header,
        'component-footer': Footer,
        'component-banner': Banner
    }
})

router.map({
    '/': {
        component: List
    },
    '/detail/:id': {
        name: 'detail',
        component: Detail
    }
})

router.redirect({
    '*': '/'
})

router.start(App, 'app')
