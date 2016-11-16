<template>
  <section>
  	<step-bar progress="2"></step-bar>
    <div class="content">
      <archive></archive>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

section {
  background: $white;
  margin: 40px 0;
  border: 1px solid $border-color;
}

.content{
  padding: 20px 60px 40px;
}
</style>

<script>
  import StepBar from './step-bar.vue'
  import Archive from 'module/archive/edit.vue'

  export default {
    replace: false,
  	data() {
      return {}
    },
    components:{
    	StepBar,
      Archive
    }
  }
</script>
