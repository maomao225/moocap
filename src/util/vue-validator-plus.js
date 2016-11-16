const validator = {

	// 邮件
    email(val) {
        return /^$|^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
    },

    // 身份证号
    idcard(val) {
        return /^$|^\d{15}|\d{18}$/.test(val)
    },

    // 手机号
    phone(val) {
        return /^$|^\d{11}$/.test(val)
    },

    // 护照
    passport(val) {
        return /^$|^1[45][0-9]{7}|G[0-9]{8}|E[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/.test(val)
    },

    complex(val, type) {
        if (type in validator) {
            return validator[type](val)
        }

        return true

    }


}

function plugin(Vue) {
    if (typeof Vue.validator === 'function') {
        for (let i in validator) {
            Vue.validator(i, validator[i])
        }
    }
}

export default plugin
