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
				<scroll-view scroll-y="true" scroll-with-animation class="left-aside" style="height: 75vh" >
					<view :data-id="'a'+index" @click="clickCurrent" :class="{'color':index === current,'item-style':true}"  v-for="(item , index) in categoryData" :key="index">
						{{item.leftName}}
					</view>
				</scroll-view>
				<scroll-view :scroll-into-view="toView" scroll-with-animation  @scroll="getScroll"  scroll-y="true"  class="right-aside" style="height:75vh;">
					<view class="commodity-content" :id="'a'+index" v-for="(item , index) in categoryData" :key="index" >
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
				scrollTop:0,
				getTop:[],
				leftList:[],
				arr:[],
				toView:'',
				current:0,
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
									}
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
									}
								]
							}
							
							
						]
					},
					{
						leftName:"新品",
						extendImg:"xxxxxxx.png",
						extendUrl:"/xx/x/xxx/x",
						index:0,
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
									}
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
						index:0,
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
										index:0,
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
						index:0,
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
						index:0,
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
			clickCurrent(e){
				var id = e.currentTarget.dataset.id;
				let i = id.slice(1);
				
				this.current = parseInt(i)
				this.toView = id;
			},
		
			getScroll(e){
				// this.scrollTop = e.detail.scrollTop
				let scrollTop = e.detail.scrollTop
				console.log(scrollTop)
				console.log(this.getTop)
				let tabs = this.getTop.filter(item => item.top-20 < scrollTop).reverse();
				console.log(tabs)
				this.current = tabs[0].index
				 if(this.getTop[this.getTop.length-1].top>= scrollTop&&this.getTop[this.getTop.length-2].top+150<= scrollTop){
				  	this.current = this.getTop.length-1
				  }
				// this.getTop.forEach((item, index)=>{
				// 	if(item.index === tabs[0].index) this.current = tabs[0].index
				// })
				// if (tabs.length > 0) {
					// console.log("进来了吗")
				    // this.categoryData.forEach((item, index) => {
				    //     if (item.index === tabs[0].index) this.currentId = index
				    // });
					// console.log(this.categoryData[this.categoryData.length-2].top)
					// console.log(scrollTop)
				 //   if(this.categoryData[this.categoryData.length-1].top>= scrollTop&&this.categoryData[this.categoryData.length-2].top+150<= scrollTop){
				 //   	this.currentId = this.categoryData.length-1
				 //   }
				// }
				// for(let i=0;i<this.getTop.length;i++){
				// 		if(this.getTop[i].top<=this.scrollTop){
				// 			this.current = this.getTop[i].index
				// 		} 
				// 		if(this.getTop[0].top-150>this.scrollTop){
				// 			this.current = 0;
				// 		}
				// 		if(this.getTop[this.getTop.length-2].top>= this.scrollTop&&this.getTop[this.getTop.length-3].top+150<= this.scrollTop){
				// 			this.current = this.getTop.length-1
				// 		}
				// }
				
				
			},
			fn(){
				var timer = setTimeout(() => {
						//代码
						var temArr = []
						var sum = 0
						for(let i=0 ; i<this.arr.length;i++){
							sum = parseInt(this.arr[i] + sum)
							temArr.push({
								index:i+1,
								top:sum
							})
						}
						temArr.unshift({index:0,top:0})
						temArr.pop()
						this.getTop = temArr
						clearTimeout(timer)
					}, 500);  
			}
			
		},
		mounted() {
			this.fn()
		},
		created() {
			this.temData = this.categoryData[0];
			uni.getSystemInfo({
			　　success:(res) => { // res - 各种参数
					for(let i=0 ; i<this.categoryData.length;i++){
						let info = uni.createSelectorQuery().select("#a"+ i);
						　　　  　info.boundingClientRect((data) => { //data - 各种参数
								this.arr.push(data.height)
						　　    }).exec()
					}
			       }
			});
			
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
