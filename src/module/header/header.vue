<template>
   <header>
	    <div class="wrapper">
          <div class="logo">
            <a href="http://www.xuetangx.com/" target="_blank" style="width:104px;" title="学堂在线">学堂在线</a>
            <a href="/" style="width:110px;" title="Moocap">Moocap</a>
          </div>
		   	<ul>
		   		<li v-for="item in list">
		   			<a :href="item.link" target="{{item.blank ? '_blank' : '_self'}}" :class="{current: item.rel === rel}">{{item.name}}</a>
		   		</li>
		   		<li @mouseenter="showMenu=true" @mouseleave="showMenu=false">
            <a href="{{logined ? 'javascript:void(0)' : vars.login}}" class="icon-account" @click="login" :style="{backgroundImage:'url(' + avatar + ')',borderRadius:'15px'}"></a>
		   			<!-- <a href="javascript:void(0)" class="icon-account" @click="login"></a> -->
		   			<div class="login-menu" v-show="showMenu && logined">
		   				<a href="{{vars.mycenter+'#!/archive/preview'}}">个人中心</a>
		   				<a href="javascript:void(0)" @click='logout'>退出</a>
		   			</div>
		   		</li>
		   	</ul>
	    </div>
	</header>
</template>

<style lang="sass" scoped>
  @import "style/varibles";
  @import "style/mixin";
  header{
		background:$white;
		height: $headerHeight;
		line-height: $headerHeight;
		.wrapper{
			@include wrapper;
		}
		.logo{
			@include fonthide;
			float: left;
      background: url('//storage.xuetangx.com/public_assets/xuetangx/images/139ad39a4c2bbe22cbafc3f74edfb426.logo.png') no-repeat left top;
      width: 218px;
      height:34px;
      margin-top: 23px;
      background-size:contain;

      a{
        display:block;
        float:left;
        height:100%;
      }
		}
		ul{
			float: right;
		    li{
		      display: inline-block;
		      font-size:$font-middle;
		      vertical-align:middle;
		      margin-left: 50px;
		      position:relative;
		      z-index:99;
		      padding-bottom: 5px;
		    }
		    a{
		      &:hover,&.current{
		      	text-decoration:underline;
		      	color:$dark;
		      }
		      color: $gray;
		    }
		    .icon-account{
		    	background-repeat:no-repeat;
          background-position:center center;
		    	width: 30px;
		    	height:30px;
		    	display: block;
          border-radius:15px;
          background-size:contain;
		    }
		}
	}

  .login-menu{
  	position:absolute;
  	border:1px solid $border-color;
  	background: $white;
  	top:33px;
  	left:-34px;

  	a{
  		@include hover;
  		font-size:$font-normal;
  		display: block;
  		width: 100px;
  		height:34px;
  		border-bottom:1px solid $border-color;
  		line-height: 34px;
  		text-align: center;

  		&:last-child{
  			border:0;
  		}
  	}
  }
</style>

<script>
  import vars from 'vars'
  import {logout, status, login} from 'login'

  export default {
    replace: true,
    props: ['rel'],
  	data() {
      return {
      	vars,

        // 是否登录
      	logined: false,

        // 头像
        avatar: 'http://storage.xuetangx.com/public_assets/xuetangx/images/e7e6c21492b1745f10f5a71eaac6ce3a.accont.png',

        // 是否显示个人中心浮层
      	showMenu: false,

        // nav列表
      	list : [
      		{
      			name: '首页',
      			rel: 'home',
      			link: vars.index
      		},
      		{
      			name: '考试信息',
      			rel: 'exam',
      			link: vars.exam,
      		},
      		// {
      		// 	name: '培训中心',
      		// 	rel: "training",
      		// 	link: 'http://www.baidu.com',
      		// 	blank: true
      		// },
      		{
      			name: '管理中心',
      			rel: "manager",
      			link: vars.manager,
      			blank: true
      		}
      	]
      }
    },
    
    methods:{
    	logout: function(){
        logout.call(this)
      },
      login: function(){
        login.call(this)
      }
    },
    created(){
      status.call(this)
    }
  }
</script>
