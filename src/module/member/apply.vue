<template>
<h1 class="page-title">中学\高校学校申请加入中国大学先修课程会员学校</h1>
<section>
  <p>下载申请信息表，填写完成后发送到指定邮箱（见下方）</p>
  <a href="http://storage.xuetangx.com/public_assets/xuetangx/moocap/doc/apply.docx" target="_blank" download="中国慕课大学先修课（MOOCAP）理事会中学会员单位申请表.docx">下载申请信息表</a>
  <p>注意事项:</p>
  <ol>
    <li>填写完成后请发送至:office@moocap.org.cn</li>
    <li>MOOCAP理事会审核后会尽快与申请单位联系，告知结果。</li>
    <li>MOOCAP理事会联系方式：黄老师，010-62785329</li>
  </ol>
</section>
</template>

<style lang="sass" scoped>
  @import "style/varibles";
  @import "style/mixin";

  section{
    background: #fff;
    padding:30px 60px;
  }

  a{
    color: $main-color;
    font-size:$font-middle;
    text-decoration: underline;
    margin:36px 0 60px;
    display: block;
  }

  p{
    line-height: 1.8;
    color:$dark;
    font-size: $font-normal;
  }

  ol{
    list-style-position:inside;
    font-size: $font-normal;

    li{
      margin: 5px 0;
    }
  }
</style>

<script>
  import Api from 'api'
  export default {
    replace: false,
  	data() {
      return {
      }
    }
  }
</script>
