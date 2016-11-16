<template>

<section :class="{succ: $route.type.indexOf('success') >= 0}">
  
  <template v-if="$route.type == 'success'">
    <p>恭喜您已完成了考试报名！</p>
    <a href="{{vars.mycenter}}#!/myexam">查看已报名的考试</a>
  </template>
  <template v-if="$route.type == 'fail'">
    <p>Opps！支付出现了问题哟！</p>    
    <a v-link="{path:'/step3'}">继续支付>></a>
  </template>
  <template v-if="$route.type == 'expire'">
    <p>由于您在30分钟之内未完成支付，订单已自动取消。</p>    
    <a v-link="{path:'/step1'}">重新报名考试>></a>
  </template>

   <template v-if="$route.type == 'transcript.success'">
    <p>恭喜您已成功申请成绩单！</p>
    <a href="{{vars.mycenter}}#!/myexam">查看已报名的考试</a>
  </template>
  <template v-if="$route.type == 'transcript.fail'">
    <p>Opps！支付出现了问题哟！</p>    
    <a v-link="{path:'/transcript/step3'}">继续支付>></a>
  </template>
  <template v-if="$route.type == 'transcript.expire'">
    <p>由于您在30分钟之内未完成支付，订单已自动取消。</p>    
    <a href="{{vars.mycenter}}#!/myexam">重新申请成绩单>></a>
  </template>

</section>

</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

section{
  border:1px solid $border-color;
  margin: 40px 0;
  padding-top: 115px;
  text-align: center;
  background: #fff url(http://storage.xuetangx.com/public_assets/xuetangx/images/0a475c216812d162172de0feceed5cee.fail.png) no-repeat center 50px;
  
  &.succ{
    background-image: url(http://storage.xuetangx.com/public_assets/xuetangx/images/3317760afc60c8db63fcda0e9ca54a02.succ.png);

    button{
      background: $main-color;
      color:$white;
    }
  }

  p{
    margin-bottom: 36px;
  }

  a{
    padding:10px 19px;
    font-size:$font-normal;
    border:1px solid $main-color;
    margin-bottom: 40px;
    color:$main-color;
    background: $white;
    display: inline-block;
  }
}
</style>

<script>
  import vars from 'vars'
  export default {
    replace: false,
  	data() {
      return {
        vars
      }
    }
  }
</script>
