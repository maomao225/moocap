<template>
<div class="content">
  <h1>我的考试<a href="{{vars.exam}}#!/step1" class="other">报名其他考试</a></h1>
  <div class="empty" v-if="!list.length">
    您还没有参加任何考试
  </div>
  <ul>
  	<li v-for="item in list" v-if="item.show_exam_status">
      <h3>{{item.exam}}</h3>
      <span class="rside" v-show="item.current_status>=8" >成绩: {{item.score}}分(考试完成)</span>
      <p class="des"><span>参加考试省份：{{item.province}}</span><span>参加考试城市：{{item.city}}</span><span>报名费：{{item.fee}}元</span><em v-if="item.refund_status === 2 || item.refund_status === 3">({{item.refund_status === 2 ? '退款中' : '已退款'}})</em></p>
      <div class="progresses">
        <p :class="{finish: item.current_status > 2, current: item.current_status === 2}"><span>{{item.enroll_start|addtime}}</span><span>至</span><span>{{item.enroll_end|addtime 1}}</span><em>考试报名</em></p>
        <p :class="{finish: item.current_status > 4, current: item.current_status === 4}"><span>{{item.print_card_start|addtime}}</span><span>至</span><span>{{item.print_card_end|addtime 1}}</span><em>打印准考证</em></p>
        <p :class="{finish: item.current_status > 6, current: item.current_status === 6}"><span>{{item.exam_start|formatDateByIso}}</span><span>至</span><span>{{item.exam_end|formatDateByIso}}</span><em>线下考试 </em></p>
        <p :class="{finish: item.current_status > 8, current: item.current_status === 8}"><span>{{item.score_start|addtime}}</span><span>至</span><span>{{item.score_end|addtime 1}}</span><em>查询考试成绩\申请纸质成绩单</em></p>
      </div>
      <aside>
        <a href="javascript:void(0)" class="tip" v-if="item.up_score_status">已将成绩发送给学校</a>
        <a href="javascript:void(0)" class="tip" v-if="item.current_status === 6">不要忘记参加考试哟！</a>
        <a href="javascript:void(0)" @click="upscore(item)" v-if="item.show_up_score_status" style="display:none">将成绩发送给学校</a>
        <a href="{{vars.exam}}#!/step3/{{item.order_number}}" v-if="item.show_pay_status">支付报名费</a>
        <a href="javascript:void(0)" v-if="item.show_print_card_status" @click="openTicket(item.id)">打印准考证</a>
        <a href="javascript:void(0)" v-if="item.refund_status===1" @click="refund(item)">申请退款</a>
        <a href="javascript:void(0)" v-if="item.show_apply_score_certificate_status" @click="transcript(item)">申请纸质成绩单</a>
        <span v-if="item.current_status>=8">
          <a href="{{item.certificate}}" target="_blank" v-if="item.certificate">电子版成绩单</a>
          <a href="{{item.ata_certificate}}" target="_blank" v-if="item.ata_certificate">电子版分析单</a>
        </span>
      </aside>
    </li>
  </ul>
</div>


<modal :show.sync="showTicket">
  <div slot="modal-header" v-if="false">
  </div>
  <div slot="modal-body" class="modal-body">
    <ticket :tid.sync="ticketId"></ticket>
  </div>
  <div slot="modal-footer" v-if="false">
  </div>
</modal>


<dialog :show.sync="dialog.show" :title.sync="dialog.title" :content.sync="dialog.content" :confirm.sync="dialog.callback" :confirmtext.sync="dialog.confirmtext" :canceltext.sync="dialog.canceltext"></dialog>

</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

$examStatusImg:'http://storage.xuetangx.com/public_assets/xuetangx/images/744371d8d2780919bf76d757f7307fa1.arrow.png';

.empty{
  @include empty;
}

