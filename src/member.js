import 'style/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import Member from 'module/member/member.vue'
import ApplyMember from 'module/member/apply.vue'
import template from 'layout/member.html'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueResource)

Vue.use(VueRouter)

const router = new VueRouter()
const App = Vue.extend({
    template: template,
    data() {
        return {
            pageName: 'member'
        }
    },
    components: {
        'component-header': Header,
        'component-footer': Footer,
        'component-banner': Banner
    }
})

router.map({
    '': {
        component: Member,
        showBanner: true
    },
    'apply': {
        component: ApplyMember,
        showBanner: false
    }
})

router.redirect({
    '*': '/'
})

router.start(App, 'app')
