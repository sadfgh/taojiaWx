<template>
	<view class="portrait">
		<swiper circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="width: 100%;height: 100%; border-radius: 16rpx;">
			<swiper-item v-for="(item , index) in swiperList" :key="index">
				<view class="swiper-item">{{item}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				swiperList:[1,2,3,4,5]
			}
		}
	}
</script>

<style scoped lang="scss">
	.portrait{
		z-index: 999;
		width: 100%;
		height: 280rpx;
		border-radius: 16rpx;
		margin-top: 20rpx;
	}
	.swiper-item{
		width: 710rpx;
		height: 100%;
		margin: 0 auto;
		background-color: #007AFF; 
		border-radius: 16rpx;
		font-size: 60px;
		text-align: center;
	}
	
</style>
