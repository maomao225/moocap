<template>
<ul>
  <li v-for="item in list| limitBy 4" >
  <a href="{{vars.announcement}}#!/detail/{{item.id}}" target="_blank">
    <p>{{item.title}}</p>
    <aside>{{item.publish_time|formatDateByIso}}</aside>
  </a>
  </li>
</ul>
</template>

<style lang="sass" scoped>
  @import "style/varibles";
  @import "style/mixin";
  ul{
    list-style-type: none;

    li{
      margin-bottom: 20px;
    }

    p{
      font-size:$font-middle;
      color:$dark;
      margin-bottom: 13px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    aside{
      font-size: $font-small;
      color:$light;
    }
  }
</style>

<script>
  import Api from 'api'
  import vars from 'vars'
  export default {
    replace: false,
  	data() {
      return {
        list: [],
        vars
      }
    },
    created() {
        this.$http.get(Api.announcements,{limit:4}).then((res) => {
          this.list = res.data.results
        })
    }
  }
</script>
