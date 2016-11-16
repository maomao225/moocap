<template>
<div class="block-instructions">
	<h1 class="page-title">考试有关事项通知</h1>
	<div class="content">
	{{{content}}}
	</div>
	<div class="offset-holder"></div>
	<div class="float-bar">
		<a href="#!/step1" target="_blank" class="submit">我要报名考试</a>
	</div>
</div>
</template>

<style lang="sass">
@import "style/varibles";
@import "style/mixin";

.block-instructions{
	table,td,th{
        border: 1px solid $light;
    }

    table{
        width:100%;
    }

	.offset-holder{
		height:76px;
		margin-top: 20px;
	}
	.content{
		background: $white;
		padding:27px 54px;
		min-height:500px;
	}

	.float-bar{
		position:fixed;
		padding:15px 0;
		width: 100%;
		background: rgba(255,255,255,0.5);
		left:0;
		bottom:0;
		text-align: center;
		&.static{
			position: absolute;
			bottom:auto;
			background: transparent;
		}
		.submit{
			@include button;
		}
	}
}

</style>

<script>
  import Api from 'api'

  /**
   * 滚动条事件句柄
   * @description	调整floatbar的位置
   */
  function scrollHandler(){
  	var $holder = $('.offset-holder'),
		$bar = $('.float-bar'),
		height = $bar.height(),
		offset = $bar.offset().top + height,
		holderOffset = $holder.offset().top,
		scrollTop = $('body').scrollTop()

	if( offset > holderOffset ){
		$bar.addClass('static').css('top',holderOffset)
	}

	if( scrollTop + $(window).height() - height - 20 < holderOffset ){
		$bar.removeClass('static').removeAttr("style")
	}
  }

  export default {
    replace: false,
  	data() {
      return {
      	content: ''
      }
    },

    created() {
    	this.$http.get(Api.examinfos).then((res) => {
          this.content = res.data.results[0].content
        })
    },

    ready() {
    	$(document).on('scroll',scrollHandler)
    },

    beforeDestroy() {
    	$(document).off('scroll',scrollHandler)
    }
  }
</script>
