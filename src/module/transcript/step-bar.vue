<template>

<div class="step-bar">
  <img :src="progresses[progress-1]">
</div>

</template>

<style lang="sass" scoped>
	.step-bar{
    text-align:center;
    margin:20px 0;
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
          'http://storage.xuetangx.com/public_assets/xuetangx/step2.png/7dd82a6cad376d8628d0e103a11d8a8d.step1.png',
          'http://storage.xuetangx.com/public_assets/xuetangx/images/f24a1711455ac601ee4b68135b2b8617.step2.png',
          'http://storage.xuetangx.com/public_assets/xuetangx/images/c834a9284a68053424ed554820832e1c.step3.png'
      	]
      }
    }
  }
</script>
