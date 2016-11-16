<template>
  <modal :show.sync="show">
  <div slot="modal-header" class="modal-header" v-if="title">
    <h4 class="modal-title">{{title}}</h4>
  </div>
  <div slot="modal-body" class="modal-body" v-if="content">{{content}}</div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click="close" v-if="typeof confirm === 'function'">{{canceltext || '关闭'}}</button>
    <button type="button" class="btn btn-primary" @click="do" v-if="typeof confirm === 'function'">{{confirmtext || '确认'}}</button>
    <button type="button" class="btn btn-primary" @click="close" v-if="typeof confirm !== 'function'">{{confirmtext || '确认'}}</button>
  </div>
</modal>
</template>

<style lang="sass">
@import "style/varibles";
@import "style/mixin";

</style>

<script>
  import Api from 'api'
  import {modal} from 'vue-strap'

  export default {
    replace: true,

    // [是否显示， 标题， 内容， 确认回调函数， 确认按钮文案， 取消按钮文案]
    props:['show','title','content','confirm','confirmtext','canceltext'],
  	data() {
      return {
      }
    },
    methods: {

      // 关闭重设参数
      close(){
        this.show = false
        this.title = ''
        this.content = ''
        this.confirmtext = '确认'
        this.canceltext = '取消'
      },

      // 确认
      do(){
        this.confirm(this.close)
      }
    },
    components:{
      modal
    }
  }
</script>