.content{
  h1 a{
    float: right;
    border:1px solid $main-color;
    background: transparent;
    color:$main-color;
    font-size:$font-normal;
    padding:11px 16px;
    text-decoration:none;
  }
  ul{
    list-style-type:none;
  }

  li{
    border:1px solid $border-color;
    background: $white;
    padding:15px;
    margin-bottom: 10px;
    position: relative;

    .rside{
      position:absolute;
      right:20px;
      top:14px;
      font-size:$font-normal;
      color:$main-color;
    }

    h3{
      font-weight:normal;
      color:$dark;
      font-size:$font-middle;
      margin-left:5px;
      margin-top:15px;
    }

    .des{
      margin:15px 0 15px 5px;
      color:$light;
      font-size:$font-small;

      span{
        margin-right:15px;
      }

      em{
        color:$danger;
        font-style:normal;
      }
    }

    .progresses{
      margin-left:84px;
      margin-top: 10px;
      font-size:$font-small;

      p{
        padding:4px 0 4px 30px;
        margin-bottom: 12px;
        color:$light;

        &.finish{
          background: url($examStatusImg) no-repeat left top;
          color:$dark;
        }

        &.current{
          background: url($examStatusImg) no-repeat left -20px;
          color:$dark;
        }

        span{
          margin-right: 10px;
          font-style:normal;
        }

        em{
          font-style:normal;
          margin-left: 10px;
        }
      }
    }

    aside{
      overflow:hidden;
      padding: 20px 10px 15px;
      
      a{
        float:right;
        border-radius:3px;
        background:$main-color;
        color:$white;
        font-size:$font-middle;
        padding:11px 18px;
        font-style:normal;
        margin-left: 15px;
        text-decoration:none;

        &.disabled{
          background: $disabled;
          cursor:default;
        }

        &.tip{
          background: none;
          color:$main-color;
          font-size:$font-small;
          padding-right: 0;
          cursor:default;
        }
      }
    } 
  }
}

</style>

<script>
  import Api from 'api'
  import vars from 'vars'
  import {modal} from 'vue-strap'
  import Ticket from 'module/archive/ticket.vue'
  import Dialog from 'module/dialog/dialog.vue'
  import {pageTo} from 'utils'

  export default {
    replace: false,
  	data() {
      return {

        // 确认对话框配置
        dialog:{
          title: '',
          show: false,
          content: '',
          callback: '',
          confirmtext: '确定',
          canceltext: '取消'
        },

        // 准考证弹层控制
        showTicket: false,

        // 准考证id
        ticketId: null,

        // exam列表
        list: [],
        vars
      }
    },
    methods: {

      /**
       * 上报成绩
       * @param  {Object} item 订单对象
       */
      upscore(item){
        this.$http.patch(Api.upscore+item.id +'/').then((res) => {
            item.up_score_status = true
            item.show_up_score_status = false
        })
      },

      /**
       * 申请纸质成绩单
       * @param  {Object} id 订单对象
       */
      transcript(item){
        pageTo('exam', '/transcript/step1/' + item.score_id)
      },

      /**
       * 申请退款
       * @param  {Object} id 订单对象
       */
      refund(item){

        this.dialog.title = '退款申请'
        this.dialog.content = '您是否确定要申请退款？（一旦提交申请将不能撤回）'
        this.dialog.confirmtext = '我要退款'
        this.dialog.canceltext = '还是不退了'
        this.dialog.show = true
        this.dialog.callback = ( close ) => {
          this.$http.patch(Api.refund+item.id +'/').then((res) => {
              item.refund_status = 2
              close()
          })
        }

        
      },

      /**
       * 弹出准考证
       * @param  {Number} id 课程id
       */
      openTicket(id){
        this.ticketId = id
        this.showTicket = true
      }
    },

    created() {
      this.$http.get(Api.myexams).then((res) => {
          this.list = res.data.results
        })
    },
    
    components:{
      modal,
      Ticket,
      Dialog
    }
  }
</script>
