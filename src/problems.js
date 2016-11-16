import 'style/style.scss'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Header from 'module/header/header.vue'
import Footer from 'module/footer/footer.vue'
import Banner from 'module/banner/banner.vue'
import Problems from 'module/problems/problems.vue'
import template from 'layout/problems.html'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueResource)

const App = new Vue({
    el: 'app',
    template: template,
    data: {
        pageName: 'problems'
    },
    components: {
        'component-header': Header,
        'component-footer': Footer,
        'component-banner': Banner,
        Problems
    }
})

export default App
