<template>
<h1>个人档案</h1>
<div class="content">

<table>
	<tr>
		<td>姓名</td>
		<td :class="{empty: !data.name}">{{data.name || placeholder.text}}</td>
	</tr>
	<tr>
		<td>性别</td>
		<td :class="{empty: !data.gender}">{{data.gender || placeholder.select}}</td>
	</tr>
	<tr>
		<td>所属省份</td>
		<td :class="{empty: !data.province}">{{data.province && data.province.name || placeholder.select}}</td>
	</tr>
	<tr>
		<td>所属城市</td>
		<td :class="{empty: !data.city}">{{data.city && data.city.name || placeholder.select}}</td>
	</tr>
	<tr>
		<td>参加考试省份</td>
		<td :class="{empty: !data.exam_province}">{{data.exam_province && data.exam_province.name || placeholder.select}}</td>
	</tr>
	<tr>
		<td>参加考试城市</td>
		<td :class="{empty: !data.exam_city}">{{data.exam_city && data.exam_city.name || placeholder.select}}</td>
	</tr>
	<tr>
		<td>学校</td>
		<td :class="{empty: !data.school}">{{data.school && data.school.name || placeholder.text}}</td>
	</tr>
	<tr>
		<td>高考年份</td>
		<td :class="{empty: !data.gaokao_year}">{{data.gaokao_year || placeholder.text}}年</td>
	</tr>
	<tr>
		<td>证件类型</td>
		<td :class="{empty: !data.identity_type}">{{data.identity_type || placeholder.select}}</td>
	</tr>
	<tr>
		<td>证件号</td>
		<td :class="{empty: !data.identity}">{{data.identity || placeholder.text}}</td>
	</tr>
	<tr>
		<td>手机号</td>
		<td :class="{empty: !data.phone}">{{data.phone || placeholder.text}}</td>
	</tr>
	<tr>
		<td>家长电话</td>
		<td :class="{empty: !data.parent_phone}">{{data.parent_phone || placeholder.text}}</td>
	</tr>
	<tr>
		<td>邮箱</td>
		<td :class="{empty: !data.email}">{{data.email || placeholder.text}}</td>
	</tr>
</table>

<img :src="data.avatar" v-if="data.avatar" class="avatar">
	
<footer v-if="showEditBtn">
	<a v-link="{path:'/archive/edit'}">编辑个人信息</a>
	<p v-if="!data.name">您的个人信息空空如也， 马上去填写个人信息吧!</p>
</footer>
</div>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

.content{
	background: $white;
	padding:30px;
	border:1px solid $border-color;
	position:relative;
}

table{
	border:0;

	td{
		color:$dark;
		padding:19px 0 19px 52px;
		border:0;
		font-size:$font-normal;

		&:nth-child(1){
			text-align: right;
			width: 100px;
			padding-left: 0;
		}

		&.empty{
			color:$light;
		}
	}
}

.avatar{
	position: absolute;
	right:30px;
	top:30px;
	width: 125px;
	height:175px;
}

footer{
	text-align: center;

	a{
		@include button;
		display:inline-block;
		margin:60px auto 0;
	}

	p{
		margin-top: 20px;
	}
}
</style>

<script>
  import Api from 'api'
  import {pageTo} from 'utils'

  export default {
    replace: true,
    
  	data() {
      return {

      	// 已填写过 => 不显示编辑按钮
      	showEditBtn : false,

      	// 属性默认显示值
      	placeholder:{
      		text: '未填写',
      		select: '未选择'
      	},

      	// 个人信息数据
      	data : {}
      }
    },

    created() {
        this.$http.get(Api.studentme,{skip:true}).then((res) => {
          this.data = res.data

          this.showEditBtn = res.data.can_modify
        },(res) => {
            this.showEditBtn = true
        	if (res.data && res.data.error && res.data.error_code === 20005) {
                pageTo('login')
            }
        })
    }
  }
</script>
