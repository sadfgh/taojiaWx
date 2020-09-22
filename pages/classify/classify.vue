<template>
	<view class="page">
		<comSwiper/>
			<view class="content">
				<scroll-view scroll-y="true"  class="left-aside" style="height: 75vh"  scroll-into-view="">
					<view @click="clickCurrent(index)" :class="{'color':index === current,'item-style':true}"  v-for="(item , index) in leftData" :key="index">
						{{item}}
					</view>
				</scroll-view>
			
				<swiper  @change="setCurrent" :current="current" class="right-aside"  :style="'height: '+ scrollH +'px;'" vertical="true">
					<swiper-item class="commodity-content"  v-for="(item , index) in rightData" :key="index">
						<scroll-view  scroll-y="true" scroll-into-view=""  style="height: 75vh;" >
							<view class="" :id="'a'+index">
								<view class="ad-img">
									{{item.adimg}}
								</view>
								<view class="classify-name">
									{{item.type}}
								</view>
								<view class="pro-classify" v-for="(sumItem , index) in item.proList" :key="index">
									<view class="pro-title">
										{{sumItem.proName}}
									</view>
									<view class="pro-list" v-for="(chiledItem , index) in sumItem.proData" :key="index">
										<view class="pro-img">
											{{chiledItem.image}}
										</view>
										<view class="pro-name">
											{{chiledItem.name}}
										</view>
									</view>
								</view>
							</view>
							
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
	
</template>
<script>
	import comSwiper from '../../components/comSwiper/comSwiper.vue'
	export default{
		data(){
			return{
				
				current:0,
				scrollH:700,
				leftData:[],	
				rightData:[]
			}
		},
		components:{
			comSwiper
		},
		methods:{
			clickCurrent(index){
				this.current = index
			},
			setCurrent(e){
				this.current = e.detail.current
			},
		},
		mounted() {
		},
		created() {
			uni.request({
				url:"http://192.168.1.216:8000/text.json",
				success:(res)=>{
						this.leftData = res.data.leftData;
						this.rightData = res.data.rightData;
						console.log(res)
				},
				fail:(res)=>{
					console.log(res)
				}
			})
			
			
			
			
			uni.getSystemInfo({
				success:(res) =>{
					this.scrollH = res.windowHeight 
				}
			})
		}
	}
</script>
<style scoped lang="scss">
	.page{
			width: 100%;
			height: 100vh;
			overflow: hidden;
			background-color: #f7f7f7;
			position: relative;
			
		}
	.content{
		display: flex;
		width: 710rpx;
		// height: 100vh;
		overflow: hidden;
		margin-top: 20rpx;
		position: absolute;
		left: 20rpx;
	}
	.left-aside{
		flex-shrink: 0;
		width: 200rpx;
		height: 100%;
		background-color: #F0AD4E;
		.item-style{
			margin: 40rpx 0;
			text-align: center;
		}
		.color{
			color:#fff;
		}
	}
	.right-aside{
		flex: 1;
	}
	
	.commodity-content{
		width: 100%;
		.ad-img{
			width: 100%;
			height: 150rpx;
			background-color: #C8C7CC;
		}
		.classify-name{
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #4399FC;
			text-align: center;
		}
		.pro-classify{
			margin-top: 50rpx;
			margin-bottom: 20rpx;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.pro-title{
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				background-color: #DD524D;
			}
			.pro-list{
				margin: 1% 1.5%;
				width: 30%;
				height: 200rpx;
				background-color: #DCDFE6;
				.pro-img{
					width: 100%;
					height: 150rpx;
					background-color: #F0AD4E;
					text-align: center;
				}
				.pro-name{
					width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					background-color: #EBEEF5;
					text-align: center;
				}
				
			}
			
		}
		
	}
</style>