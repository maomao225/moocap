<template>

<div class="step-bar">
  <img :src="progresses[progress-1]">
</div>

</template>

<style lang="sass" scoped>
	.step-bar{
    text-align:center;
    margin:20px 0;

    img{
      width: 725px;
    }
  }
</style>

<script>
  export default {
    replace: false,

    // 第几步
    props: ['progress'],
    
  	data() {
      return {
      	'progresses' : [
          'http://storage.xuetangx.com/public_assets/xuetangx/images/c7f95eba253008f4b7eb161af2adf6d3.1.png',
          'http://storage.xuetangx.com/public_assets/xuetangx/images/56f748bf803a5ca9d9f38d6a6ae40a72.2.png',
          'http://storage.xuetangx.com/public_assets/xuetangx/images/49b07ede1ecf317f0c7126e1aa33d6ee.3.png'
      	]
      }
    }
  }
</script>
