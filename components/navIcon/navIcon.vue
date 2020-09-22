<template>
	<view class="icon-box">
		<view class="" style="position: absolute;top: 50px;left: 50px;background: #F7962F;">
			<navigator url="/pages/classify/classify">
				点我
			</navigator>
		</view>
		<view class="icon-click"  @click="declick">
			<uni-icons :type="clickIcon" size="20" color="#646566"></uni-icons>
		</view>
		<view :animation="animationData"  class="nav-icon">
			<view class=" backtrack" @click.stop="backtrack">
				<!-- <uni-icons type="arrowleft" size="15" color="#646566"></uni-icons> -->
				<text>返回</text>
			</view>
			<view class="iconItem" v-for="(item , index) in navIcon" :key="index">
				<navigator open-type="switchTab" :url="item.url">
					<view class="">
							<uni-icons :type="item.ico" size="15" color="#646566"></uni-icons>
					</view>
						<text>{{item.text}}</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default{
		data(){
			return{
				animationData:{},
				 off: true,
				 clickIcon:"more-filled",
				navIcon:[
					{
						url:"../index/index",
						ico:"home",
						text:"首页"
					},
					{
						url:"../../pages/classify/classify",
						ico:"shop",
						text:"微商城"
					},
					{
						url:"../../pages/index/index",
						ico:"paperplane",
						text:"装修攻略"
					},
					{
						url:"../../pages/cart/test2",
						ico:"cart",
						text:"购物车"
					},
					{
						url:"../../pages/user/user",
						ico:"person",
						text:"个人中心"
					},
				],
			}
		},
		components:{
			uniIcons
		},
		created(){
			// 初始化一个动画
			var animation = uni.createAnimation({
				duration: 500,
				timingFunction: 'ease',
			})
			this.animation = animation
		},
		 
		methods:{
			
			backtrack(){
				uni.navigateBack()
			},
			
			
			declick() {
				if (this.off) {
					// 使用动画
					this.rotateAndScale()
				} else {
					this.norotateAndScale()
				}
				this.off = !this.off
			},
			// 定义动画内容
			rotateAndScale() {
				// 定义动画内容
				this.animation.width(400).opacity(1).step()
				this.clickIcon = 'arrowleft'
				// this.animation.rotate(45).scale(2, 2).step()
				// 导出动画数据传递给data层
				this.animationData = this.animation.export()
			},
			norotateAndScale() {
				// this.animation.rotate(0).scale(1, 1).step()
				this.animation.width(0).opacity(0).step()
				this.clickIcon = 'more-filled'
				this.animationData = this.animation.export()
			}
			 
		}
	}
</script>

<style scoped lang="scss">
	.icon-box{
		display: flex;
		position: fixed;
		z-index: 999;
		top: 10px;
	}
	
	.icon-click{
		background: rgba(0,0,0,.1);
		height:35px;
		width:35px;
		border-radius: 50%;
		text-align: center;
		line-height: 35px;
		z-index: 999;
	}
	
	.nav-icon{
		position: absolute;
		left: 15px;
		// width: 350px;
		width: 0;
		height: 35px;
		padding-left: 6px;
		display: flex;
		border-top-right-radius:17px;
		border-bottom-right-radius:17px;
		overflow: hidden;
		
	}
	.iconItem{
		flex: 1;
		// background-color: #4CD964;
		font-size: 12px;
		text-align: center;
		z-index: 998;
		padding-top: 1px;
		background: rgba(0,0,0,.1);
		// background: transparence;
		border-left: 1px solid #fff;
	}
	.backtrack{
		flex: 1;
		font-size: 12px;
		text-align: center;
		line-height: 35px;
		z-index: 998;
	}
</style>