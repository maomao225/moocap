<template>
  <footer>
    <div class="copyright">
        <div class="text">
            <p>Copyright 2013-2016 北京慕华信息科技有限公司</p>
            <p><a href="http://www.miibeian.gov.cn/" title="京ICP备14019655号" target="_blank">京ICP证140571号</a> | 京公网安备 11010802017721</p>
        </div>
        <div class="edx_logo">
            <a href="http://openedx.org" target="_blank"><img src="http://storage.xuetangx.com/public_assets/xuetangx/images/d62e524a6727ae1226662561f48c20c9.edx_logo.png"></a>
        </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
  @import "style/varibles";

  footer {
      background: $dark;
      margin-top: 40px;
      .text{
          float: left;
      }
      .copyright {
          width: $container;
          margin:0 auto;
        background: $dark;
        height: 140px;
          color: $light;
          font-size: $font-normal;
          line-height: 30px;
          padding: 45px 15px 0;
          box-sizing: border-box;
          a {
              color: $light;
          }
      }
      .edx_logo {
        margin-top: 10px;
          float: right;
      }
  }
</style>

<script>
  export default {
    replace: true,
  	data() {
      return {
      }
    }
  }
</script>
