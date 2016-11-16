<template>
<div class="block-ticket">
	<dl>
		<dt><img :src="data.avatar" title="{{data.name}}"></dt>
		<dd>
			<h6>2016年MOOCAP统一考试</h6>
			<h5>准&nbsp;考&nbsp;证</h5>
			<div class="text">
				<p><span>考生姓名：</span><span>{{data.name}}</span></p>
				<p><span>证件号：</span><span>{{data.identity}}</span></p>
				<p><span>性别：</span><span>{{data.gender === 2 ? '女' : '男'}}</span></p>
				<p><span>科目名称：</span><span>{{data.exam}}</span></p>
				<p><span>报考城市：</span><span>{{data.city}}</span></p>
				<p><span>准考证号：</span><span>{{data.exam_card_num}}</span></p>
				<p><span>座位号：</span><span>{{data.place}}</span></p>
				<p><span>开考时间：</span><span>{{data.exam_start|formatDateByIso}}</span></p>
				<p><span>结束时间：</span><span>{{data.exam_end|formatDateByIso}}</span></p>
				<p><span>考点名称：</span><span>{{data.examroom_kaodian_name}}</span></p>
				<p><span>考场名称：</span><span>{{data.examroom}}</span></p>
				<p><span>考场地址：</span><span>{{data.examroom_address}}</span></p>
			</div>
		</dd>
	</dl>
	<button class="button" @click="print">打印准考证</button>
</div>
</template>

<style lang="sass">
@import "style/varibles";
@import "style/mixin";


.block-ticket{
	padding:30px;
	overflow: hidden;
	background: $white;

	.button{
		@include button;
		margin:20px auto 0;
		display: block;
	}

	dl{
		dt{
			float: left;
			margin-right: 44px;

			img{
				display: block;
				width: 141px;
				height:198px;
			}
		}
		dd{
			overflow: hidden;

			h6{
				font-weight:normal;
				font-size:$font-big;
				text-align: center;
				margin-left:-60px;
			}

			h5{
				font-size:32px;
				text-align: center;
				margin:10px;
				margin-left:-60px;
			}

			.text{
				margin-top: 40px;
				font-size:$font-small;

				p{
					margin-top: 10px;
				}
			}
		}
	}
}

// 打印
//隐藏非准考证的其他部分
@media print {
  header,footer,sidebar,.content{
    display: none;
  }
  .block-ticket{
    position:static;
    margin:0;

    .button{
    	display: none;
    }
  }
}
</style>

<script>
  import Api from 'api'

  export default {
    replace: false,

    // 准考证id
    props:['tid'],

  	data() {
      return {
      	data : {},
      }
    },

  	methods: {
  		print: function(){
  			window.print()
  		}
  	},

    watch:{
    	// 准考证id变化，自动更新准考证信息
    	tid: function(tid) {
    		if(this.tid){
	    		this.$http.get(Api.myexam + this.tid).then((res) => {
		          this.data = res.data
		        })
	    	} 
   		}
    }
  }
</script>
