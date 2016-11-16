<template>
    <a href="{{item.link}}" v-for="item in list| limitBy 3" target="blank">
      <dl>
        <dt>
          <img :src="item.image">
        </dt>
        <dd>
          <h6>{{item.title}}</h6>
          <p>{{item.abstract}}</p>
          <aside><span>{{item.news_from}}</span></aside>
        </dd>
      </dl>
    </a>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";
dl{
  overflow: hidden;
  margin-bottom: 28px;
}
dt{
  float: left;
  margin-right: 20px;

  img{
    width: 185px;
    height:105px;
  }
}
dd{
  overflow: hidden;
  padding-right: 25px;

  h6{
    font-size:$font-middle;
    color:$dark;
    font-weight: normal;
  }

  p{
    font-size:$font-small;
    color:$light;
    margin:12px 0;
    line-height: 1.5;
  }

  aside{
    font-size:$font-small;
    color:$light;

    span{
      margin-right: 10px;
    }
  }
}
</style>

<script>
  import Api from 'api'
  export default {
    replace: false,
  	data() {
      return {
        'list': []
      }
    },

    created() {
        this.$http.get(Api.news).then((res) => {
          this.list = res.data.results
        })
    }
  }
</script>
