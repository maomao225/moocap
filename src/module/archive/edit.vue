<template>
<h1 v-if="isFromMycenter">个人档案</h1>
<div :class="{wrapper: $route.name === 'archiveEdit'}">
<validator name="validation">
<form novalidate>
	<div class="form-line">
		<span class="form-label">姓名<i>*</i></span>
		<div class="form-item">
			<input type="text" :class={notallowed:!params.can_modify} placeholder="请输入" v-validate:name=['required'] v-model="params.name" :disabled="!params.can_modify" name="name" @input="formatName">
			<span class="tip" v-if="$validation.name && $validation.name.dirty && $validation.name.invalid">姓名不能为空</span>
		</div>
	</div>		

	<div class="form-line">
		<span class="form-label">性别<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">
			<label><input type="radio" :class={notallowed:!params.can_modify}  name="gender" checked="" :disabled="!params.can_modify" value="男" v-model="params.gender"><span>男</span></label>
			<label><input type="radio" :class={notallowed:!params.can_modify} name="gender" :disabled="!params.can_modify" value="女" v-model="params.gender"><span>女</span></label>
		</div>
	</div>	

	<div class="form-line">
		<span class="form-label">所属省份<i>*</i></span>
		<div class="form-item">
			<select  placeholder="请选择所在省份" :disabled="!params.can_modify" v-model="matchProvince" name="province" v-validate:province=['required'] :class={notallowed:!params.can_modify}>
				<option value="">请选择所属省份</option>
				<option v-for="item in provices" value={{item.id}}>{{item.name}}</option>
			</select>
			<span class="tip" v-if="$validation.province && $validation.province.dirty && $validation.province.invalid && params.can_modify">省份不能为空</span>
		</div>
	</div>

	<div class="form-line">
		<span class="form-label">所属城市<i>*</i></span>
		<div class="form-item">
			<select placeholder="请选择所属城市" :disabled="!params.can_modify" name="city" v-model="matchCity" v-validate:city=['required'] :class={notallowed:!params.can_modify}>
				<option value="">请选择所属城市</option>
				<option v-for="item in cities" v-if="matchProvince == item.province" value={{item.id}}>{{item.name}}</option>
			</select>
			<span class="tip" v-if="$validation.city && $validation.city.dirty && $validation.city.invalid && params.can_modify">城市不能为空</span>
		</div>
	</div>

	<div class="form-line">
		<span class="form-label">参加考试省份<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">
			<select placeholder="请选择考试省份" v-model="matchExamProvince" name="exam_province" v-validate:examprovince="isFromMycenter ? {}:{'required':true}">
				<option value="">请选择考试省份</option>
				<option v-for="item in exam_province" value={{item.id}}>{{item.name}}</option>
			</select>
			<span class="tip" v-if="$validation.examprovince && $validation.examprovince.dirty && $validation.examprovince.invalid && params.can_modify">参考省份不能为空</span>
		</div>
	</div>

	<div class="form-line">
		<span class="form-label">参加考试城市<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">			
			<select placeholder="请选考试城市" name="exam_city" v-model="matchExamCity" v-validate:examcity="isFromMycenter ? {}:{'required':true}">
				<option value="">请选择考试城市</option>
				<option v-for="item in exam_city" v-if="matchExamProvince == item.province" value={{item.id}}>{{item.name}}</option>
			</select>
			<span class="tip" v-if="$validation.examcity && $validation.examcity.dirty && $validation.examcity.invalid && params.can_modify">参考城市不能为空</span>
			<span class="tip" v-if="!$validation.examcity || !$validation.examcity.dirty || !$validation.examcity.invalid || !params.can_modify">最终考试一般安排在省会城市进行，此项仅作调查参考</span>
		</div>
	</div>

	<div class="form-line">
		<span class="form-label">学校<i>*</i></span>
		<div class="form-item">
			<select placeholder="请选择您的学校" v-model="matchSchool" name="schools" :disabled="!params.can_modify" v-validate:school=['required'] :class={notallowed:!params.can_modify}>
				<option value="">请选择学校</option>
				<option v-for="item in schools" value={{item.id}} >{{item.name}}</option>
			</select>
			<span class="tip" v-if="$validation.school && $validation.school.dirty && $validation.school.invalid && params.can_modify">学校不能为空</span>
		</div>
	</div>

	<div class="form-line">
		<span class="form-label">高考年份<i>*</i></span>
		<div class="form-item">
			<select placeholder="请选择" v-model="params.gaokao_year" name="gaokao_year" :disabled="!params.can_modify" v-validate:gaokaoyear=['required'] :class={notallowed:!params.can_modify}>
				<option value="">请选择高考年份</option>
				<option value="2016">2016年</option>
				<option value="2017">2017年</option>
				<option value="2018">2018年</option>
				<option value="其他">其他</option>
			</select>
			<span class="tip" v-if="$validation.gaokaoyear && $validation.gaokaoyear.dirty && $validation.gaokaoyear.invalid">高考年份不能为空</span>
		</div>
	</div>

	<div class="form-line">
		<span class="form-label">证件类型<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">
			<label><input type="radio" :disabled="!params.can_modify" name="identity_type" checked value="1" v-model="identity_radio" :class={notallowed:!params.can_modify}><span>身份证</span></label>
			<label><input type="radio" :disabled="!params.can_modify" name="identity_type" value="2" v-model="identity_radio" :class={notallowed:!params.can_modify}><span>护照</span></label>
			<label style="margin-right:10px;"><input type="radio" :disabled="!params.can_modify"  value="0" name="identity_type" v-model="identity_radio" :class={notallowed:!params.can_modify}><span>其他证件</span></label>
			<label style="margin-right:0"><input v-model="othertype" type="text" :disabled="!params.can_modify" :class={notallowed:!params.can_modify}></label>
			<span class="tip">作为考试身份验证的重要凭证，请务必填写真实证件类型</span>
		</div>
	</div>	

	<div class="form-line">
		<span class="form-label">证件号<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">
			<input type="text" :disabled="!params.can_modify" placeholder="请输入" name="identity" v-model="params.identity" v-validate:identity="identity_rules[identity_radio]" :class={notallowed:!params.can_modify}>
			<span class="tip" v-if="$validation.identity && !$validation.identity.dirty || $validation.identity && $validation.identity.dirty && $validation.identity.invalid">作为考试身份验证的重要凭证，请务必填写真实的证件号</span>
		</div>
	</div>	

	<div class="form-line">
		<span class="form-label">手机号<i>*</i></span>
		<div class="form-item">
			<input type="text" :disabled="!params.can_modify" placeholder="请输入" name="phone" v-model="params.phone" v-validate:phone=['required','phone'] :class={notallowed:!params.can_modify}>
			<span class="tip" v-if="$validation.phone && $validation.phone.dirty && $validation.phone.invalid">{{params.phone==""?"手机号不能为空":"手机号格式不正确"}}</span>
		</div>
	</div>	
	
	<div class="form-line" v-show="params.can_modify">
		<span class="form-label">图片验证码<i>*</i></span>
		<div class="form-item">
			<input type="text" placeholder="请输入" name="captcha" v-model="captcha" v-validate:captcha=['required'] :class="{notallowed:!params.can_modify}">
			<img class="imgcode" :src="src" v-on:click="getImgCode($event)"></img>
			<span class="tip" v-if="$validation.captcha && $validation.captcha.dirty && $validation.captcha.invalid">图片验证码不能为空</span>
		</div>
	</div>	

	<div class="form-line" v-show="params.can_modify">
		<span class="form-label">手机验证码<i>*</i></span>
		<div class="form-item">
			<input type="text" v-model="phonevali" placeholder="请输入" name="validate"  v-validate:validate=['required'] :class="{notallowed:!params.can_modify}">
			<div :class="{btncode:true,notallowed:timedown<60 || !params.can_modify}"  v-on:click="getPhoneCode($event)" >{{txttimedown}}</div>
			<div class="button">{{timedown}}s</div>
			<span class="tip" v-if="$validation.validate && $validation.validate.dirty && $validation.validate.invalid">手机验证码不能为空</span>
		</div>
	</div>	

	<div class="form-line">
		<span class="form-label">家长电话<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">
			<input type="text" :disabled="!params.can_modify" placeholder="请输入" name="parent_phone" v-model="params.parent_phone" v-validate:parentphone="isFromMycenter ? {phone:true} : {phone:true, required: true}" :class={notallowed:!params.can_modify}>
			<span class="tip" v-if="$validation.parentphone && $validation.parentphone.dirty && $validation.parentphone.invalid">{{params.parent_phone==""?"手机号不能为空":"手机号格式不正确"}}</span>
		</div>
	</div>	

	<div class="form-line">
		<span class="form-label">邮箱<i v-show="!isFromMycenter">*</i></span>
		<div class="form-item">
			<input type="text" :disabled="!params.can_modify" placeholder="请输入" name="email" v-model="params.email" v-validate:email="isFromMycenter ? {email:true} : {email:true, required: true}" :class={notallowed:!params.can_modify} @keydown.space="preventDefault">
			<span class="tip" v-if="$validation.email && $validation.email.dirty && $validation.email.invalid">{{params.email==""?"邮箱不能为空":"邮箱格式不正确"}}</span>
		</div>
	</div>	

	<div class="form-line">
		<span class="form-label">上传证件<i v-show="!isFromMycenter">*</i></span>
		
		<div class="form-item">
			<input id="File" type="file" :disabled="!params.can_modify" v-on:change="imgUpload($event)" :class={notallowed:!params.can_modify}>
			<div class="errormsg" v-if="!uploadfileStatus">{{errormsg}}</div>
			<span class="tip" id="status" v-if="$validation.imgsrc && $validation.imgsrc.dirty && $validation.imgsrc.invalid" >证件不能为空</span>
			<div class="des">
				<dl>
					<dt>
						<img class="idimg" :src=imgsrc>
					</dt>
					<dd>
						<p>报名照片要求：</p>
						<ol>
							<li>上传照片必须为考生本人近期正面免冠彩色证件照，务必保证照片清晰、可辨认，其他如生活照、视频捕捉、摄像头所摄等照片一律不予审核；除军人外其他报名人员不得着制式服装拍照；女性不得穿背带式服装拍照；</li>
							<li>照片大小为一寸或小二寸，格式为jpg/jpeg/bmp/gif/png；</li>
							<li>头部占照片尺寸的2/3，白色背景；</li>
							<li>面部正面头发不得过眉，露双耳，常带眼镜的考生应配戴眼镜，不得佩戴首饰。</li>
						</ol>
					</dd>
				</dl>
			</div>
		</div>
	</div>	
	<input type="button" :class="{submit:true,nosubmit:params.can_modify == true ? !$validation.valid : matchExamProvince != '' && matchExamCity != '' ? false : true }" v-on:click="poststudentme()" value="提交个人信息"  :disabled="params.can_modify == true ? !$validation.valid : !isFromMycenter && matchExamProvince != '' && matchExamCity != '' ? false : true"/>
	<p class="submit-des">为了保证您的学习结果被正确记录，请务必填写真实的身份信息</p>
	<p class="submit-des" style="color:#6642BE">建议您使用最新版本的Chrome、Firefox、IE11浏览器浏览本网站</p>
