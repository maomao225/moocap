<template>
  <h6>请选择支付方式</h6>
  <div class="switch-head">
    <label v-for="item in payType"><input type="radio" name="paytype" v-model="currentPayType" value="{{$index}}"><span>{{item}}</span></label>
  </div>
  <div class="switch-body" v-if="+currentPayType === 0">
  </div>
  <div class="switch-body" v-else>
    <label v-for="item in lists"><input type="radio" value="{{item.cyber}}" name="bank" v-model="data.cyber_bank"><img :src="item.url"></label>
  </div>
</template>
  
<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

label{
  color:$dark;
  font-size:$font-normal;
  margin-top: 30px;
  margin-right: 50px;
  display: inline-block;
  width:149px;

  span{
    margin-left: 10px;
  }
}
.switch-body{
  margin-right: -100px;

  label{
    img{
      vertical-align:middle;
      margin-left: 10px;
    }

    input{
      vertical-align:middle;
    }
  }
}


</style>

<script>
  export default {
    replace: false,
    props:['data'],
    data() {
      return {
        // tab
        payType: ['支付宝','网上银行'],

        // 当前选中的tab
        currentPayType: 0,

        // 银行列表
        lists:[
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_1.jpg",
            cyber:"ICBCB2C"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_2.jpg",
            cyber:"ABC"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_3.jpg",
            cyber:"CCB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_4.jpg",
            cyber:"SPDB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_5.jpg",
            cyber:"BOCB2C"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_6.jpg",
            cyber:"CMB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_7.jpg",
            cyber:"CIB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_8.jpg",
            cyber:"GDB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_9.jpg",
            cyber:"CMBC"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_10.jpg",
            cyber:"HZCBB2C"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_11.jpg",
            cyber:"CEB-DEBIT"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_12.jpg",
            cyber:"SHBANK"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_13.jpg",
            cyber:"NBBANK"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_14.jpg",
            cyber:"SPABANK"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_15.jpg",
            cyber:"BJRCB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_16.jpg",
            cyber:"FDB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_17.jpg",
            cyber:"POSTGC"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_18.jpg",
            cyber:"COMM"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_19.jpg",
            cyber:"BJBANK"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_20.jpg",
            cyber:"SHRCB"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_21.jpg",
            cyber:"WZCBB2C-DEBIT"
          },
          {
            url: "http://storage.xuetangx.com/public_assets/xuetangx/images/bank/bank_22.jpg",
            cyber:"CITIC-DEBIT"
          }
        ]
      }
    },
    
    watch: {
      // 银行 => tab索引 更新
      'data.cyber_bank' : function(value) {
        this.currentPayType = !value ? 0 : 1;
      },
      'currentPayType' : function(value) {
        if(this.currentPayType === 0){
          data.cyber_bank = '';
        }
      }
    }
  }
</script>
