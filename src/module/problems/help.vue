<template>
  <ul>
    <li v-for="item in list">
      <dl>
        <dt>{{item.title}}</dt>
        <dd>{{{item.content}}}</dd>
      </dl>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
  @import "style/varibles";
  @import "style/mixin";
  ul{
    overflow: hidden;
    margin-right: -105px;
  }
  li{
    float: left;
    width: 230px;
    height:260px;
    padding:26px 15px;
    overflow:hidden;
    background: $white;
    margin-right: 20px;
    margin-bottom: 30px;
  
    &:last-child{
      margin-right: 0;
    }

    dt{
      font-size:18px;
      color:$dark;
      font-weight: bold;
      line-height: 1.8;
    }
    dd{
      line-height: 1.6;
      font-size:$font-small;
      color: $light;
      margin-top: 10px;
      a{
        margin-left: 5px;
        @include hover($main-color,$main-color,underline);
      }
    }
  }
</style>

<script>
  export default {
    replace: false,
  	data() {
      return {
        'list': [{
            'title': '什么是CAP?',
            'content': '2011年3月，由清华附中校长王殿军发起组建中国国内大学先修课（简称CAP）研究团队，开始对中国国内开设大学先修课程的可行性进行研究。2013年6月14日，研究团队向教育部汇报了研究进展。2014年4月，由王殿军负责的《中国开设大学先修课程的理论与实践研究》正式立项，成为教育部哲学社会科学研究专项委托项目之一。同年，中国教育学会也依托该课题进行了线下试点工作的探索。'
        }, {
            'title': '什么是MOOC?',
            'content': '“MOOC”为英文“Massive Open Online Courses”的首字母缩写，译为“大规模开放在线课程”，中文一般叫做“慕课”。2013年10月，由清华大学打造的首个中文版慕课平台——“学堂在线（xuetangX）”正式推出。目前已成为全球第三大、国内第一大MOOC平台。慕课作为在线教育发展到新阶段的产物，实现了信息技术与教育教学的紧密融合，使传统课堂的教学模式通过信息技术得到延伸。MOOC不同于传统的视频公开课，而是利用先进的IT技术，实现学习者全周期的在线学习过程。'
        }, {
            'title': '什么是MOOCAP?',
            'content': '基于慕课开发大学先修课，便有了MOOC与CAP的融合，称之为MOOCAP，中文名为“中国慕课大学先修课”。<br><br>中国慕课大学先修课是基于慕课的中国大学先修课共享平台，旨在衔接高等教育和基础教育，全面挖掘学生潜力，切实促进教育公平。'
        },{
            'title': '什么是MOOCAP理事会？',
            'content': '2015年11月，中国慕课大学先修课（MOOCAP）理事会由教育部有关部门，近20所大学以及近30所中学共同发起成立，并于11月28日在清华大学举行了启动仪式。<br><br>MOOCAP理事会是高水平大学与中学一起共研教育衔接的“协作体”，旨在促进教育公平与教育衔接，推动教育技术变革与综合改革，为学生的全面素质发展和大学的人才选拔培养服务。'
        }]
      }
    }
  }
</script>
