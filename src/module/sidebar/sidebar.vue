<template>
    <ul>
      <li class="tag-mycourse"><a v-link="{path: '/mycourse'}" :class="{active: $route.name === 'mycourse'}">我的课程</a></li>
      <li class="tag-myexam"><a v-link="{path: '/myexam'}" :class="{active: $route.name === 'myexam'}">我的考试</a></li>
      <li class="tag-archive"><a v-link="{path: '/archive'}" :class="{active: $route.name === 'archivePreview' || $route.name === 'archiveEdit'}">个人档案</a></li>
      <!-- <li><p><a href="{{vars.problems}}?offset=13">如何申请贫困生?</a></p></li> -->
    </ul>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

ul{
  float:left;
  padding:0 16px;
  background: #fff;
  margin-top: 40px;
  margin-right: 15px;
  border:1px solid $border-color;
  list-style-type:none;

  li a{
    display: block;
    width: 228px;
    padding:20px 0;
    text-align: center;
    border-bottom:1px solid $border-color;
    font-size:$font-large;
    color:$dark;
    text-decoration:none;
    background: url(http://storage.xuetangx.com/public_assets/xuetangx/images/695afdfc004a144a457f3345d6113001.1.png) no-repeat 20px 4px;

    &:hover,&.active{
      color:$main-color;
      background-image: url(http://storage.xuetangx.com/public_assets/xuetangx/images/aa06825611c4cf410a44282f18023089.2.png);
    }
  }  

  .tag-myexam a{
    background-position: 20px -56px;
  }

  .tag-archive a{
    background-position: 20px -116px;
  }

  p a{
    font-size: $font-small;
    text-decoration:underline;
    background: none;
  }

  li:last-child a{
    border:0;
    // background: none;

    // &:hover{
    //   background: none;
    // }
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
