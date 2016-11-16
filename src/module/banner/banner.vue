<template>
	<div class="banner" :style="{backgroundImage: 'url(' + bglist[rel].url + ')', height:bglist[rel].height+'px'}">
   
    <div v-if="rel === 'home'" class="box">
      <h6>关于举办中国慕课大学先修课（MOOCAP） 第一次线下考试的通知</h6>
      <p>为了促进教育公平、促进教育衔接，推动教育综合改革、推动教育技术变革，服务学生的全面素质发展、服务大学的人才选拔培养，清华大学...<a href="{{vars.announcement}}#!/detail/17">[更多]</a></p>
    </div> 

    <div v-if="rel === 'member'" class="join">
      <a href="#!/apply">申请加入会员</a>
      <p>仅接受学校相关负责人或老师申请加入会员；</p>
      <p>不接受学生申请；下列已合作院校不能再申请</p>
    </div> 

  </div>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

.banner{
  background:transparent no-repeat center center;
  position: relative;
}

.box{
  position: absolute;
  background: $main-color;
  color:$white;
  padding:24px 30px;
  width: 180px;
  font-size:$font-small;
  left:50%;
  margin-left: 200px;
  line-height: 1.8;
  top:60px;

  h6{
    font-size:$font-middle;
    margin:0 0 30px;
    line-height: 1.5;
  }

  a{
    color:#FFD46B;
    margin-left: 5px;
  }
}

.join{
  color:$white;
  width: 250px;
  padding-top:80px;
  margin:0 auto;
  font-size:$font-small;
  text-align: center;

  a{
    display: inline-block;
    font-size:$font-big;
    margin:20px 0;
    padding: 13px 14px;
    line-height: 1;
    border:2px solid $white;
    color:$white;
  }

  p{
    line-height: 1.8;
  }
}


</style>

<script>
  import vars from 'vars'
  export default {
    replace: true,

    // pageName
    props:['rel'],

  	data() {
      return {
        vars,

        // 不同页面banner图
        bglist: {
          'home' : {
            url: 'http://storage.xuetangx.com/public_assets/xuetangx/images/07cfdefbbba1411633444f839f95fc8c.banner.jpg',
            height:420
          },
          'announcement' : {
            url: 'http://storage.xuetangx.com/public_assets/xuetangx/images/a9474734c2a59f2c98eb25592692c628.banner.jpg',
            height:300
          },
          'course' : {
            url: 'http://storage.xuetangx.com/public_assets/xuetangx/images/639f3ff8447a00193ca04f2ff0f1e2de.banner.jpg',
            height:300
          },
          'member' : {
            url: 'http://storage.xuetangx.com/public_assets/xuetangx/images/0eca3a990b106b0ac4b12fdcde5526dc.banner.jpg',
            height:300
          },
          'problems' : {
            url: 'http://storage.xuetangx.com/public_assets/xuetangx/images/0ba8ce93ea62bbe4a51f1e9cbbe3e585.banner.jpg',
            height:300
          }
        }
      }
    }
  }
</script>
