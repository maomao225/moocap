<template>
<h1>我的课程</h1>
<ul class="tab">
  <li><a href="javascript:void(0)" :class="{current:status === 'ing'}" @click="setStatus('ing')">正在上课</a></li>
  <li><a href="javascript:void(0)" :class="{current:status === 'post'}" @click="setStatus('post')">已经结课</a></li>
</ul>

<div class="empty" v-if="!list.length && !loading">
    您还没有{{status==='ing' ? '正在上课' : '已经结课'}}的课程
</div>

<div class="common-loading" v-if="loading"></div>

<ul class="content">
  <li class="item" v-for="item in list" v-show="item.enroll_status === status">
    <dl>
      <dt>
        <img :src="item.thumbnail" title="{{item.name}}">
      </dt>
      <dd>
        <h6>{{item.name}}</h6>
        <p>{{item.subtitle}}</p>
        <aside>
          <a href="http://www.xuetangx.com/courses/{{item.id}}/about" target="_blank">{{item.enroll_status === 'ing' ? '继续学习' : '课程详情'}}</a>
        </aside>
      </dd>
    </dl>
  </li>
</ul>
</template>

<style lang="sass" scoped>
@import "style/varibles";
@import "style/mixin";

.empty{
  @include empty;
}

.common-loading{
  width: 100%;
  height:200px;
}

.tab{
  padding:0 0 15px 0;
  overflow: hidden;
  list-style-type:none;

  a{
    float: left;
    margin:0 10px;
    line-height: 1.5;
    font-size:$font-normal;
    color:$light;
    text-decoration:none;

    &.current{
      border-bottom: 4px solid $main-color;
      color:$main-color;
    }
  }
}

.item{
  background: $white;
  padding:15px;
  border:1px solid $border-color;
  margin-bottom: 10px;

  dt{
    float: left;
    position: relative;
    margin-right: 15px;

    img{
      width: 260px;
      height:165px;
    } 
  }

  dd{
    overflow: hidden;
    margin-right: 16px;

    h6{
      font-size:$font-big;
      color:$dark;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    p{
      height:90px;
      font-size:$font-small;
      color:$light;
      line-height: 1.5;
    }

    aside{
      overflow: hidden;

      a{
        float: right;
        color:$white;
        font-size:$font-middle;
        padding:10px 20px;
        background: $main-color;
        border-radius:3px;
        border:0;
        text-decoration:none;
      }
    }
  }

}
</style>

<script>
  import Api from 'api'

  export default {
    replace: false,
    
  	data() {
      return {

        // 状态
        // ing: 正在进行
        // post: 已经结课
        status: 'ing',

        // 加载中状态
        loading: true,

        setStatus : status => this.status = status,

        list: []
      }
    },

    created() {
      this.$http.get(Api.enrollments, {course_status: this.status}).then((res) => {
          this.loading = false
          this.list = res.data.results
        },(res) => {
          this.loading = false
        })
    }
  }
</script>
