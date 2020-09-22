<template>
	<view class="page">
		<view class="back">
			
		</view>
		<view v-if="user.userName" class="user">
			
			<!-- 用户头像 -->
			<!-- <view v-if="isShow" class="portrait"> -->
			<view class="portrait">
				<view class="message">
					<navigator url="./personCenter/index">
						<image :src="photoDomain + user.avatar" mode=""></image>
					</navigator>
					<view class="">
						{{user.userName}}
					</view>
					<!-- <picture-tailor ref="pictureTailor" :pictureSrc="photoSrc" @createImg="createImg" ></picture-tailor> -->
				</view>
			
				<!-- 功能列表 -->
				<view class="function-list" v-for="(item , index_) in icon" :key="index_">
					<view class="function-item" v-for="(sumItem , index) in item.functionItem" :key="index">
						<navigator :url="sumItem.detailUrl">
							<uni-icon :class="sumItem.iconName" style="font-size: 26px;" type=""></uni-icon>
							<view class="font-style">{{sumItem.funcionName}}</view>
						</navigator>
					</view>
				</view>
				<!-- 关于我们 -->
				<navigator url="../webviews/appointment/introduction">
					<view class="about-us">
						   <view class="about-content">
								<view class="about-name">
									关于我们
								</view>
								<view class="iconfont icon-xiangmu icon-style">
									
								</view>
						   </view>
					</view>
				</navigator>
		</view>
<!-- 		<view v-else>
			<view class="login-card">
				<view style="width:100%;font-size: 60rpx;font-weight: 700;text-align: center;margin-bottom: 30rpx;">
					欢迎登录！淘家欢迎您！
				</view>
				<view class="switch" >
					
					<view class="switch-item " @click=" this.current = 0">
						<text  v-bind:class="[current === 0  ? 'active' : '']">
							免密码登录
						</text>
					</view>
					<view class="switch-item" @click="this.current = 1">
						<text v-bind:class="[current === 1 ? 'active' : '']">
						密码登录
						</text>
					</view>
				</view>
				<view>
					<swiper style="height: 400rpx;" :current="current" @change="(event) =>{this.current = event.detail.current}">
						<swiper-item>
							<view class="swiper-item" style="padding: 0 10rpx;">
								<form @submit="formData">
									
									<label>
										<input v-model="phoneNumber" class="input" @input="getPhoto"  @blur="checkPhone"  maxlength="11" name="phone" type="text" placeholder="请输入手机号" />
									</label>
									<view style="position: relative;display: block;width: 100%;" class="">
										<label >
											<input style="width: 60%;"  class="input" name="smsVerificationCode" maxlength="6" type="text"  placeholder="请输入验证码" />
										</label>
										<button @click="getNote" :disabled="isNote" class="noteCode" v-bind:class="[isNote ? noNoteCode : noteCode]">{{noteText}}</button>
									</view>
									
									<button form-type="submit" style="background: #FF5809;color: #fff;font-size: 32rpx;">登录/注册</button>
								</form>
							</view>
						</swiper-item>
						<swiper-item >
							<view class="swiper-item" style="padding: 0 10rpx;">
								<form @submit="formData">
									
									<label>
										<input v-model="phoneNumber" class="input" @input="getPhoto"  @blur="checkPhone"  maxlength="11" name="phone" type="text" placeholder="请输入手机号" />
									</label>
									<label>
										<input class="input" name="smsVerificationCode" maxlength="6" type="password"  placeholder="请输入密码" />
									</label>
									<button form-type="submit" style="background: #FF5809;color: #fff;font-size: 32rpx;">登录</button>
								</form>
							</view>
						</swiper-item>
					</swiper>
				</view>
				
				
			</view>
			</view> -->
			</view>
	</view>
	
