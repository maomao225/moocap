<template>

  <h1 class="page-title">会员学校</h1>

  <div class="tabs">
    <a href="javascript:void(0)" v-for="item in tabs" :class="{active: activeTab === $index}" @click="setActive($index)">{{item}}</a>
  </div>
  <div class="content">
    <ul>
      <li v-for="item in list" v-show="item.category-1 === activeTab" title="{{item.name}}"><img :src="item.image_url" alt="{{item.name}}"></li>
    </ul>
  </div>
  
</template>

<style lang="sass" scoped>
  @import "style/varibles";
  @import "style/mixin";

  $tabHeight: 35px;

  .tabs{
    height: $tabHeight;
    margin-bottom: 20px;

    a{
      font-size: $font-middle;
      border-bottom:1px solid $light;
      color: $light;
      width: 50%;
      float: left;
      height:$tabHeight;
      line-height: $tabHeight;
      text-align: center;
      font-weight: bold;

      &.active{
        color:$main-color;
        border-color:$main-color;
      }
    }
  }

  .content{
    overflow:hidden;
  }

  ul{
    list-style-type:none;
    margin-right: -100px;
  }

  li{
    float: left;
    margin-right: 45px;
    margin-bottom: 20px;

    img{
      display: block;
      border:0;
      width: 240px;
      height:105px;
    }
  }
</style>

<script>
  import Api from 'api'
  export default {
    replace: false,
  	data() {
      return {
        activeTab : 0,
        tabs: ['中学', '高校'],
        list: [],
        setActive: function(index){
          this.activeTab = index
        }
      }
    },
    created() {
        let params = {limit:10000}
        this.$http.get(Api.memberschools,params).then((res) => {
          this.list = res.data.results
        })
    }
  }
</script>
