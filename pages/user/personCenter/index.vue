<template>
	<view class="page">
			<view class="person-chagen">
					<!-- <text style="display:block;margin:15rpx 0;">管理我的账户</text> -->
					<navigator url="./chagenPerson">
						<view class="person-card">
								<view class="" style="width: 100rpx;height: 100rpx;border-radius: 50%;margin-right: 20rpx;">
									<image :src="photoDomain + form.avatar" mode="" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
								</view>
								<view class="" style="height: 100rpx;">
									<view style="margin-bottom: 5rpx;">
										用户名:{{form.userName}}
									</view>
									<view>
										手机号:{{form.phone}}
									</view>
								</view>
								<view class="" style="flex: 1;text-align: right;margin-top: 24rpx;">
									<uni-icons type="arrowright" size="20" color="#646566"></uni-icons>
								</view>
						</view>
					</navigator>
			</view>
			<view class="password-chagen">
				<navigator url="./chagenPassword">
					<text>修改密码</text>
					<uni-icons style="float: right;" type="arrowright" size="20" color="#646566"></uni-icons>
				</navigator>
			</view>
			<view @click="showPopUp" class="phone-chagen">
					<text>解绑手机</text>
					<uni-icons style="float: right;" type="arrowright" size="20" color="#646566"></uni-icons>
			</view>
			<pop-up ref="popUp">
				<view class="title">
					解绑手机
				</view>
				<view class="bind-message">
					<view class="" style="margin: 16px 0;font-size: 16px;margin-bottom: 20px;">
						绑定的手机号码：{{form.phone}}
					</view>
					<view style="position: relative;display: block;width: 100%;" class="">
						<label >
							<input class="input" v-model="smsVerificationCode" name="smsVerificationCode" maxlength="6" type="text"  placeholder="请输入验证码" />
						</label>
						<button @click="getNote" :disabled="isNote" class="noteCode" v-bind:class="[isNote ? noNoteCode : noteCode]">{{noteText}}</button>
					</view>
				</view>
				<view class="content-box button-model">
					<view class="flex-layout">
						<button @click="this.$refs.popUp.handleHiddenShare()" class="button-style">取消</button>
					</view>
					<view class="flex-layout">
						<button @click="unbundle" class="button-style" style="background: #FF5809;color: #fff;font-size: 32rpx;">解绑</button>
					</view>
				 </view>
			</pop-up>
			
	</view>
</template>

<script>
	import api from '../../../api/apiConfig'
	import uniIcons from '../../../components/uni-icons/uni-icons.vue'
	import popUp from '../../../components/pop-up/pop-up.vue'
	export default{
		data(){
			return{
				photoDomain : 'https://shop.itaojia.com/img/Taojia',
				form:{},
				noteText:'获取验证码',
				isNote:false,
				totalTime:60,
				smsVerificationCode:'',
			}
		},
		created() {
			const getUser = uni.getStorageSync('user')
			if(getUser){
				this.form = JSON.parse(getUser)
			}
			console.log(this.form)
		},
		components:{
			uniIcons,
			popUp
		},
		methods:{
			showPopUp(){
				this.$refs.popUp.handleShowShare()
			},
		  async	unbundle(){
			  let msg ={};
			  msg.phone = this.form.phone;
			  msg.smsVerificationCode = this.smsVerificationCode
			  console.log(msg)
			   const res = await api.unbindPhone(msg)
			   if(res.code === 200){
				    uni.removeStorageSync('user');
					uni.removeStorageSync('token');
					this.$refs.popUp.handleHiddenShare()
				   uni.showToast({
				   	title:'解绑成功',
					icon:'none',
					duration:2000
				   })
				   setTimeout(()=>{
					   uni.navigateTo({
					   	url:'/pages/user/login'
					   })
				   },1000)
				 
			   }else{
				   uni.showToast({
				   	title:'解绑失败',
					icon:'none',
					duration:2000
				   })
			   }
				
			},
			
			//短信验证处理
			async getNote(){
			  this.noteText = '发送中...'
			  console.log(this.form.phone)
			  let res = await api.getSmsVerificationCode({phone:this.form.phone})
			  console.log(res)
			  if(res.code === 200){
					this.isNote = true
				    this.noteText = '重新获取'+ this.totalTime+'s';
					let timer = setInterval(() => {
					this.totalTime--;
						this.noteText = '重新获取'+ this.totalTime+'s';
					if(this.totalTime === 0){
					  clearInterval(timer)
					  this.noteText = '获取验证码';
					  this.totalTime = 60;
					  this.isNote = false;
					}
					}, 1000);
			  }else{
				  uni.showToast({
				    title: res.message,
				    icon: "none",
				    duration: 3000
				  });
			  }
			},
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		background: #eee;
		height: 100vh;
	}
	.person-chagen{
		background: #fff;
		padding: 20rpx;
		margin-bottom: 25rpx;
		.person-card{
			border: 1px solid #F7962F;
			border-radius: 15rpx;
			padding: 20rpx 30rpx;
			display: flex;
		}
	}
	
	.password-chagen{
		background: #fff;
		padding: 20rpx;
		margin-bottom: 25rpx;
	}
	.phone-chagen{
		background: #fff;
		padding: 20rpx;
		margin-bottom: 25rpx;
	}
	
	
	
	
	.content-box{
		display: flex;
	}
	
	.button-model{
		width: 100%;
		position: absolute;
		bottom: 20rpx;
	}
	
	.flex-layout{
		flex: 1;
		// text-align: center;
	}
	
	.button-style{
		width: 85%;
		border-radius: 50rpx;
		text-align: center;
	}
	
	.button-style::after{
		border:none;
	}
	
	
	
	
	
	.title{
		width: 100%;
		padding: 20rpx;
		font-size: 38rpx;
		font-weight: 700;
		text-align: center;
		
	}
	.bind-message{
		width: 710rpx;
		margin: 0 auto;
	}
	
	
	
	
	
	
	.input{
		width:70%;
		border-radius:15upx;
		// background-color:#eee;
		color: #000;
		border: 1px solid #ccc;
		height:65rpx;
		min-height: 0rpx;
		line-height:65rpx;
		padding-left:3%;
		box-sizing:border-box;
		font-size:28rpx; 
		margin: 30upx 0upx;
	}
	.noteCode{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 25rpx;
		color: #fff;
		background: #FF5809;
	}
	.noNoteCode{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 25rpx;
	}
</style>
