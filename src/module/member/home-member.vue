<template>
  <ul>
    <li v-for="item in list|limitBy 9" title="{{item.name}}"><img :src="item.image_url" alt="{{item.name}}"></li>
  </ul>
</template>

<style lang="sass" scoped>
  @import "style/varibles";
  @import "style/mixin";

  ul{
    list-style-type:none;
  }

  li{
    float: left;
    margin-right: 15px;
    margin-bottom: 16px;

    img{
      display: block;
      border:0;
      width: 150px;
      height:65px;
    }
  }
</style>

<script>
  import Api from 'api'
  export default {
    replace: false,
  	data() {
      return {
        list: []
      }
    },
    created() {
        this.$http.get(Api.memberschools).then((res) => {
          this.list = res.data.results
        })
    }
  }
</script>
