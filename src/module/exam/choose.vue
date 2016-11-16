<template>
  <section>
  	<step-bar progress="1"></step-bar>
    <div class="content">
      <table>
        <tr>
          <th width="20%">考试科目</th>
          <th>考试时间</th>
          <th width="15%">报名费</th>
          <th width="15%">报名状态</th>
          <th width="15%" style="text-indent:21px;">操作</th>
        </tr>
        <tr v-for="item in list">
          <td>{{item.name}}</td>
          <td>{{item.exam_start|formatDateByIso}} 至 {{item.exam_end|formatDateByIso}}</td>
          <td v-if="!item.reducted">{{item.fee}} 元</td>
          <td v-if="item.reducted">{{item.fee}} 元 <mark>(优惠)</mark><aside>您已通过该门课程的线上考核标准并拿到证书，可以享受报名费减免优惠</aside></td>
          <td>{{item.user_status === 'enrolled' ? '已报名' : item.exam_status === 'can_makeup_enroll'? '补报名进行中':'报名进行中' }}</td>
          <td>
            <a v-if="item.user_status==='enrolled'" href="{{vars.mycenter}}#!/myexam" class="link">查看</a>
            <button v-if="item.user_status==='not_enroll'" v-link="{name:'info',params:{id:item.id}}">{{item.exam_status === 'can_makeup_enroll' ? '补报名':'报名'}}</button>
            <button v-if="item.user_status==='unpay'" v-link="{name:'pay',params:{id:item.order_number}}">去支付</button>
          </td>
        </tr>
      </table>
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

table{
  width: 100%;
  color:$dark;
  font-size:$font-normal;

  tr{
    &:nth-child(odd){
      background: $table;
    }
  } 

  th{
    text-align:left;
    padding:13px 20px;
  }

  td{
    padding: 20px;
    text-align:left;
    position: relative;

    &:hover{
      aside{
        display: block;
      }
    }

    aside{
      position: absolute;
      font-size:12px;
      color:#333;
      width: 263px;
      padding:13px;
      border:1px solid #8040ff;
      top:-56px;
      left:-20px;
      background: #fff;
      z-index:99;
      display: none;

      &:after{
        content: url(//storage.xuetangx.com/public_assets/xuetangx/images/8ca01a17922ec9f7ec620695f4e7f4d2.arc.png);
        display: block;
        width: 13px;
        height:8px;
        position: absolute;
        left:70px;
        bottom:-5px;
      }
    }

    mark{
      color: #fb0009;
      background: none;
      display:inline;
    }

    a{
      @include hover($main-color, $main-color, underline)

      &.link{
        display: inline-block;
        width: 72px;
        text-align: center;
      }
    }

    button{
      color:$main-color;
      width: 72px;
      text-align: center;
      padding:6px 0;
      background: transparent;
      white-space:nowrap;
      border:1px solid $main-color;
    }
  }
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
        list: [],
        vars
      }
    },
    components:{
    	StepBar
    },

    created(){
      this.$http.get(Api.exams).then((res) => {
        this.list = res.data.results
      })
    }
  }
</script>
