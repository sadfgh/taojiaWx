<template>
	<view class="">
		<view class="">
			<view class="icon-box">
				<view class="icon-click"  @click="declick">
					<uni-icons :type="clickIcon" size="20" color="#646566"></uni-icons>
				</view>
				<view :animation="animationData"  class="nav-icon">
					<view class=" backtrack">
						<!-- <uni-icons type="arrowleft" size="15" color="#646566"></uni-icons> -->
						<text>返回</text>
					</view>
					<view class="iconItem" v-for="(item , index) in navIcon" :key="index">
						<navigator :url="item.url">
							<view class="">
									<uni-icons :type="item.ico" size="15" color="#646566"></uni-icons>
							</view>
								<text>{{item.text}}</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<view class=""   style="margin-top: 150px;" >
			<view class="" style="padding: 20rpx;float: left;" v-for="(item , index) in icon" :key="index">
				<uni-icons @click="getIcon(item)" :type="item" size="20" color="#646566"></uni-icons>
			</view>
		</view>
	</view>
	
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	export default{
		data(){
			return{
				animationData:{},
				 off: true,
				 clickIcon:"more-filled",
				navIcon:[
					{
						url:"xxx/xxx/xxxx ",
						ico:"home",
						text:"首页"
					},
					{
						url:"xxx/xxx/xxxx ",
						ico:"shop",
						text:"微商城"
					},
					{
						url:"xxx/xxx/xxxx ",
						ico:"paperplane",
						text:"装修攻略"
					},
					{
						url:"xxx/xxx/xxxx ",
						ico:"cart",
						text:"购物车"
					},
					{
						url:"xxx/xxx/xxxx ",
						ico:"person",
						text:"个人中心"
					},
				],
				
				icon:[
					"pulldown",
					"refreshempty",
					"back",
					"forward",
					"more",
					"more-filled",
					"scan",
					"qq",
					"weibo",
					"weixin",
					"pengyouquan",
					"loop",
					"refresh",
					"refresh-filled",
					"arrowthindown",
					"arrowthinleft",
					"arrowthinright",
					"arrowthinup",
					"undo-filled",
					"undo",
					"redo",
					"redo-filled",
					"bars",
					"chatboxes",
					"camera",
					"chatboxes-filled",
					"camera-filled",
					"cart-filled",
					"cart",
					"checkbox-filled",
					"checkbox",
					"arrowleft",
					"arrowdown",
					"arrowright",
					"smallcircle-filled",
					"arrowup",
					"circle",
					"eye-filled",
					"eye-slash-filled",
					"eye-slash",
					"eye",
					"flag-filled",
					"flag",
					"gear-filled",
					"reload",
					"gear",
					"hand-thumbsdown-filled",
					"hand-thumbsdown",
					"hand-thumbsup-filled",
					"heart-filled",
					"hand-thumbsup",
					"heart",
					"home",
					"info",
					"home-filled",
					"info-filled",
					"circle-filled",
					"chat-filled",
					"chat",
					"mail-open-filled",
					"email-filled",
					"mail-open",
					"email",
					"checkmarkempty",
					"list",
					"locked-filled",
					"locked",
					"map-filled",
					"map-pin",
					"map-pin-ellipse",
					"map",
					"minus-filled",
					"mic-filled",
					"minus",
					"micoff",
					"mic",
					"clear",
					"smallcircle",
					"close",
					"closeempty",
					"paperclip",
					"paperplane",
					"paperplane-filled",
					"person-filled",
					"contact-filled",
					"person",
					"contact",
					"images-filled",
					"phone",
					"images",
					"image",
					"image-filled",
					"location-filled",
					"location",
					"plus-filled",
					"plus",
					"plusempty",
					"help-filled",
					"help",
					"navigate-filled",
					"navigate",
					"mic-slash-filled",
					"search",
					"settings",
					"sound",
					"sound-filled",
					"spinner-cycle",
					"download-filled",
					"personadd-filled",
					"videocam-filled",
					"personadd",
					"upload",
					"upload-filled",
					"starhalf",
					"star-filled",
					"star",
					"trash",
					"phone-filled",
					"compose",
					"videocam",
					"trash-filled",
					"download",
					"chatbubble-filled",
					"chatbubble",
					"cloud-download",
					"cloud-upload-filled",
					"cloud-upload",
					"cloud-download-filled",
					"headphones",
					"shop"
				]
			}
		},
		components:{
			uniIcons
		},
		onShow: function(){
			// 初始化一个动画
			var animation = uni.createAnimation({
				duration: 1000,
				timingFunction: 'ease',
			})
			this.animation = animation
		},
		 
		methods:{
			getIcon(item){
				console.log(item);
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
				this.animation.width(350).opacity(1).step()
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
		position: relative;
		margin: 40rpx 40rpx;
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
		padding: 0 10px;
		z-index: 998;
		padding-top: 2px;
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
