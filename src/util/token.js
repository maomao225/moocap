import Cookies from 'js-cookie'

// cookie中读取csrftoken
// rel: https://docs.djangoproject.com/en/1.8/ref/csrf/
const token = Cookies.get('csrftoken') || ''

export default token
