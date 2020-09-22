<template>
	<view class="page">
<!-- 
		<pop-up ref="popUp0">
			<view class="">
				<view class="title">
					修改用户名
				</view>
				<view class="">
					<input class="input" name="userName" maxlength="11" @blur="checkUser"  placeholder="请输入用户名" type="text" v-model="form.userName" />
				</view>
				<view style="width: 710rpx;height: 1rpx;margin: 0 auto;background: #eee;">
					
				</view>
				<view class="" style="color: #ccc;font-size: 26rpx;margin: 20rpx;">
					top1:用户名长度不能超过11个字段哦。
					</br>
					top2:确认修改后要点击提交才生效哦。
				</view>
			</view>
		</pop-up>
		<pop-up  ref="popUp1">
			<view class="">
				<view class="title">
					修改手机号码
				</view>
				<view class="">
					<input class="input" name="phone" maxlength="11" @blur="checkPhone" placeholder="请输入手机号码" type="text" v-model="form.phone" />
				</view>
				<view style="width: 710rpx;height: 1rpx;margin: 0 auto;background: #eee;">
					
				</view>
				<view class="" style="color: #ccc;font-size: 26rpx;margin: 20rpx;">
					top1:确认修改后要点击提交才生效哦。
				</view>
			</view>
		</pop-up>
		<pop-up  ref="popUp2">
				<view class="title">
					修改电子邮箱
				</view>
				<view class="">
					<input class="input" name="email" @blur="checkEmail"  placeholder="请输入电子邮箱" type="text" v-model="form.email" />
				</view>
				<view style="width: 710rpx;height: 1rpx;margin: 0 auto;background: #eee;">
					
				</view>
				<view class="" style="color: #ccc;font-size: 26rpx;margin: 20rpx;">
					top1:确认修改后要点击提交才生效哦。
				</view>
		</pop-up> -->
		<view class="message content">
			<image :src="photoDomain + form.avatar" mode="" @click="choosePhoto"></image>
			<view class="">
				点击更换头像
			</view>
			<picture-tailor ref="pictureTailor" :pictureSrc="photoSrc" @createImg="createImg" ></picture-tailor>
		</view>
		<view class="content-box content">
			<view class="left-flex">
				用户名
			</view>
			<view class="right-flex">
				<input class="input" name="userName" maxlength="11" @blur="checkUser"  placeholder="请输入用户名" type="text" v-model="form.userName" />
				<!-- <uni-icons type="arrowright" size="15" color="#646566"></uni-icons> -->
			</view>
		</view>
		<view v-if="form.phone" class="content-box content">
			<view class="left-flex">
				手机号码
			</view>
			<view class="right-flex">
				<text>{{form.phone}}</text>
			</view>
		</view>
		<view v-if="form.email" class="content-box content">
			<view class="left-flex">
				电子邮箱
			</view>
			<view class="right-flex">
				<text>{{form.email}}</text>
			</view>
		</view>
		<view class="content">
			<button @click="onSubmit" style="background: #FF5809;color: #fff;font-size: 32rpx;">提交</button>
		</view>
		<!-- <view class="" style="color: #ccc;font-size: 26rpx;margin: 20rpx;">
			top:确认修改后要点击提交才生效哦。
		</view> -->
	</view>
</template>