</form>
</validator>
</div>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

$itemHeight:33px;
$itemWidth:350px;

// narrow style with wrapper for usercenter
.wrapper{
	background:#fff;
    border:1px solid $border-color;
    padding:20px 20px 20px 0;

    .form-item{
    	label{
    		margin-right: 9px;
    		font-size:$font-small;
    	}
    	label input[type=text]{
    		width: 85px;
    	}
    }

    .form-item input[type=text]{
    	margin-right: 10px;
    	width: $itemWidth - 50;
    }

    .form-item select{
    	width: $itemWidth - 50;
    }

    .form-label{
    	width: 100px;
    	margin-right: 25px;
    }

    .tip{
    	// margin-left: -10px;
    }
}

.form-label{
	float: left;
	text-align:right;
	margin-right: 32px;
	font-size:$font-normal;
	color:$dark;
	width: 120px;
	height: $itemHeight;
	line-height: $itemHeight;

	i{
		color:#D0021B;
		vertical-align:middle;
		font-size:16px;
	}
}

.form-status{
	position: relative;
	display:inline-block;
	left:133px;
	top:16px;
	color: #D0021B;
    font-size: 12px;
}

.form-item{
	overflow: hidden;
	font-size:$font-normal;
	color:$dark;
	margin-bottom: 30px;

	.btncode, .button {
		display:inline-block;
		width: 110px;
    	text-align: center;
    	background: #fff;
    	border: 1px solid #693CB8;
    	color: #693CB8;
    	height:$itemHeight;
    	line-height: $itemHeight;
    	margin-right: 20px;
    	cursor: pointer;
	}

	input[type=text],select{
		height:$itemHeight;
		border:1px solid $table;
		padding:0 10px;
		width: $itemWidth;
		border-radius:0;
		background: transparent;
		outline:none;
		margin-right: 20px;
	}

	input[type=file]{
		margin:8px 0;
	}

	.imgcode{
		cursor:pointer;
		vertical-align:middle;
	}
	.idimg{
		width:73px;
		height:102px;
	}
	select{
		width: $itemWidth + 20;
	}

	label{
		margin-right: 38px;
		margin-left: 2px;
		font-weight: normal;
		vertical-align:middle;
		height:$itemHeight;
		line-height: $itemHeight;

		input{
			margin-right: 8px;
		}

		input[type=text]{
			width: 130px;
		}
	}

	button{
		display: inline-block;
		width: 110px;
		text-align: center;
		background: $white;
		border:1px solid $main-color;
		color:$main-color;
		height:$itemHeight;
		margin-right: 20px;
	}

	.des{
		color:$light;
		font-size:$font-small;
		margin-top: 20px;
		line-height: 1.5;

		dt{
			float: right;
			margin-left: 30px;
		}
		dd{
			overflow: hidden;
		}
		ol{
			list-style-position:inside;
		}
		p{
			margin:0;
			padding:0;
		}
	}
}

