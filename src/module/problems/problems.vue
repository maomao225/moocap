<template>
	<div class="block-problems">
		<ul>
			<li v-for="item in list" class="{{$index === +current ? 'current' : ''}}" @click="active($index)">
				<dl>
					<dt><a href="javascript:void(0)">{{$index+1}}.{{item.title}}</a><em class="icon-arrow"></em></dt>
					<dd>
						<p v-for="fragment in item.content">{{{fragment}}}</p>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>

<style lang="sass" scoped>
	@import "style/varibles";
	@import "style/mixin";

	$padding: 33px;

	.block-problems{
		overflow:hidden;
		border: 1px solid $border-color;
		border-bottom:0;
		background: $white;
		ul{
			li{
				border-bottom: 1px solid $border-color;
				cursor:pointer;
				&:hover,&.current{
					dt a{
						color: $main-color;
					}
				}
				&.current{
					dd{
						display:block;
					}
					.icon-arrow{
						background-position: 0 0;
					}
				}
				.icon-arrow{
					width: 14px;
					height:12px;
					background: url(http://storage.xuetangx.com/public_assets/xuetangx/images/89245c86546eadf17ba6cd2358c66fe5.arrow.png) no-repeat 0 -13px;
					position: absolute;
					right:$padding;
					top:20px;
				}
				dl{
					padding-left: $padding;
				}
				dt{
					padding:17px 0;
					position: relative;
					a{
						font-size: $font-big;
						color: $dark;
						font-weight: bold;
						&:hover{
							color: $main-color;
						}
					}
				}
				dd{
					font-size: $font-small;
					color: $light;
					display: none;
					p{
						text-indent: $font-small*2;
						line-height: 1.5;
						margin-bottom: 15px;
						padding-right: $padding;
					}
				}
			}
		}
	}
</style>

<script>
  import {parseUrl} from 'utils'

  // url中获取， 默认展开第几条
  const offset = parseUrl().params.offset

  export default {
    replace: true,
  	data() {
      return {
      	// 当前展开的
      	current:  offset ? offset - 1 : 'undefined',

      	// 展开第几条
      	active( index ) {
      		this.current = this.current === index ? 'undefined' : index
      	},

      	// 数据源
        list: [{
		    'title': '什么是CAP？',
		    'content': [
		        '2011年3月，由清华附中校长王殿军发起组建中国国内大学先修课（简称CAP）研究团队，开始对中国国内开设大学先修课程的可行性进行研究。2013年6月14日，研究团队向教育部汇报了研究进展。2014年4月，由王殿军负责的《中国开设大学先修课程的理论与实践研究》正式立项，成为教育部哲学社会科学研究专项委托项目之一。同年，中国教育学会也依托该课题进行了线下试点工作的探索。'
		    ]
		}, {
		    'title': '什么是MOOC？',
		    'content': [
		        '“MOOC”为英文“Massive Open Online Courses”的首字母缩写，译为“大规模开放在线课程”，中文一般叫做“慕课”。2013年10月，由清华大学打造的首个中文版慕课平台——“学堂在线（xuetangX）”正式推出。目前已成为全球第三大、国内第一大MOOC平台。慕课作为在线教育发展到新阶段的产物，实现了信息技术与教育教学的紧密融合，使传统课堂的教学模式通过信息技术得到延伸。MOOC不同于传统的视频公开课，而是利用先进的IT技术，实现学习者全周期的在线学习过程。'
		    ]
		}, {
		    'title': '什么是MOOCAP？',
		    'content': [
		        '基于慕课开发大学先修课，便有了MOOC与CAP的融合，称之为MOOCAP，中文名为“中国慕课大学先修课”。',
		        '中国慕课大学先修课是基于慕课的中国大学先修课共享平台，旨在衔接高等教育和基础教育，全面挖掘学生潜力，切实促进教育公平。',
		        '首批共有6门课程上线，分别是：微积分、线性代数、概率论与数理统计、大学物理、大学化学、普通生物学。未来，“MOOCAP理事会”将建设大量“素质拓展类”和“专业导论类”课程，这一具有中国特色的课程体系旨在帮助中学生提高综合素质，提前了解大学的教育理念及专业设置，更好地完成基础教育向高等教育的衔接过渡。'
		    ]
		}, {
		    'title': '什么是MOOCAP理事会？',
		    'content': [
		        '2015年11月，中国慕课大学先修课（MOOCAP）理事会由教育部有关部门，近20所大学以及近30所中学共同发起成立，并于11月28日在清华大学举行了启动仪式。',
		        'MOOCAP理事会是高水平大学与中学一起共研教育衔接的“协作体”，旨在促进教育公平与教育衔接，推动教育技术变革与综合改革，为学生的全面素质发展和大学的人才选拔培养服务。'
		    ]
		}, {
		    'title': '如何在“学堂在线”上选修MOOCAP？',
		    'content': [
		        '中国慕课大学先修课（MOOCAP）选课具体步骤',
		        '第一步：注册账号',
		        '1）打开中国慕课大学先修课首页http://www.moocap.org.cn/，点击右上角登录注册圆标按钮进行注册\登陆。',
		        '2）可选用邮箱注册，也可使用第三方账号注册。邮箱注册时，需正确填写常用邮箱、用户名称及密码等注册信息。学堂在线支持使用微博、微信和QQ等第三方账号直接登陆。',
		        '第二步：选课',
		        '1）直接在首页点击MOOCAP课程右侧的【更多】按钮，可打开课程列表页。',
		        '2）在课程列表页，点击课程图片可打开该课程的详情页，点击“仅加课\加入课程”，即可加入该课程。',
		        '第三步：学习课程',
		        '1）点击页面左上角的头像，进入“个人中心”-“我的课程”，即可查看已加入的所有MOOCAP课程。',
		        '2）点击继续学习按钮，即可进入该课程的学习界面查看课程内容并进行学习。'
		    ]
		}, {
		    'title': '学习MOOCAP需要交费吗？',
		    'content': [
		        'MOOCAP课程学习，不收取任何费用。'
		    ]
		}, {
		    'title': '如何查看学习过程？',
		    'content': [
		        '在课程学习界面的“进度”模块，可查看学习过程。'
		    ]
		}, {
		    'title': '学生如何申请线上成绩认证证书及缴费？',
		    'content': [
		        '在学堂在线http://www.xuetangx.com/dashboard/的我的课程列表中，如果已经完成课程学习并通过了线上考核标准，会有“申请证书”按钮，点击“申请证书”按钮即可申请线上成绩证书。'
		    ]
		}, {
		    'title': '学生如何报名线下考试与缴费？',
		    'content': [
		        '在 “考试信息”页面，点击页面最下方的“我要报名考试”按钮。',
		        '第一步：选择考试科目',
		        '第二步：填写个人信息',
		        '第三步：缴纳报名费'
		    ]
		}, {
		    'title': '学生如何查询个人报名考试状态？',
		    'content': [
		        '在“个人中心”-“我的考试”，可以查询个人报名考试状态。'
		    ]
		}, {
		    'title': '学生如何查询个人考试成绩？',
		    'content': [
		        '在“个人中心”-“我的考试”，可以查询个人考试成绩。'
		    ]
		}, {
		    'title': '学生如何申请线下成绩单与缴费？',
		    'content': [
		        '在“个人中心”-“我的考试”，点击“申请纸质成绩单”可以申请线下成绩单，填写'
		    ]
		}, {
		    'title': '贫困生如何申请考试优惠？',
		    'content': [
		        '1）贫困生申请书书写完成后，请发送至:cap@tsinghua.edu.cn',
		        '2）MOOCAP理事会审核后会尽快联系，告知结果。',
		        '3）MOOCAP理事会联系方式：黄老师，010-62785329'
		    ]
		}, {
		    'title': '如何申请成为MOOCAP会员单位？',
		    'content': [
		        '下载会员单位申请信息表，填写完成后发送到指定邮箱。',
		        '1）填写完成后请发送至:cap@tsinghua.edu.cn',
		        '2）MOOCAP理事会审核后会尽快与申请单位联系，告知结果。',
		        '3）MOOCAP理事会联系方式：黄老师，010-62785329'
		    ]
		}, {
		    'title': '我已申请成为MOOCAP会员，何时得知审核结果？',
		    'content': [
		        'MOOCAP理事会执行委员会办公室会在确认收到申请表的三个月后告知审核结果。'
		    ]
		}, {
		    'title': '会员单位有何福利？',
		    'content': [
		        '中学会员单位有权限查看本校学生的学习过程及考试成绩等信息。大学会员单位，可查看经学生本人允许后公开的考试成绩。'
		    ]
		}, {
		    'title': '会员单位如何登陆系统？',
		    'content': [
		        '点击“管理中心”可进入管理中心的登陆页面，用MOOCAP理事会执行委员会办公室分配的登陆账号进入管理中心。'
		    ]
		}, {
		    'title': '会员单位如何申请开设MOOCAP在线课程？',
		    'content': [
		        '申请步骤',
		        '<img src="http://storage.xuetangx.com/public_assets/xuetangx/images/1a9c8ca4e74aac745a7fb56dd793ce91.4.png" />',
		        '申请说明',
		        '(1）学堂在线是MOOCAP理事会授权的官方的“MOOCAP”运营平台。',
		        '(2）MOOCAP理事会每年会根据教学需求和调研情况公布重点推荐科目。',
		        '(3）每门课程由1所责任大学牵头，可联合不超过5个其它学校作为合作学校组建课程团队（团队成员要求同时包含大学会员单位和中学会员单位）。团队成员结构合理、人员稳定、素质优良，对配合MOOCAP课程建设和教学有较高的热情和责任感，能投入足够的时间和精力，保证在规定时间内完成课程建设任务并如期在“MOOCAP平台”上线。',
		        '(4）MOOCAP在线课程分为三类：学术志趣类、素质拓展类和专业导论类。具体分类标准及每类包含的课程科目见官网通知。学术志趣类课程每科目原则上只支持1门课程建设，每5年重新遴选一次，不同时重复支持；素质拓展类和专业导论类课程不限项。',
		        '(5）由MOOCAP理事会遴选通过的学术志趣类课程，每门课由运营公司提供30万元课程建设经费，在线课程著作权属于授课单位和运营公司共有，且须授权在“MOOCAP平台”面向全球开放。未经MOOCAP理事会同意，授课单位不得将在线课程提供给其它平台。',
		        '(6）入选的学术志趣类课程，在官网公示期过后，将划拨20万课程建设费至课程责任学校，由责任学校启动在线课程制作，监督管理经费使用。责任学校须在得到入选通知后的1个月内开始MOOCAP制作。初期制作的样片需接受理事会执行委员会信息办公室审核。审核通过后，方可进行全面制作。得到入选通知后的1年内，在线课程上线“MOOCAP平台”并完整运营1轮次。经MOOCAP理事会组织专家审核通过后，划拨10万元至责任学校。学术志趣类课程，从首次上线“MOOCAP平台”起，责任学校须保证每年至少在平台上运营不低于2轮次。在整个MOOCAP制作课程中，理事会执行委员会相关部门有权监督课程质量，提出整改意见。',
		        '(7）入选的其它类课程，运营公司不资助课程建设费，责任单位自行组织建设在线课程。在线课程著作权属于授课单位，须授权在“MOOCAP平台”面向全球开放。经MOOCAP理事会组织专家审核通过后，上线“MOOCAP平台”。'
		    ]
		}]
      }
    },

    created() {
    	this.content = this.list[0].content
    },

    ready(){
    	// 页面进入后滚动到展开的条目
    	let $current = $('.block-problems .current')
    	if( this.current && $current.length ){
    		window.scrollTo(0,$current.offset().top)
    	}
    }
  }
</script>
