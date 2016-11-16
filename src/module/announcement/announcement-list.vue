<template>
<ul>
  <li v-for="item in list" >
    <a href="#!/detail/{{item.id}}" target="_blank">
      <dl>
        <dt>
          [{{item.category === 1 ? '通知' : '公告'}}] {{item.title}}
        </dt>
        <dd class="des">{{item.publish_time|formatDateByIso}}</dd>
      </dl>
    </a>
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
    width: 323px;
    height:55px;
    padding:26px 15px;
    overflow:hidden;
    background: $white;
    margin-right: 50px;
    margin-bottom: 30px;
    dt{
      font-size:18px;
      color:$dark;
      font-weight: bold;
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow: hidden;
    }
    dd{
      &.des{
        margin:10px 0 18px;
      }
      &.content{
        line-height: 1.6;
      }
      a{
        margin-left: 5px;
        @include hover($main-color,$main-color,underline);
      }
      font-size:$font-small;
      color: $light;
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
      let params = {limit:10000}
      this.$http.get(Api.announcements,params).then((res) => {
            this.list = res.data.results
        })
    }
  }
</script>