.submit{
	@include button;
	margin:15px auto;
	display: block;
}

input[type=button]:disabled,.nosubmit {
	background-color: #ccc!important;
	cursor:not-allowed!important;
}

.notallowed{
	cursor:not-allowed!important;
}

.errormsg{
	display:inline-block;
	color: #D0021B;
    font-size: 12px;
    margin-left: 10px;
}

.submit-des{
	text-align: center;
	font-size:$font-normal;
	color:$dark;
}

.tip{
	color: $danger;
	font-size: $font-small;
	margin-left: 10px;
	height:$itemHeight;
	line-height: $itemHeight;
}

</style>


<script>
  import Api from 'api'
  import vars from 'vars'
  import {pageTo} from 'utils'
  import {Promise} from 'es6-promise'

  export default {
    replace: false,
	
  	data() {

  	  const fromMycenter = this.$route.name === 'archiveEdit'

      return {

      	// 是否是个人中心的页面
      	isFromMycenter: fromMycenter,

      	identity_rules : [
      		fromMycenter ? {complex: ''} : {'required' : true, complex: ''},
      		fromMycenter ? {complex: ''} : {'required' : true, complex: 'idcard'},
      		fromMycenter ? {complex: ''} : {'required' : true, complex: 'passport'}
      	],

      	identity_radio: 1,

      	identity_text: ['其他证件', '身份证', '护照'],

      	othertype: "",
      	timedown: 60,
      	txttimedown : "获取验证码",
      	matchCity: "",
      	matchExamCity: "",
      	matchProvince: "",
      	matchExamProvince: "",
      	matchSchool: "",
      	uploadfileStatus: false,
      	success: "200",
      	notfound: "404",
      	phonevali:"",
      	errormsg: "",
      	src: "",
      	captcha: "",
      	imgsrc: "",
      	provices: [],
      	cities: [],
      	schools: [],
      	exam_province: [],
      	exam_city: [],
      	params: {
      		name: '',
			avatar: '',
			gender: 0,
			province: '',
			city: '',
			exam_province: '',
			exam_city: '',
			school: '',
			gaokao_year: '',
			identity: '',
			phone: '',
			parent_phone: '',
			validate: '',
			email:'',
			can_modify: true
      	}
      }
    },
   	methods:{
   		preventDefault: function(event){
   			event.preventDefault()
   		},
   		formatName : function(){
   			this.params.name = ( this.params.name + "" ).replace(/[a-zA-Z0-9'"]+([\u4E00-\u9FA5])/g,'$1')
   		},
   		getPhoneCode: function() {
   			//不是第一次报名不需要进行校验图片验证码和手机验证码
   			if(!this.$data.params.can_modify) {
   				return false
   			}

   			if(this.$data.captcha == "") {
   				this.$validation.captcha.dirty = true
   				return false
   			} 
   			if(this.$data.params.phone == "") {
   				this.$validation.phone.dirty = true
   				return false
   			} 

   			if(this.$data.timedown < 60) {
   				return false
   			}

			this.captcha = $.trim(this.captcha)
			this.$http.post(Api.sms,{phone:this.params.phone,captcha:this.captcha}).then((res)=>{ this.timedownfn()}, (res)=>{
				this.getImgCode()
				if(res.data.message) {
	    			alert(res.data.message)	
	    		}
			})
			return false
   		},
   		timedownfn: function() {
   			--this.$data.timedown
				let that = this
				let td = setInterval(function() {
					if(that.$data.timedown > 0) {
						--that.$data.timedown
					} else {
						that.$data.timedown = 60
						that.$data.txttimedown = "重新获取验证码"
						clearInterval(td)
					}
			},1000)
   		},
   		poststudentme: function() {
   			let valibool =  this.$validation.valid
   			let confirm
   			if(this.$data.params.can_modify == true ? !valibool || (!this.$data.uploadfileStatus && !this.isFromMycenter) : !(this.$data.matchExamProvince != "" && this.$data.matchExamCity != "")) {
   				return false
   			}
   			confirm = window.confirm("您是否已认真检查并确定提交个人信息？\n(一旦提交将不能再修改)")
   			confirm && this.poststudentmeHanlder()
   		},
   		poststudentmeHanlder: function() {
   			let exam_id = this.$route.params.id
   			let postUrl = this.isFromMycenter ? Api.poststudentmycenter : Api.poststudentme
   			if(this.$data.params.can_modify ) {
				//第一次报名时
				let data = {
		    		exam_id: exam_id,
		    		name: this.$data.params.name,
		    		gender: this.$data.params.gender == "男" ? 1 : 2,
		    		school: this.$data.matchSchool,
		    		gaokao_year: this.$data.params.gaokao_year,
		    		identity_type: this.identity_radio ? this.identity_text[this.identity_radio] : this.othertype,
		    		phone: this.$data.params.phone,
		    		validate: $.trim(this.$data.phonevali)
		    	}

		    	// 非必填项
		    	!!this.$data.matchExamCity && ( data.exam_city = +this.$data.matchExamCity )
		    	!!this.$data.params.email && ( data.email = this.$data.params.email )
		    	!!this.$data.params.parent_phone && ( data.parent_phone = this.$data.params.parent_phone  )
		    	!!this.$data.params.identity && ( data.identity = this.$data.params.identity )
		    	!!this.$data.matchCity && ( data.city = +this.$data.matchCity )
		    	!!this.$data.imgsrc && ( data.avatar = this.$data.imgsrc )

		    	this.$http.post(postUrl,data).then(function(res) {
	    			if( this.$route.name === 'archiveEdit'){
	    				pageTo('mycenter','archive/preview')
	    			}else{
		    			this.$route.router.go("/step3/" + res.data.order_number)
	    			}
		    	},function(response) {
		    		if(response.data.message) {
		    			alert(response.data.message)	
		    		}
		    	})
   			} else {
   				let data1 = {
   					exam_id: parseInt(exam_id),
   					exam_city: +this.$data.matchExamCity //9
   				}
   				this.$http.patch(postUrl,data1).then(function(res) {
	    			if( this.isFromMycenter ){
	    				pageTo('mycenter','archive/preview')
	    			}else{
		    			this.$route.router.go("/step3/" + res.data.order_number)
	    			}
		    	},function(response) {
		    		if(response.data.message) {
		    			alert(response.data.message)	
		    		}
		    	})
   			}
   		},
   		getImgCode: function() {
   			this.src = this.src + "?madom=" + Math.random()
   		},
   		imgUpload: function(event) {
   			let file = event.target.files[0],
   				type = file.type,
   				boole = true;

   			let formData = new FormData()

   			if(!type.match(/image\/jpeg/) && !type.match(/image\/png/) && !type.match(/image\/gif/) && !type.match(/application\/x-MS-bmp/) ) {
   				this.$data.uploadfileStatus = boole = false
   				this.$data.errormsg = "图片格式必须为jpg、jpeg、bmp、gif、png"
   			}

   			// if(file.size >= 15360 && file.size <= 30720) {
   			// 	this.$data.uploadfileStatus = boole = false
   			// 	this.$data.errormsg = "图片大小必须在15kb - 30kb之间"
   			// }
   			
   			if(boole) {
   				this.$data.uploadfileStatus = true
   				formData.append('type', 'identification')
   				formData.append('file',file)
   				this.$http.post(Api.uploadfile,formData,{emulateJSON:'true'}).then(function(res) {
					$('#status').empty()
					this.$data.imgsrc = res.data.image_url || res.data.url
   				})
   			}
   		}
   	},
   	watch: {
   		matchProvince: function(provinceId) {
   			this.$data.matchProvince = provinceId
   		},
   		matchExamProvince: function(provinceId) {
   			this.$data.matchExamProvince = provinceId
   		},
   		matchCity: function(cityId) {
   			this.$data.matchCity = cityId
   		},
   		matchExamCity: function(cityId) {
   			this.$data.matchExamCity = cityId
   		},
   		matchSchool: function(shcoolId) {
   			this.$data.matchSchool = shcoolId
   		},
   		timedown: function(tm) {
   			this.$data.timedown = tm
   		}
   	},
    created() {

    	let params = {limit:100000}

    	Promise.all([

	    	//获取省份
	    	this.$http.get(Api.provices,params).then(function(res) {
	    	   this.provices = this.exam_province = res.data.results
	    	}),
	    	//获取城市
	    	this.$http.get(Api.cities,params).then(function(res) {
	    		this.cities = this.exam_city = res.data.results
	    	}),
	    	//获取学校
	    	this.$http.get(Api.schools,params).then(function(res) {
	    		this.schools = res.data.results

	    	}) 
	    	]

    	 ).then(
    	 	() => {
	    	 	//基础学生信息
		    	this.$http.get(Api.studentme,{skip:true}).then(function(res) {
		    		// setTimeout(()=>{
						this.params = res.data
			    		this.matchProvince = res.data.province.id
			    		this.matchExamProvince = res.data.exam_province.id
			    		this.matchCity = res.data.city.id
			    		this.matchExamCity = res.data.exam_city.id
			    		this.matchSchool = res.data.school.id
			    		this.imgsrc = res.data.avatar
		    			this.identity_radio = Math.max(0, this.identity_text.indexOf( res.data.identity_type ) )
		    			!this.identity_radio && ( this.othertype = res.data.identity_type )
		    			if(res.data.avatar != "") {
		    				this.$data.uploadfileStatus = true
		    			}
		    		// },200)
		    	})
    	 	}
    	 )
    	
    	//设置图片验证码接口
    	this.src = Api.smsimg
    }
  }
</script>
