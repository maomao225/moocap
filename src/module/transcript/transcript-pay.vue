<template>
  <section>
    <step-bar progress="3"></step-bar>
    <div class="content">
      <pay></pay>
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
  import Pay from 'module/pay/pay.vue'

  export default {
    replace: false,
    data() {
    },
    components:{
      StepBar,
      Pay
    },
    created(){
    }
  }
</script>
