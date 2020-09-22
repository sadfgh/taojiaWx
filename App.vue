<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "./common/css/iconfont.css";
	/*每个页面公共css */
	
	/*自定义样式*/
	/* #ifdef H5 */
	uni-checkbox .uni-checkbox-input {
	  border-radius: 50% !important;
	  color: #ffffff !important;
	}
	
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
	  border: none !important;
	  background: #3d7eff;
		border-color: #3d7eff;
	}
	
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
		width: 20rpx;
		height: 20rpx;
		line-height: 20rpx;
		text-align: center;
		font-size: 18rpx;
		color: #fff;
		background: transparent;
		transform: translate(-70%, -50%) scale(1);
		-webkit-transform: translate(-70%, -50%) scale(1);
	}
	
	/* #endif */
	/* 微信样式 */
	/* #ifdef APP-PLUS ||MP-WEIXIN */
	checkbox .wx-checkbox-input {
	  border-radius: 50% !important;
	  color: #ffffff !important;
	}
	
	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
	  color: #fff;
	  /* background: #3d7eff; */
	  background: #F7962F;
	}
	
	.wx-checkbox-input.wx-checkbox-input-checked {
	  border: none !important;
	}
	
	/* #endif */
	
	
</style>
