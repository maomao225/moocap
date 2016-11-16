<template>
  <section>
  	<step-bar progress="1"></step-bar>
    <div class="content">
      <div class="pannel">
        <hgroup>
          <h2>2016年MOOCAP统一考试</h2>
          <h1>成 绩 单</h1>
        </hgroup>

        <table>
          <tr>
            <td>姓名：</td>
            <td>{{data.user_name}}</td>
          </tr>
          <tr>
            <td>证件类型：</td>
            <td>{{data.identity_type}}</td>
          </tr>
          <tr>
            <td>证件号：</td>
            <td>{{data.user_identity}}</td>
          </tr>
          <tr>
            <td>准考证号：</td>
            <td>{{data.exam_card_num}}</td>
          </tr>
          <tr>
            <td>考试科目：</td>
            <td>{{data.exam_name}}</td>
          </tr>
          <tr>
            <td>成绩：</td>
            <td>{{data.exam_score}}</td>
          </tr>
        </table>

      </div>

      <footer>
        <button v-link="{path:'/transcript/step2/'+order_number}">下一步</button>
      </footer>
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
  text-align: center;
}

.pannel{
  border:1px solid $light;
  padding: 30px 100px;
  margin:0 auto;
  color:#000;
  display: inline-block;

  h1{
    font-size:32px;
    font-weight: normal;
  }

  h2{
    font-size:$font-large;
    font-weight: normal;
  }
}

table{
  width: 260px;
  color:$dark;
  font-size:$font-normal;
  margin:30px 0;

  td{
    width: 50%;
    text-align: left;
    padding:5px;

    &:nth-child(odd){
      text-align: right;
    }
  }
}

button{
  margin-top: 30px;
  color:$white;
  width: 180px;
  text-align: center;
  background: $main-color;
  white-space:nowrap;
  border:0;
  outline:none;
  clear:both;
  height:50px;
  line-height: 50px;
  font-size:$font-big;
}
</style>

<script>
  import StepBar from './step-bar.vue'
  import Api from 'api'
  import vars from 'vars'

  export default {
    replace: false,
  	data() {
      return {
        order_number: '',
        data: {},
        vars
      }
    },
    components:{
    	StepBar
    },

    created(){
      this.$http.post(Api.scoreApply,{score_id:this.$route.params.id}).then((res) => {
        this.data = res.data
        this.order_number = res.data.order_number
      })
    }
  }
</script>