</template>
<script>
	import api from '../../api/apiConfig'
	import pictureTailor from "../../components/picture-tailor/pictureTailor.vue";
	export default{
		data(){
			return{
				// current:0,
				photoDomain : 'https://shop.itaojia.com/img/Taojia',
				
				// phoneNumber:'',
				// isNote:true,
				// noteText:'获取验证码',
				// totalTime:60,
				
				
				// isShow : false,
				user:{},
				photoSrc: "",
				tailorPath: "../../static/logo.png",
				icon:[
					{
						functionItem:[
							{
								iconName:"iconfont icon-xiangmu",
								funcionName:"我的项目",
								detailUrl:"xxxx/xx/xx"
							},
							{
								iconName:"iconfont icon-icon",
								funcionName:"我的订单",
								detailUrl:"xxxx/xx/xx"
							},
							{
								iconName:"iconfont icon-xiaoxi",
								funcionName:"消息",
								detailUrl:"xxxx/xx/xx"
							},
							{
								iconName:"iconfont icon-kefu-tianchong",
								funcionName:"联系客服",
								detailUrl:"xxxx/xx/xx"
							},
						]
						
					},
					{
						functionItem:[
						{
							iconName:"iconfont icon-yinxingqia",
							funcionName:"地址管理",
							detailUrl:"xxxx/xx/xx"
						},
						{
							iconName:"iconfont icon-yinxingqia",
							funcionName:"绑定手机",
							detailUrl:"xxxx/xx/xx"
						},
						{
							iconName:"iconfont icon-yinxingqia",
							funcionName:"银行客",
							detailUrl:"xxxx/xx/xx"
						},
						{
							iconName:"iconfont icon-tuiguang",
							funcionName:"我的推广",
							detailUrl:"/pages/cart/test4"
						},
						]
						
					},
				]
			}
		},
		onShow(){
			const getToken = uni.getStorageSync('token')
			const getUser = uni.getStorageSync('user')
			if(getUser){
				this.user = JSON.parse(getUser)
			}
			console.log(this.user)
			if(!getToken){
				console.log(getToken)
				// this.isShow = true
				uni.navigateTo({
					url:'/pages/user/login'
				})
			}
		},
		created() {
			// if(this.phoneNumber.length < 11){
			// 	console.log(this.phoneNumber)
			// 	this.isNote = true
			// }
			
			
			
			// const getToken = uni.getStorageSync('token')
			// const getUser = uni.getStorageSync('user')
			// if(getUser){
			// 	this.user = JSON.parse(getUser)
			// }
			// console.log(this.user)
			// if(!getToken){
			// 	console.log(getToken)
			// 	// this.isShow = true
			// 	uni.navigateTo({
			// 		url:'/pages/user/login'
			// 	})
			// }
		},
		methods: {
		// 	async formData(event){
		// 		console.log(event.detail.value)
		// 		 let user = {};
		// 		 let res = await api.loginSms(event.detail.value)
		// 			console.log(res)
		// 			if(res.code === 200){
		// 				uni.setStorage({
		// 					key:'token',
		// 					data:res.data.token
		// 				})
		// 				const parsm = await api.queryById({id:res.data.id})
		// 				if(parsm.code === 200){
		// 					user = parsm.data
		// 					this.user = user
		// 					uni.setStorage({
		// 						key:'user',
		// 						data:JSON.stringify(user)
		// 					})
		// 				}
		// 				// user.userName = res.data.userName;
		// 				// user.phone = res.data.phone;
		// 				// user.email = res.data.email;
		// 				// user.avatar = res.data.avatar;
		// 				// user.id = res.data.id;
		// 				// console.log(user)
		// 				// this.user = user
		// 				// uni.setStorage({
		// 				// 	key:'user',
		// 				// 	data:JSON.stringify(user)
		// 				// })
						
		// 				this.isShow = true
		// 			}else if( JSON.parse(res).code === 500){
		// 				uni.showToast({
		// 				  title: JSON.parse(res).message,
		// 				  icon: "none",
		// 				  duration: 3000
		// 				});
		// 			}
		// 		},
			
		// 	// 显示隐藏获取验证码
		// 	getPhoto(e){
		// 		console.log(e.detail.value)
		// 		console.log("---------------------")
		// 		console.log(e.detail.value.length)
		// 		let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		// 		if(e.detail.value.length < 11){
		// 			this.isNote = true
		// 		}
		// 		if(e.detail.value.length === 11 && myreg.test(e.detail.value) ){
		// 			this.isNote = false
					
		// 		}
		// 	},
		// 	/**
		// 	 * 检查手机号
		// 	 */
		// 	checkPhone(event) {
		// 	  this.phone = event.detail.value;
		// 	  let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		// 	  if (this.phone === "") {
		// 		uni.showToast({
		// 		  title: "手机号不能为空",
		// 		  icon: "none",
		// 		  duration: 3000
		// 		});
		// 		 this.isNote = true
		// 		return true;
		// 	  } else if (!myreg.test(this.phone)) {
		// 		uni.showToast({
		// 		  title: "您的手机号不合法",
		// 		  icon: "none",
		// 		  duration: 3000
		// 		});
		// 		 this.isNote = true
		// 		return true;
		// 	  }else{
		// 		  this.isNote = false
		// 	  }
		// 	},
		// 	 //短信验证处理
		// 	async getNote(){
		// 	  this.noteText = '发送中...'
		// 	  console.log(this.phoneNumber)
		// 	  let res = await api.getSmsVerificationCode({phone:this.phoneNumber})
		// 	  console.log(res)
		// 	  if(res.code === 200){
		// 			this.isNote = true
		// 		    this.noteText = '重新获取'+ this.totalTime+'s';
		// 			let timer = setInterval(() => {
		// 			this.totalTime--;
		// 				this.noteText = '重新获取'+ this.totalTime+'s';
		// 			if(this.totalTime === 0){
		// 			  clearInterval(timer)
		// 			  this.noteText = '获取验证码';
		// 			  this.totalTime = 60;
		// 			  this.isNote = false;
		// 			}
		// 			}, 1000);
		// 	  }else{
		// 		  uni.showToast({
		// 		    title: res.message,
		// 		    icon: "none",
		// 		    duration: 3000
		// 		  });
		// 	  }
		// 	},
			
		
			
			
			// // 上传图片处理
			// choosePhoto() {
			// 	uni.chooseImage({
			// 		count: 1,
			// 		sizeType: ["compressed"],
			// 		success: (res) => {
			// 			this.photoSrc = res.tempFilePaths[0];
			// 			console.log(this.$refs.pictureTailor)
			// 			this.$refs.pictureTailor.isShow = true;
			// 		}
			// 	});
			// },
			// createImg(e) {
			// 	this.tailorPath = e;
			// }
		},
		onBackPress() {
			if (this.$refs.pictureTailor.isShow) {
				this.$refs.pictureTailor.onHide();
			}
			return true;
		},
		onLoad() {
		
		},
		components: {
			pictureTailor
		}
		
	}
