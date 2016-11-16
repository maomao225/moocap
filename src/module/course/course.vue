<template>
<ul>
	<li v-for="item in list | orderBy 'enroll_status'">
    <a href="http://www.xuetangx.com/courses/{{item.id}}/about" title="{{item.name}}" target="_blank">
      <div class="box" @mouseenter="flip('in', $event)" @mouseleave="flip('out', $event)">
        <div class="des flip out">
          {{item.subtitle}}
        </div>
        <img :src="item.thumbnail" class="flip">
      </div>
      <p>{{item.name}}</p>
    </a>
  </li>
</ul>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";
@import "style/animate";

ul{
  list-style-type:none;
  margin-right: -50px;
  overflow: hidden;
}
li{
  float: left;
  margin-right: 62px;
  margin-bottom: 35px;
  margin-left: 62px;
  width: $courseImgWidth;

  .box{
    width: $courseImgWidth;
    height:$courseImgHeight;
    position: relative;
  }

  .des{
    position:absolute;
    left:0;
    top:0;
    background: $main-color;
    color:$white;
    width: $courseImgWidth - 60;
    height:$courseImgHeight - 60;
    padding:30px;
    font-size:$font-small;
    line-height: 1.5;
  }

  a{
    @include hover($dark);
    font-size:$font-middle;
  }

  p{
    padding-top: 16px;
    overflow:hidden;
    height:40px;
    margin-bottom: 20px;
    line-height: 1.5;
    font-size:$font-normal;
  }
}

img{
  position:absolute;
  left:0;
  top:0;
  width: $courseImgWidth;
  height:$courseImgHeight;
}
</style>

<script>
  import Api from 'api'
  import flip from './flip'

  export default {
    replace: false,
  	data() {
      return {
        list: [],
        flip
      }
    },
    created() {
      this.$http.get(Api.courses).then((res) => {
          this.list = res.data.results
        })
    }
  }
</script>
