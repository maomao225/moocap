<template>
<div id="scrollbar" class="wrapper">
<label>联合理事长（按姓氏笔划排列）</label>
<ul>
	<li>丁雪梅&emsp;&emsp;哈尔滨工业大学副校长</li>
	<li>王志林&emsp;&emsp;南京大学副校长</li>
	<li>包信和&emsp;&emsp;复旦大学常务副校长</li>
	<li>杨&emsp;斌&emsp;&emsp;清华大学副校长</li>
	<li>陈初升&emsp;&emsp;中国科学技术大学副校长</li>
	<li>郑庆华&emsp;&emsp;西安交通大学副校长</li>
	<li>洪大用&emsp;&emsp;中国人民大学副校长</li>
</ul>
<label>执行理事长（按姓氏笔画排列）</label>
<ul>
	<li>王殿军&emsp;&emsp;清华大学附属中学校长</li>
	<li>聂风华&emsp;&emsp;教育部在线教育研究中心副主任</li>
</ul>
<label>秘书长</label>
<ul>
	<li>于世洁&emsp;&emsp;清华大学招生办公室主任</li>
</ul>
<label>常务理事（按姓氏笔画排列）</label>
<label class="sub">教育部有关部门负责人（2人）</label>
<ul>
	<li>聂风华&emsp;&emsp;教育部在线教育研究中心</li>
	<li>韩&emsp;宁&emsp;&emsp;教育部考试中心</li>
</ul>
<label class="sub">大学招生部门负责人（19人）</label>
<ul>
	<li>丁光宏&emsp;&emsp;复旦大学</li>
	<li>于世洁&emsp;&emsp;清华大学</li>                                            
    <li>王&emsp;东&emsp;&emsp;浙江大学</li>
    <li>王&emsp;福&emsp;&emsp;武汉大学</li>
    <li>王小虎&emsp;&emsp;中国人民大学</li>
    <li>刘&emsp;鹤&emsp;&emsp;吉林大学</li>
    <li>李晓莉&emsp;&emsp;兰州大学</li>
    <li>李海雄&emsp;&emsp;东北大学</li>
    <li>李蓉军&emsp;&emsp;四川大学</li>
    <li>吴晓枫&emsp;&emsp;中山大学</li>
    <li>谷&emsp;钰&emsp;&emsp;天津大学</li>
    <li>邵庆辉&emsp;&emsp;南开大学</li>
    <li>郑益慧&emsp;&emsp;上海交通大学</li>
    <li>索文斌&emsp;&emsp;南京大学</li>
    <li>傅&emsp;尧&emsp;&emsp;中国科学技术大学</li>
    <li>訾艳阳&emsp;&emsp;西安交通大学</li>
    <li>虞立红&emsp;&emsp;北京师范大学</li>
    <li>蔡&emsp;亮&emsp;&emsp;东南大学</li>
    <li>臧永军&emsp;&emsp;哈尔滨工业大学</li>
</ul>
<label class="sub">中学校长（12人）</label>
<ul>
	<li>王中立&emsp;&emsp;郑州外国语学校</li>
	<li>王永智&emsp;&emsp;西北工业大学附属中学</li>
	<li>王淑芳&emsp;&emsp;西安高新第一中学</li>
	<li>王殿军&emsp;&emsp;清华大学附属中学</li>
	<li>冯志刚&emsp;&emsp;上海中学</li>
	<li>刘长铭&emsp;&emsp;北京市第四中学</li>
	<li>关&emsp;磊&emsp;&emsp;云南师范大学附属中学</li>
	<li>李志贵&emsp;&emsp;乌鲁木齐市第一中学</li>
	<li>吴国平&emsp;&emsp;浙江省镇海中学</li>
	<li>葛&emsp;军&emsp;&emsp;南京师范大学附属中学</li>
	<li>翟小宁&emsp;&emsp;中国人民大学附属中学</li>
	<li>戴立益&emsp;&emsp;华东师范大学第二附属中学</li>
</ul>
<label>首批理事（按姓氏笔画排列）</label>
<label class="sub">中学校长（17人）</label>
<ul>
	<li>王&emsp;铮&emsp;&emsp;北京大学附属中学</li>
	<li>王佩东&emsp;&emsp;西安交通大学附属中学</li>
	<li>王俊成&emsp;&emsp;北京市第八中学</li>
	<li>叶建新&emsp;&emsp;乐成寄宿中学</li>
	<li>田&emsp;林&emsp;&emsp;中央民族大学附属中学</li>
	<li>朱&emsp;越&emsp;&emsp;上海市七宝中学</li>
	<li>庆&emsp;群&emsp;&emsp;西安市铁一中学</li>
	<li>李希贵&emsp;&emsp;北京十一学校</li>
	<li>吴&emsp;坚&emsp;&emsp;复旦大学附属中学</li>
	<li>张贵荣&emsp;&emsp;会宁县第一中学</li>
	<li>张惠民&emsp;&emsp;绍兴鲁迅中学</li>
	<li>周&emsp;进&emsp;&emsp;贵阳市第一中学</li>
	<li>徐向东&emsp;&emsp;上海交通大学附属中学</li>
	<li>郭&emsp;涵&emsp;&emsp;北京一零一中学</li>
	<li>唐发鸿&emsp;&emsp;湟中县第一中学</li>
	<li>曹保义&emsp;&emsp;北京师范大学第二附属中学</li>
	<li>蔡晓东&emsp;&emsp;北京师范大学附属实验中学</li>
</ul>
</div>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

.wrapper{
	height:380px;
	overflow-y:scroll;
	position: relative;
}

label{
	color: $light;
	font-size: $font-middle;
	display: block;

	&.sub{
		font-size:$font-normal;
		margin-top: 15px;
	}
}
ul{
	list-style-type: none;
	margin:15px 0;
}
li{
	color:$dark;
	font-size:$font-small;
	line-height: 1.8;
}
</style>

<script>
  import Ps from 'perfect-scrollbar'

  export default {
    replace: false,
  	data() {
      return {}
    },
    ready() {
    	Ps.initialize( document.getElementById('scrollbar') )
    }
  }
</script>