<script>
	import api from '../../../api/apiConfig'
	import uniIcons from '../../../components/uni-icons/uni-icons.vue'
	import popUp from '../../../components/pop-up/pop-up.vue'
	import pictureTailor from "../../../components/picture-tailor/pictureTailor.vue";
	export default{
		data(){
			return {
				 photoDomain : 'https://shop.itaojia.com/img/Taojia',
				 username:'',
				form:{
					id:'',
					avatar:'',
					userName:'',
					phone:'',
					email:'',
					lockStatus: 0,
					roles: [],
				},
				
				
				// isShow : false,
				photoSrc: "",
				tailorPath: "/admin/2/other/cbea5c19b7b9fddd3f4e4e8b16565878.png",
				
			}
		},
		created() {
			const getUser = uni.getStorageSync('user')
			if(getUser){
				this.form = JSON.parse(getUser)
			}
			console.log(this.form)
			// this.form.avatar='';
			// this.form.userName=''
		},
		
		components:{
			uniIcons,
			popUp,
			pictureTailor
		},
		methods:{
			/**
			 * 检查用户名
			 */
			checkUser(){
				// this.form.userName = event.detail.value;
				// let userReg = /^[a-zA-Z0-9\u4e00-\u9fa5\_]+$/;
				let userReg = /^[a-zA-Z0-9\u4e00-\u9fa5\_]+$/;
				if (this.form.userName === "") {
								uni.showToast({
								  title: "用户名不能为空",
								  icon: "none",
								  duration: 3000
								});
								return true;
				} else if (!userReg.test(this.form.userName)) {
								uni.showToast({
								  title: "您的用户名不合法",
								  icon: "none",
								  duration: 3000
								});
								return true;
				}
			},
			
			
			
			/**
			 * 检查手机号
			 */
			checkPhone() {
			  // this.form.phone = event.detail.value;
			  let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			  if (this.form.phone === "") {
				uni.showToast({
				  title: "手机号不能为空",
				  icon: "none",
				  duration: 3000
				});
				return true;
			  } else if (!phoneReg.test(this.form.phone)) {
				uni.showToast({
				  title: "您的手机号不合法",
				  icon: "none",
				  duration: 3000
				});
				return true;
			  }
			},
			
			/**
			 * 检查电子邮箱
			 */
			checkEmail(){
				// this.form.email = event.detail.value;
				let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				if (this.form.email === "") {
								uni.showToast({
								  title: "电子邮箱不能为空",
								  icon: "none",
								  duration: 3000
								});
								return true;
				} else if (!emailReg.test(this.form.email)) {
								uni.showToast({
								  title: "您的电子邮箱不合法",
								  icon: "none",
								  duration: 3000
								});
								return true;
				}
			},
			
			
			publicReg(item , Reg){
				if(item === ""){
					console.log(item)
					uni.showToast({
					  title: "输入信息不能为空",
					  icon: "none",
					  duration: 3000
					});
					return false;
				}else if (!Reg.test(item)) {
					uni.showToast({
					  title: "您输入的信息不符合规范",
					  icon: "none",
					  duration: 3000
					});
					return false;
				}
				return true
			},
			
			
			
			
			
			// 上传图片处理
			choosePhoto() {
				uni.chooseImage({
					count: 1,
					sizeType: ["compressed"],
					success: (res) => {
						this.photoSrc = res.tempFilePaths[0];
						console.log(this.$refs.pictureTailor)
						this.$refs.pictureTailor.isShow = true;
					}
				});
			},
			createImg(e) {
				console.log(e)
				this.form.avatar = e;
			},
			
			
			
			//显示弹框功能
			ShowShare(item){
				if(item === 0){
					this.$refs.popUp0.handleShowShare()
				}
				if(item === 1){
					this.$refs.popUp1.handleShowShare()
				}
				if(item === 2){
					this.$refs.popUp2.handleShowShare()
				}
			},
		async onSubmit(){
			let isUser = this.publicReg(this.form.userName , /^[a-zA-Z0-9\u4e00-\u9fa5\_]+$/);
			// let isPhone = this.publicReg(this.form.phone ,  /^[1][3,4,5,7,8][0-9]{9}$/)
			// let isEmail = this.publicReg(this.form.email , /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
			if(isUser){
				// this.form.avatar = this.tailorPath
				// this.form.userName = this.username
				// this.form.lockStatus = 0
				// this.form.roles = []
				console.log(this.form)
				const res  = await api.updateUser(this.form)
				console.log(res)
				if(res.code === 200){
					uni.setStorage({
						key:'user',
						data:JSON.stringify(this.form)
					})
					uni.showToast({
					    title: '修改成功',
						icon:'success',
					    duration: 2000
					});
				}
				
			}else{
				return false
			}
				
			
			},
			
			
			
			
			
			// getData(){
			// 	console.log(this.email)
			// 	// this.email = this.email
			// 	this.$refs.popUp2.handleHiddenShare()
			// }
			
		},
		onBackPress() {
			if (this.$refs.pictureTailor.isShow) {
				this.$refs.pictureTailor.onHide();
			}
			return true;
		},
		
		
		
		
	}
</script>

<style lang="scss" scoped>
	.page{
		background: #eee;
		height: 100vh;
	}
	
	.content{
		background: #fff;
		padding: 20rpx;
		margin-bottom: 25rpx;
	}
	
	.message{
		text-align: center;
		image{
			width: 160upx !important;
			height: 160upx !important;
			border-radius: 50%;
			
		}
	}
	
	
	
	.content-box{
		display: flex;
	}
	.left-flex{
		flex: 1;
		text-align: left;
	}
	.right-flex{
		flex: 1;
		text-align: right;
		text{
			color: #646566;
			margin-right: 20rpx;
		}
		input{
			margin-right: 20rpx;
		}
	}
	
	
	
	//  .share-box {
	//         width: 100%;
	//         height: 100%;
	//         position: fixed;
	//         top: 0rpx; left: 0rpx; bottom: 0rpx; right: 0rpx;
	//         background-color: rgba(0, 0, 0, 0.4);
	//         transition: .3s;
	//         z-index: 999;
	//     }
	
	
	.title{
		width: 100%;
		padding: 20rpx;
		font-size: 38rpx;
		font-weight: 700;
		text-align: center;
		
	}
	
	
	// .input{
	// 	color: #000;
	// 	height:60rpx;
	// 	min-height: 0rpx;
	// 	line-height:60rpx;
	// 	padding-left:4%;
	// 	box-sizing:border-box;
	// 	font-size:28rpx; 
	// 	margin: 20upx 0upx;
	// }
	
	
	// .bottom-box{
	// 	width: 100%;
	// 	height: 530rpx;
	// 	position: relative;
	// 	// padding: 0 20rpx;
	// }
	
	
	
	
	// .bottom-box{
	// 	width: 100%;
	// 	height: 530rpx;
	// 	position: relative;
	// 	// padding: 0 20rpx;
	// }
	
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
