// import 'bootstrap/dist/css/bootstrap.css'
import 'style/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFilter from 'vue-filter'
import VueValidator from 'vue-validator'
import VueValidatorPlus from 'vue-validator-plus'
import VueHttp from 'vue-http'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import Instructions from 'module/exam/instructions.vue'
import Choose from 'module/exam/choose.vue'
import Info from 'module/exam/info.vue'
import Pay from 'module/exam/pay.vue'
import Result from 'module/exam/result.vue'
import Transcript from 'module/transcript/transcript.vue'
import TranscriptInfo from 'module/transcript/transcript-info.vue'
import TranscriptPay from 'module/transcript/transcript-pay.vue'
import template from 'layout/exam.html'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueFilter)
Vue.use(VueHttp)
Vue.use(VueValidator)
Vue.use(VueValidatorPlus)

if (process.env.NODE_ENV !== 'production') {
    Vue.config.debug = true
    Vue.http.patch = Vue.http.get
    Vue.http.post = Vue.http.get
}


const router = new VueRouter()
const App = Vue.extend({
    template: template,
    data() {
        return {
            pageName: 'exam'
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
        component: Instructions
    },
    '/step1': {
        name: 'choose',
        component: Choose
    },
    '/step2/:id': {
        name: 'info',
        component: Info
    },
    '/step3/:id': {
        name: 'pay',
        component: Pay,
        type:'exam'
    },
    '/success': {
        component: Result,
        type: 'success'
    },
    '/fail': {
        component: Result,
        type: 'fail'
    },
    '/expire': {
        component: Result,
        type: 'expire'
    },
    '/transcript/step1/:id': {
        name: 'transcript',
        component: Transcript
    },
    '/transcript/step2/:order_number': {
        name: 'transcriptInfo',
        component: TranscriptInfo
    },
    '/transcript/step3/:id': {
        name: 'transcriptPay',
        component: TranscriptPay,
        type: 'transcript'
    },
    '/transcript/success': {
        component: Result,
        type: 'transcript.success'
    },
    '/transcript/fail': {
        component: Result,
        type: 'transcript.fail'
    },
    '/transcript/expire': {
        component: Result,
        type: 'transcript.expire'
    }
})

router.redirect({
    '*': '/'
})

router.start(App, 'app')
