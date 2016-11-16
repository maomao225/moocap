import 'style/style.scss'
import 'style/bglight.scss'
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css'
import vars from 'vars'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueFilter from 'vue-filter'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import Help from 'module/problems/help.vue'
import HomeAnnouncement from 'module/announcement/home-announcement.vue'
import HomeMember from 'module/member/home-member.vue'
import News from 'module/news/news.vue'
import HomeCourse from 'module/course/home-course.vue'
import Director from 'module/member/director.vue'
import template from 'layout/index.html'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueResource)
Vue.use(VueFilter)

var App = new Vue({
    el: 'app',
    template: template,
    data: {
        pageName: 'home',
        vars
    },
    components: {
        'component-header': Header,
        'component-footer': Footer,
        'component-banner': Banner,
        HomeAnnouncement,
        HomeMember,
        HomeCourse,
        Help,
        News,
        Director
    }
})

export default App
