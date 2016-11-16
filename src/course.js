import 'style/style.scss'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import Course from 'module/course/course.vue'
import Share from 'module/share/share.vue'
import template from 'layout/course.html'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueResource)

const App = new Vue({
    el: 'app',
    template: template,
    data: {
        pageName: 'course'
    },
    components: {
        'component-header': Header,
        'component-footer': Footer,
        'component-banner': Banner,
        Share,
        Course
    }
})

export default App
