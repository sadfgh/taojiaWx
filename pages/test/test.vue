<template>
	<view class="vw-main" v-bind:style="{width: vwidth + 'px' }">
		<!-- <view @click="getClick" class="">
			点我
		</view> -->
			<!-- <view class="top-nav"  @click.stop="getClick">
				<uni-icons type="arrowleft" size="20" color="#646566"></uni-icons>
			</view> -->
			<view class="">
				<navIcon></navIcon>
			</view>
		
		<view  class="a">
			<!-- <scroll-view scroll-y="true" v-bind:style="{heigth:vheight+'rpx'}" > -->
			 <scroll-view scroll-y="true" v-bind:style="{height: vheight + 'px' }">
				<view @click="getCurrent(index)" class="left-buttom" v-for="(item , index) in list" :key="index">
					{{item}}
				</view>
			</scroll-view>
		</view>
		
		<swiper class="b" vertical :current="current" v-bind:style="{height: vheight + 'px' }">
			<swiper-item v-for="(item , index) in list" :key="index">
				<view class="swiper-item">
					{{item}}
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue';
	import navIcon from '../../components/navIcon/navIcon.vue'
	export default{
		data(){
			return {
				showNav: false,
				list:[1,2,3,4,5,6,7],
				vheight:0,
				vwidth:0,
				current:0
			}
		},
		components:{
			uniIcons,
			navIcon
		},
		methods:{
			getClick(){
				console.log("点击了吗")
				uni.navigateBack()
			},
			getCurrent(index){
				this.current = index
			}
		},
		created() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					console.log(res.windowWidth);  
					console.log(res.windowHeight);
					 this.vheight = res.windowHeight
					 this.vwidth = res.windowWidth-34
					 console.log(this.vheight)
					if (res.windowWidth > res.windowHeight) {  
						console.log('横屏');  
					} else {  
						console.log('竖屏');  
					}  
				}
				
			});  	
			
		}
	}
</script>

<style lang="scss" scoped>
	.top-nav{
		z-index: 999;
		position: fixed;
		left: 34px;
		top: 5px;
		width: 35px;
		height: 35px;
		line-height: 35px;
		color: #000000;
		font-size: 18px;
		font-weight: 700;
		background: rgba(0,0,0,.1);
		border-radius: 50%;
		text-align: center;
	}
	
	
	
	.vw-main{
		display: flex;
		margin-left: 34px;
		// width: 760px;
		// height: 342px;
		// overflow: hidden;
		// height: 100%;
		// background: #F0AD4E;
	}
	.a{
		width: 150px;
		// height: 342px;
		background-color: #4CD964;
		// overflow: hidden;
	}
	.b{
		flex: 1;
		// height: 342px;
		background: red;
		// height: 100%;
	}
	.left-buttom{
		padding: 20rpx 30rpx;
		height: 50px;
		line-height: 50px;
		font-size: 23px;
		text-align: center;
	}
	.swiper-item{
		font-size: 88px;
		font-weight: 800;
		text-align: center;
		width: 100%;
		height: 100%;
	}
	
</style>
