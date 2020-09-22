<template>
	<view class="">
		<view :class="{'share-box': shareState}" @click="handleHiddenShare">
		</view>
		 <view class="share-item" :class="{'share-show': shareState}">
			 <!-- <slot></slot> -->
			<view class="bottom-box">
				 <slot></slot>
				<!-- <view class="content-box button-model">
					<view class="flex-layout">
						<button class="button-style">取消</button>
					</view>
					<view class="flex-layout">
						<button @click="handleHiddenShare" class="button-style" style="background: #FF5809;color: #fff;font-size: 32rpx;">确定</button>
					</view>
				 </view> -->
			 </view>
		 </view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				shareState:false,
			}
		},
		// props:[shareState],
		methods:{
			handleHiddenShare(){
				console.log("------------")
				this.shareState = false
				console.log(this.shareState)
			},
			handleShowShare(){
				this.shareState = true
			}
			
		}
	}
	
</script>

<style lang="scss" scoped>
	// .content-box{
	// 	display: flex;
	// }
	
	
	.share-box {
	        width: 100%;
	        height: 100%;
	        position: fixed;
	        top: 0rpx; left: 0rpx; bottom: 0rpx; right: 0rpx;
	        background-color: rgba(0, 0, 0, 0.4);
	        transition: .3s;
	        z-index: 999;
	    }
	
	
	// 进入分享动画
	.share-show {
	    transition: all 0.3s ease;
	    transform: translateY(0%) !important;
	}
	// 离开分享动画
	.share-item {
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: auto;
	    background-color: #FFFFFF;
	    transition: all 0.3s ease;
	    transform: translateY(100%);
	    z-index: 1999;
	}
	
	.bottom-box{
		width: 100%;
		height: 530rpx;
		position: relative;
		// padding: 0 20rpx;
	}
	
	// .button-model{
	// 	width: 100%;
	// 	position: absolute;
	// 	bottom: 20rpx;
	// }
	
	// .flex-layout{
	// 	flex: 1;
	// 	// text-align: center;
	// }
	
	// .button-style{
	// 	width: 85%;
	// 	border-radius: 50rpx;
	// 	text-align: center;
	// }
	
	// .button-style::after{
	// 	border:none;
	// }
</style>
