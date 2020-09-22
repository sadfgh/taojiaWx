<template>
	<view class="">
		<view class="banners">
			<swiper circular class="sw-list" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item , index) in banners" :key="index">
					<view class="swiper-item">
						<image :src="item.src" mode="widthFix" style="width: 100%;"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="detail">
			<view class="de-message">
				<view class="price">
					<text class="crrent-price">￥999</text>
					<text class="orginal-price" style="text-decoration:line-through;">￥1299</text>
				</view>
				<view class="de-name">
					小米100
				</view>
				<view class="de-introduce">
					我感觉不舒服，有点难受
				</view>
			</view>
			
			<view class="goods-carts">
				<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniGoodsNav from '../../components/uni-goods-nav/uni-goods-nav.vue'
	export default{
		data(){
			return{
				banners: [{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72cad6b5b7caafc18b2ad93ee17e3024.jpg'
					},
					{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54b60d49bbfe14e4db53efee3e1b0053.jpg'
					},
					{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/121e370dc1d5ccf75673eb9ac7a575a3.jpg'
					},
					{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6678e97a159fff2e90b31573059188e7.jpg'
					},
				
				],
				options: [{
				    icon: 'headphones',
				    text: '客服'
				}, {
				    icon: 'home',
				    text: '主页',
				}, {
				    icon: 'cart',
				    text: '购物车',
				    info: 2
				}],
				buttonGroup: [{
				  text: '加入购物车',
				  backgroundColor: '#ff0000',
				  color: '#fff'
				},
				{
				  text: '立即购买',
				  backgroundColor: '#ffa200',
				  color: '#fff'
				}
				],
				
			}
		},
		components:{
			uniGoodsNav
		}
		
		
	}
</script>

<style scoped lang="scss">
	.detail{
		width: 710rpx;
		margin: 0 auto;
	}
	
	
	.banners{
		width: 100%;
		height: 700rpx;
		background-color: #F7962F;
	}
	.sw-list{
		width: 100%;
		height: 100%;
		.swiper-item{
			width: 100%;
			height: 100%;
		}
		
	}
	
	
	.price{
		margin: 30rpx 0;
		.crrent-price{
			font-size: 45rpx;
			font-weight: 800;
			color: #F24544;
		}
		.orginal-price{
			font-size: 26rpx;
			color: #C0C0C0;
		}
	}
	
	.de-name{
		margin-bottom: 20rpx;
		font-size: 30rpx;
	}
	
	
	
	
	
	
	
	
	
	
	
	.goods-carts {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
		}
</style>
