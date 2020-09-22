<template>
	<view class="page">
		<view class="back">
			
		</view>
		
		<view class="class">
			<view class="portrait">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="width: 100%;height: 100%; border-radius: 16rpx;">
					<swiper-item>
						<view class="swiper-item" style="width: 100%;height: 100%; background-color: #007AFF;border-radius: 16rpx;">1</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item" style=" width: 100%;height: 100%; background-color: #2C405A;border-radius: 16rpx;">2</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item" style="width: 100%;height: 100%; background-color: #4CD964;border-radius: 16rpx;">3</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="content">
				<scroll-view scroll-y="true"  class="left-aside" style="height: 75vh" >
					<view @click="clickCurrent(item , index)" :class="{'color':index === currentId,'item-style':true}"  v-for="(item , index) in categoryData" :key="index">
						{{item.leftName}}
						{{currentId}}
					</view>
				</scroll-view>
				<scroll-view  :scroll-top="tabScrollTop" scroll-with-animation  @scroll="getScroll"  scroll-y="true"  class="right-aside" style="height:75vh;">
					<view class="commodity-content" v-for="(item , index) in categoryData" :key="index" :id="'main-'+item.index">
						<view  class="ad-img">
							{{item.extendImg}}
						</view>
						<!-- <view class="classify-name">
							{{item.type}}
						</view> -->
						<view class="pro-classify" v-for="(sumItem , index) in item.kindData" :key="index">
							<view class="pro-title">
								{{sumItem.kindName}}
							</view>
							<view class="pro-list" v-for="(chiledItem , index) in sumItem.productData" :key="index">
								<view class="pro-img">
									{{chiledItem.productImg}}
								</view>
								<view class="pro-name">
									{{chiledItem.productName}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				
			</view>
		</view>
		
		
		
			
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabScrollTop:0,
				sizeCalcState:false,
				getTop:[],
				leftList:[],
				arr:[],
				toView:'',
				currentId:0,
				categoryData:[
					{
						leftName:"推荐",
						extendImg:"xxxxxxx.png",
						extendUrl:"/xx/x/xxx/x",
						index:0,
						kindData:[
							{
								kindName:"猜你喜欢",
								index:0,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							},
							{
								kindName:"新品推荐",
								index:1,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							}
							
							
						]
					},
					{
						leftName:"新品",
						extendImg:"xxxxxxx.png",
						extendUrl:"/xx/x/xxx/x",
						index:1,
						kindData:[
							{
								kindName:"手机",
								index:0,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							},
							{
								kindName:"智能",
								index:1,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							},
							{
								kindName:"智能",
								index:1,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							}
							
							
						]
					},
					
					{
						leftName:"众筹",
						extendImg:"xxxxxxx.png",
						extendUrl:"/xx/x/xxx/x",
						index:2,
						kindData:[
							{
								kindName:"众筹好物",
								index:0,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
								]
							},
							{
								kindName:"新品推荐",
								index:1,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							}
							
							
						]
					},
					
					{
						leftName:"推荐",
						extendImg:"xxxxxxx.png",
						extendUrl:"/xx/x/xxx/x",
						index:3,
						kindData:[
							{
								kindName:"猜你喜欢",
								index:0,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							},
							{
								kindName:"新品推荐",
								index:1,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							}
							
							
						]
					},
					
					{
						leftName:"推荐",
						extendImg:"xxxxxxx.png",
						extendUrl:"/xx/x/xxx/x",
						index:4,
						kindData:[
							{
								kindName:"猜你喜欢",
								index:0,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							},
							{
								kindName:"新品推荐",
								index:1,
								productData:[
									{
										productName:"新风机",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:0
									},
									{
										productName:"Note 8 Pro",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:1
									},
									{
										productName:"RedmiBook 14",
										productImg:"xxxxx.jpg",
										productUrl:"xxxxx/xx/xxx/xxxx",
										index:2
									},
								]
							}
							
							
						]
					},
					
					
				],
				
				temData:[],
				
			
			}
		},
		methods:{
			// scrolltolower(){
			// 	this.currentId = this.categoryData.length-1
			// },
			clickCurrent(item , index){
				if (!this.sizeCalcState) {
				    this.calcSize();
				}
				this.currentId = index;
				// let _index = this.categoryData.findIndex(citem => citem.index === item.index);
				console.log(index)
				    this.tabScrollTop = this.categoryData[index].top;
					console.log(this.tabScrollTop)
			},
			
			getScroll(e){
				if (!this.sizeCalcState) {
					console.log("进这里了？")
				    this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.categoryData.filter(item => item.top-20 < scrollTop).reverse();
				console.log(tabs)
				if (tabs.length > 0) {
				    this.categoryData.forEach((item, index) => {
				        if (item.index === tabs[0].index) this.currentId = index
				    });
					console.log(this.categoryData[this.categoryData.length-2].top)
					console.log(scrollTop)
				   if(this.categoryData[this.categoryData.length-1].top>= scrollTop&&this.categoryData[this.categoryData.length-2].top+150<= scrollTop){
				   	this.currentId = this.categoryData.length-1
				   }
				}
			},
			calcSize() {
				let h = 0;
				console.log(this.categoryData)
				this.categoryData.forEach(item => {
				    let view = uni.createSelectorQuery().select("#main-" + item.index);
				    view.fields({
				        size: true
				    }, data => {
				        item.top = h;
				        h += data.height;
				        item.bottom = h;
				    }).exec();
				});
				console.log(this.categoryData)
				this.sizeCalcState = true;
			}
			
		},
		mounted() {
		},
		created() {
			const timeId = setTimeout(() => {
			    this.calcSize();
			    clearTimeout(timeId);
			}, 1000);
		}
	}
</script>

<style lang="scss" scoped>
.page{
		width: 100%;
		height: 100vh;
		// overflow: hidden;
		background-color: #f7f7f7;
		position: relative;
		
	}
.back{
	position: absolute;
	top: -500rpx;
	left: -222rpx;
	width: 1200rpx;
	height: 800rpx;
	border-radius: 50%;
	background-color: #e95504;

}

.class{
	position: absolute;
	left: 20rpx;
	width: 710rpx;
	// height: 886rpx;
	// overflow: hidden;
	// margin: 0 auto;
	// height: 100vh;
	// overflow:hidden
}

.portrait{
	z-index: 999;
	width: 100%;
	height: 280rpx;
	border-radius: 16rpx;
	margin-top: 20rpx;
	// background-color: #fff;
}
	
	
	
	
.content{
		
		display: flex;
		// height: 100vh;
		margin-top: 20rpx;
		// height: 886rpx;
		// overflow: hidden;
	}
	.left-aside{
		flex-shrink: 0;
		width: 200rpx;
		// height: 100%;
		// height: 886rpx;
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
		height: 100%;
		// background-color: #4CD964;
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
