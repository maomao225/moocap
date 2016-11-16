# moocap 前台项目

### 基础架构

* style用sass编写
* js用es6编写(babel)
* 第三方库用npm管理, 安装第三方库需要`npm i xxx --save`
* 使用vuejs做整体架构
* 分组件写`*.vue`
* src目录开发目录，编译成static目录再上线

### 环境

1. npm i -g webpack
2. npm i 

### 命令

* npm run dev 调试
* npm run build 编译
* npm run publish 编译并发布(无md5,测试联调用)
* npm run upload 只发布
* npm run online 上线（有md5值）

### 页面

* index.html `首页`
* course.html `课程`
* announcement.html `通知`
* exam.html `考试`
* member.html `会员学校`
* problems.html `常见问题`
* mycenter.html `个人中心`
* error.html `404及500的出错页面`

### 目录

* src 源文件目录
    - util  工具相关模块
        - api   接口/mock模块
        - login 登录相关
        - token 获取csrftoken
        - utils 工具函数
        - vars  公共变量
        - vue-filter Vue过滤器扩展
        - vue-http   Vue http扩展，ajax请求特殊处理 
        - vue-validator-plus Vue验证规则扩展
    - layout    页面布局
    - module    模块/组件
    - style     全局样式及样式模块
* static 编译后目录
* mock  测试接口
* bin   辅助命令

### module 组件

* header/header
* header/footer
* share/share 关注分享组件
* problems/problems 常见问题
* problems/help 常见问题(首页)
* news/news 新闻(首页)
* member/director 理事成员(首页)
* member/member 会员学校
* member/apply  申请会员
* member/home-member 会员学校(首页)
* announcement/home-announcement 通知公告(首页)
* announcement/announcement-list 通知公告列表
* announcement/announcement-detail 通知公告单条详情
* archive/preview 个人档案预览
* archive/edit 个人档案编辑
* archive/ticket 准考证
* course/home-course 课程(首页)
* course/course 课程
* course/course-list 课程列表(个人中心)
* exam/instructions 考试说明
* exam/choose 考试-选择考试科目(step1)
* exam/info 考试-填写个人信息(step2)
* exam/pay 考试-缴纳报名费(step3)
* exam/step-bar 考试-步骤导航条
* exam/exam-list 考试列表(个人中心)
* exam/result 考试报名结果
* sidebar/sidebar 个人中心侧边栏
* dialog/dialog 弹层
* banner/banner banner


### style目录

* mixin 公用mixin
* varibles 全局变量
* bglight 背景为白的页面单独引用改文件
* style 基础css,包含normalize,reset及基本布局样式, 所有页面均需引用
* animate 动画效果样式

### 可用的第三方组件

* jquery
* vue
* vue-resource
* vue-router
* vue-strap
* vue-validator
* bootstrap
* perfect-scrollbar
* js-cookie
* es6-promise

### 备注

* jquery已经添加到全局，文件中无需手动import, 直接用$或jQuery变量即可
# moocap
# moocap
