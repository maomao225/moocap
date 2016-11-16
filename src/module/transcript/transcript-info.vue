<template>
  <section>
    <step-bar progress="2"></step-bar>
    <div class="content">
      <validator name="validation">
        <form novalidate>
          <div class="form-line">
            <span class="form-label">省份 / 城市</span>
            <div class="form-item">
              <select  placeholder="请选择所在省份" v-model="province_id" name="province" v-validate:province=['required']>
                <option value="">请选择所属省份</option>
                <option v-for="item in provices" value={{item.id}}>{{item.name}}</option>
              </select>
              <select  placeholder="请选择所属城市" v-model="params.city_id" name="city" v-validate:city=['required']>
                <option value="">请选择所属城市</option>
                <option v-for="item in cities" v-if="province_id == item.province" value={{item.id}}>{{item.name}}</option>
              </select>
            </div>
          </div>

          <div class="form-line">
            <span class="form-label">详细地址</span>
            <div class="form-item">
              <input type="text" placeholder="请填写" v-validate:address=['required'] v-model="params.address" name="address">
              <span class="tip" v-if="$validation.address && $validation.address.dirty && $validation.address.invalid">地址不能为空</span>
            </div>
          </div>

          <div class="form-line">
            <span class="form-label">邮政编码</span>
            <div class="form-item">
              <input type="text" placeholder="请填写" v-validate:postalcode=['required'] v-model="params.postalcode" name="postalcode">
              <span class="tip" v-if="$validation.postalcode && $validation.postalcode.dirty && $validation.postalcode.invalid">邮政编码不能为空</span>
            </div>
          </div>

          <div class="form-line">
            <span class="form-label">收件人姓名</span>
            <div class="form-item">
              <input type="text" placeholder="请填写" v-validate:name=['required'] v-model="params.name" name="name">
              <span class="tip" v-if="$validation.name && $validation.name.dirty && $validation.name.invalid">收件人姓名不能为空</span>
            </div>
          </div>

          <div class="form-line">
            <span class="form-label">收件人手机号</span>
            <div class="form-item">
              <input type="text" placeholder="请填写" v-validate:phonenumber=['required','phone'] v-model="params.phonenumber" name="phonenumber">
              <span class="tip" v-if="$validation.phonenumber && $validation.phonenumber.dirty && $validation.phonenumber.invalid">{{params.phone==""?"手机号不能为空":"手机号格式不正确"}}</span>
            </div>
          </div>

          <input type="button" :class="{submit:true}" v-on:click="submit()" value="下一步" :disabled="!$validation.valid" />
        </form>
      </validator>
    </div>
  </div>
</section>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

$itemHeight:33px;
$itemWidth:350px;

section {
  background: $white;
  margin: 40px 0;
  border: 1px solid $border-color;
}

.content{
  padding: 20px 60px 40px;
}

.submit{
  @include button;
  margin:15px auto;
  width: 180px;
  display: block;
}

.form-item{
  overflow: hidden;
  font-size:$font-normal;
  color:$dark;
  margin-bottom: 30px;

  .btncode, .button {
    display:inline-block;
    width: 110px;
      text-align: center;
      background: #fff;
      border: 1px solid #693CB8;
      color: #693CB8;
      height:$itemHeight;
      line-height: $itemHeight;
      margin-right: 20px;
      cursor: pointer;
  }

  input[type=text],select{
    height:$itemHeight;
    border:1px solid $table;
    padding:0 10px;
    width: $itemWidth;
    border-radius:0;
    background: transparent;
    outline:none;
    margin-right: 20px;
  }

  input[type=file]{
    margin:8px 0;
  }

  .imgcode{
    cursor:pointer;
    vertical-align:middle;
  }
  .idimg{
    width:73px;
    height:102px;
  }
  select{
    width: $itemWidth + 20;
  }

  label{
    margin-right: 38px;
    margin-left: 2px;
    font-weight: normal;
    vertical-align:middle;
    height:$itemHeight;
    line-height: $itemHeight;

    input{
      margin-right: 8px;
    }

    input[type=text]{
      width: 130px;
    }
  }

  button{
    display: inline-block;
    width: 110px;
    text-align: center;
    background: $white;
    border:1px solid $main-color;
    color:$main-color;
    height:$itemHeight;
    margin-right: 20px;
  }

  .des{
    color:$light;
    font-size:$font-small;
    margin-top: 20px;
    line-height: 1.5;

    dt{
      float: right;
      margin-left: 30px;
    }
    dd{
      overflow: hidden;
    }
    ol{
      list-style-position:inside;
    }
    p{
      margin:0;
      padding:0;
    }
  }
}

.form-label{
  float: left;
  text-align:right;
  margin-right: 32px;
  font-size:$font-normal;
  color:$dark;
  width: 120px;
  height: $itemHeight;
  line-height: $itemHeight;

  i{
    color:#D0021B;
    vertical-align:middle;
    font-size:16px;
  }
}

.tip{
  color: $danger;
  font-size: $font-small;
  margin-left: 10px;
  height:$itemHeight;
  line-height: $itemHeight;
}

input[type=button]:disabled {
  background-color: #ccc!important;
  cursor:not-allowed!important;
}
</style>

<script>
  import StepBar from './step-bar.vue'
  import vars from 'vars'
  import Api from 'api'

  export default {
    replace: false,
    data() {
      return {
        matchExamCity: "",
        matchProvince: "",
        provices:[],
        cities:[],
        province_id:'',
        params : {
          name:'',
          city_id:'',
          phonenumber:'',
          address:'',
          postalcode:''
        }
      }
    },
    methods: {
      submit(){
        const order_number = this.$route.params.order_number
        this.$http.post(Api.address(order_number),this.params).then(function(res) {
            this.$route.router.go('/transcript/step3/' + order_number)
          },function(response) {
            if(response.data.message) {
              alert(response.data.message)  
            }
          })
      }
    },
    created(){
      let params = {limit:100000}

      //获取省份
      this.$http.get(Api.provices,params).then(function(res) {
         this.provices = res.data.results
      }),
      //获取城市
      this.$http.get(Api.cities,params).then(function(res) {
        this.cities = res.data.results
      })
    },
    components:{
      StepBar
    }
  }
</script>