<template>
  <p class="tip">更多精彩课程抢先知道，关注我们！</p>
  <div class="block-share">
        <a href="http://weibo.com/u/5149707292" target="_blank">
          <dl>
            <dt>
              <img src="http://storage.xuetangx.com/public_assets/xuetangx/images/e8481a2d0a7cdf937cbffa9c130693c8.weibo.png">
            </dt>
            <dd>
              <h6>微博</h6>
              <p>@学堂在线</p>
            </dd>
          </dl>
        </a>
        <dl>
          <dt>
            <img src="http://storage.xuetangx.com/public_assets/xuetangx/images/263bfbfc1948bd83bb49f07522ce4474.weixin.png">
          </dt>
          <dd>
            <h6>微信</h6>
            <p>xuetangX</p>
          </dd>
          <dd class="popup">
            <img src="http://storage.xuetangx.com/public_assets/xuetangx/images/847a25ca6c14df9d13245ffe93c85bd4.guanzhu_wx.jpg">
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="http://storage.xuetangx.com/public_assets/xuetangx/images/c1b7c013e9d95ee76d7211ded9ef4076.qq.png">
          </dt>
          <dd>
            <h6>咨询QQ</h6>
            <p>2726263557</p>
          </dd>
        </dl>
</div>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

.block-share{
  width: 760px;
  margin:0 auto;
  padding-bottom: 100px;
  overflow: hidden;
}

.tip{
    color:$dark;
    font-size:$font-large;
    text-align:center;
    margin:88px 0 40px;
}

dl,a{
  float: left;
  width: 74px;
  text-align:center;
  margin-right: 240px;
  font-size:$font-normal;
  color:$dark;
  position: relative;

  &:hover{
    .popup{
      opacity:1;
      transition: opacity 1s ease-in-out;
    }
  }

  &:nth-child(2){
    cursor:pointer;
  }

  .popup{
    position: absolute;
    left:100px;
    top:-9px;
    opacity:0;

    img{
      width: 150px;
      height:150px;
    }
  }

  h6{
    font-weight: normal;
    margin:5px 0;
    font-size:$font-normal;
  }

  &:last-child{
    margin-right: 0;
  }
}
</style>

<script>
  export default {
    replace: false,
  	data() {
      return {
      }
    }
  }
</script>