</script>
<style scoped lang="scss">
	// .switch{
	// 	display: flex;
	// 	margin-bottom: 50rpx;
	// }
	// .switch-item{
	// 	flex: 1;
	// 	text-align: center;
	// 	text{
	// 		padding: 15rpx 0;
	// 	}
	// }
	
	// .active{
	// 	border-bottom: 8rpx solid #F7962F;
	// }
	
	
	
	
	
	
	
	
	
	.page{
		width: 100%;
		height: 100vh;
		background-color: #f7f7f7;
		position: relative;
		
	}
	.back{
		position: absolute;
		top: -605rpx;
		left: -324rpx;
		width: 1400rpx;
		height: 800rpx;
		border-radius: 50%;
		background-color: #e95504;

	}
	.user{
		position: absolute;
		left: 20rpx;
		width: 710rpx;
		// margin: 0 auto;
		height: 100vh;
		overflow:hidden
	}
	
	// .login-card{
	// 	width: 710rpx;
	// 	box-sizing: border-box;
	// 	border-radius: 15rpx;
	// 	// height: 400rpx;
	// 	// background: #eee;
	// 	// margin: 0rpx auto ;
	// 	// margin-top: 100rpx;
	// 	background: #fff;
	// 	padding: 20rpx;
	// 	margin-top: 280rpx;
	// 	padding-bottom: 50rpx;
	// }
	
	// .input{
	// 	width:100%;
	// 	border-radius:15upx;
	// 	// background-color:#eee;
	// 	color: #000;
	// 	border: 1px solid #ccc;
	// 	height:80rpx;
	// 	min-height: 0rpx;
	// 	line-height:80rpx;
	// 	padding-left:5%;
	// 	box-sizing:border-box;
	// 	font-size:28rpx; 
	// 	margin: 30upx 0upx;
	// }
	// .noteCode{
	// 	position: absolute;
	// 	top: 0;
	// 	right: 0;
	// 	font-size: 30rpx;
	// 	color: #fff;
	// 	background: #FF5809;
	// }
	// .noNoteCode{
	// 	position: absolute;
	// 	top: 0;
	// 	right: 0;
	// 	font-size: 30rpx;
	// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// 用户头像
	.portrait{
		z-index: 999;
		width: 100%;
		height: 280rpx;
		border-radius: 16rpx;
		margin-top: 20rpx;
		background-color: #fff;
		.message{
			width: 100%;
			height: 100%;
			margin-right: auto;
			margin-left: auto;
			text-align: center;
		}
		image{
			// background-color: #eee;
			margin-top: 38rpx;
			width: 160upx !important;
			height: 160upx !important;
			border-radius: 50%;
			
		}
	}
	
	// 功能列表
	.function-list{
		display: flex;
		background-color: #fff;
		margin-top: 20rpx;
		text-align: center;
		height: 148rpx;
		border-radius: 16rpx;
		.function-item{
			flex: 1;
			margin-top: 25rpx;
			.font-style{
				margin-top: 5rpx;
				font-size: 28rpx;
				color: #666;
			}
		}
	}
	
	// 关于我们
	.about-us{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		border-radius: 16rpx;
		margin-top: 20rpx;
		.about-content{
			width: 670rpx;
			margin: 0 auto;
			line-height: 100rpx;
			.about-name{
				float: left;
				font-size: 36rpx;
				color: #666;
			}
			.icon-style{
				font-size: 30rpx;
				float: right;
			}
		}
	}
</style>