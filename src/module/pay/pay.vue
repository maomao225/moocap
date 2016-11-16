<template>
  <h6>
    <span>支付金额：</span>
    <em>&yen;{{data.total|priceformat}}</em>
    <span v-if="data.reducted" class="more-info"><del>&yen;{{data.original_price|priceformat}}</del>（您已通过该门课程的线上考核标准并拿到证书，可以享受报名费减免优惠）</span>
  </h6>
  <p class="des"><span>请您在30分钟内完成支付，否则订单将自动取消</span>
  <template v-if="data.status == 'paying'">
    <em class="countdown" >{{countdown}}</em>
  </template>
  </p>
  <bank-list :data.sync="params"></bank-list>
  <p class="error_text">{{errorText}}</p>
  <button @click="pay">去付款</button>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

h6{
  color:$dark;
  font-size:$font-middle;
  margin-top:30px;

  span{
    vertical-align:middle;
  }  

  em{
    color:$important;
    font-size: $font-large;
    vertical-align:middle;
    font-style:normal;
    font-weight: bold;
    margin-left: 10px;
  }

  .more-info{
    color: #999;
    font-size:12px;

    del{
      margin:0 10px;
      font-size:16px;
    }
  }
}

.des{
  font-size:$font-small;
  color:$light;
  margin:20px 0 30px;
}
.error_text{
  text-align: center;
  color:#f00;
  padding-top:50px;
}
.countdown{
  color:$main-color;
  font-style:normal;
  margin-left: 20px;
  background: url(http://storage.xuetangx.com/public_assets/xuetangx/images/0f046eeda40cad4627aec5707b6261fb.time.png) no-repeat left center;
  padding:2px 18px 0;

}

label{
  color:$dark;
  font-size:$font-normal;
  margin-top: 30px;
  margin-right: 50px;
  display: inline-block;

  span{
    margin-left: 10px;
  }
}

button{
  width: 180px;
  text-align: center;
  color:$white;
  display: block;
  border:0;
  font-size:$font-big;
  line-height: 1;
  padding:16px 0;
  margin: 10px auto 0;
  background: $main-color;
}
</style>

<script>
  import BankList from 'module/bank/bank.vue'
  import Api from 'api'
  import {splitSecond, pageTo} from 'utils'

  export default {
    replace: false,
  	data() {
      return {
        countDown:{
        },
        errorText:'',
        data:{},
        params: {
          order_number:'',
          cyber_bank:''
        }
      }
    },
    methods: {
      pay(){
        this.$http.post(Api.payment,this.params).then((res) => {
          location.href = res.data.pay_url;
        },(res) => {
          this.errorText = '支付提交失败，请刷新后重新提交支付！';
        })
      },
      countDownManage(){
        let count = setInterval(()=>{
          let carry = this.countDown.countSecond <= 0
          let lastMinute = this.countDown.countMinute <= 0

          if( carry && lastMinute){
            clearInterval(count)
            this.$route.router.go('/expire');
          }else{
            this.countDown.countMinute = carry ? --this.countDown.countMinute : this.countDown.countMinute
            this.countDown.countSecond = carry && this.countDown.countMinute !== 0 ? 60 : --this.countDown.countSecond
          }
        }, 1000)
      }
    },
    computed: {
      countdown: function () {
        return this.countDown.countDay + '天' + this.countDown.countHour + '时' + this.countDown.countMinute + '分' + this.countDown.countSecond + '秒'
      }
    },
    components:{
      BankList
    },
    created(){
      let pathExpire = '/expire'

      // 非exam的支付页超时跳转不同
      if(this.$route.type !== 'exam'){
        pathExpire = '/' +  this.$route.type + pathExpire
      }

      this.$http.get(Api.order+this.$route.params.id).then((res) => {
        this.data = res.data
        this.params.order_number = res.data.order_number
        this.countDown = splitSecond(res.data.remain_seconds)
        this.params.cyber_bank = res.data.cyber_bank
        if(this.data.expired){
          this.$route.router.go(pathExpire)
        }
        this.countDownManage();
      },(res) => {
        if(res.data.error_code === 34100){
          pageTo('mycenter', 'myexam');
        }else if(res.data.error_code === 34300){
          this.$route.router.go(pathExpire)
        }else if(res.data.error_code === 34200 || res.data.error_code === 34400 || res.data.error_code === 34500){
          pageTo(404)
        }else if(res.data.error_code === 20006){
          pageTo(this.$route.type, 'step1', true);
        }
      })
    }
  }
</script>
