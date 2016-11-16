/**
 * api 模块
 * @description production块内是线上接口
 *              else 块内是mock接口
 */

let api

if (process.env.NODE_ENV === 'production') {
    api = {
        announcements: '/api/web/announcements/',
        announcement: '/api/web/announcement/',
        news: '/api/web/news/',
        courses: '/api/web/courses/',
        enrollments: '/api/web/courses/enrollments/',
        memberschools: '/api/web/memberschools/',
        studentme: '/api/web/student/me/',
        uploadfile: '/api/web/uploadfile/',
        provices: '/api/web/location/provinces/',
        cities: '/api/web/location/cities/',
        sms: '/api/web/sms/',
        smsimg: '/api/web/sms_validate_image/',
        schools: '/api/web/schools/',
        examinfos: '/api/web/examinfos/',
        myexams: '/api/web/myexams/',
        myexam: '/api/web/myexam/',
        exams: '/api/web/can_enroll_exams/',
        upscore: '/api/web/myexam/upscore/',
        refund: '/api/web/myexam/refund/',
        order: '/api/web/order/',
        payment: '/api/web/order/payment/',
        poststudentme: '/api/web/enrollment/',
        poststudentmycenter: '/api/web/students/',
        login: '/api/cms/login/',
        status: '/api/web/current_user/',
        logout: '/api/web/logout/',
        address: (order_number) => '/api/web/order/' + order_number + '/submit/address/',
        scoreApply: '/api/web/score/certificate/apply/'
    }
} else {
    api = {
        announcements: '/mock/announcements.json',
        announcement: '/mock/announcement.json?',
        news: '/mock/news.json',
        courses: '/mock/courses.json',
        enrollments: 'mock/courses.json',
        memberschools: '/mock/memberschools.json',
        studentme: '/mock/studentme.json',
        uploadfile: '/mock/uploadfile.json',
        provices: '/mock/provices.json',
        cities: '/mock/cities.json',
        sms: '/api/web/sms/',
        smsimg: 'http://192.168.9.191:11111/api/web/sms_validate_image/',
        schools: '/mock/schools.json',
        examinfos: '/mock/examinfos.json',
        myexams: '/mock/myexams.json',
        myexam: '/mock/myexam.json?',
        exams: '/mock/can_enroll_exams.json',
        upscore: '/mock/upscore.json?',
        refund: '/mock/upscore.json?',
        order: '/mock/order.json?',
        payment: '/mock/payment.json',
        poststudentme: 'mock/poststudentme.json',
        poststudentmycenter: 'mock/poststudentme.json',
        login: '/mock/upscore.json',
        status: '/mock/current_user.json',
        logout: '/mock/upscore.json',
        address: (order_number) => '/mock/address.json?' + order_number,
        scoreApply: '/mock/score_apply.json'
    }
}

export default api
