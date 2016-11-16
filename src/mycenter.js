import 'bootstrap/dist/css/bootstrap.css'
import 'style/style.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueHttp from 'vue-http'
import VueFilter from 'vue-filter'
import VueValidator from 'vue-validator'
import VueValidatorPlus from 'vue-validator-plus'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import Sidebar from 'module/sidebar/sidebar.vue'
import MyCourse from 'module/course/course-list.vue'
import MyExam from 'module/exam/exam-list.vue'
import ArchivePreview from 'module/archive/preview.vue'
import ArchiveEdit from 'module/archive/edit.vue'
import template from 'layout/mycenter.html'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueHttp)
Vue.use(VueFilter)
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
            pageName: 'mycenter'
        }
    },
    components: {
        'component-header': Header,
        'component-footer': Footer,
        'component-banner': Banner,
        Sidebar
    }
})

router.map({
    '/mycourse/:status': {
        name: 'mycourse',
        component: MyCourse
    },
    '/myexam': {
        name: 'myexam',
        component: MyExam
    },
    '/archive/preview': {
        name: 'archivePreview',
        component: ArchivePreview
    },
    '/archive/edit': {
        name: 'archiveEdit',
        component: ArchiveEdit
    }
})

router.redirect({
    '/mycourse': '/mycourse/pending',
    '*': '/archive/preview'
})

router.start(App, 'app')
