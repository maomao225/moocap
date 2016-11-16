import moment from 'moment'

function plugin(Vue) {
    if (Vue && Vue.filter) {

        // filter to limit content to 100 strs
        Vue.filter('cut', value => value.length >= 100 ? value.substring(0, 100) + '...' : value)

        // format date from iso8601 string
        Vue.filter('formatDateByIso', value => {
            return value && moment(value).format('YYYY-MM-DD HH:mm:ss')
        })

        Vue.filter('addtime', (value, type) => {
            return value && value + (!type ? ' 00:00:00' : ' 24:00:00')
        })

        // format price 22 => 22.00
        Vue.filter('priceformat', value => Number(value).toFixed(2))

    }
}

export default plugin
