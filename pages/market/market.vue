<template>
	<view>
		<view class="login-card">
			<form @submit="formData">
				<view style="width:100%;font-size: 60rpx;font-weight: 700;text-align: center;margin-bottom: 30rpx;">
					欢迎登录！淘家欢迎您！
				</view>
				<label>
					<input v-model="phoneNumber" class="input" @input="getPhoto"  @blur="checkPhone"  maxlength="11" name="phone" type="text" placeholder="请输入手机号" />
				</label>
				<view style="position: relative;display: block;width: 100%;" class="">
					<label >
						<input style="width: 60%;"  class="input" name="smsVerificationCode" maxlength="6" type="text"  placeholder="请输入验证码" />
					</label>
					<button @click="getNote" :disabled="isNote" class="noteCode" v-bind:class="[isNote ? noNoteCode : noteCode]">{{noteText}}</button>
				</view>
				
				<button form-type="submit" style="background: #FF5809;color: #fff;">登录/注册</button>
				<!-- <button form-type="reset">Reset</button> -->
			</form>
		</view>
	</view>
</template>

<script>
	import api from '../../api/apiConfig'
	export default{
		data(){
			return{
				phoneNumber:'',
				isNote:true,
				noteText:'获取验证码',
				totalTime:60,
			}
		},
		created() {
			if(this.phoneNumber.length < 11){
				console.log(this.phoneNumber)
				this.isNote = true
			}
		},
		methods:{
		async formData(event){
			console.log(event.detail.value)
			 let user = {};
			 let res = await api.loginSms(event.detail.value)
				console.log(res)
				if(res.code === 200){
					user.username = res.data.username;
					user.phone = res.data.phone;
					user.email = res.data.email;
					user.avatar = res.data.avatar
					console.log(user)
					uni.setStorage({
						key:'user',
						data:JSON.stringify(user)
					})
					uni.setStorage({
						key:'token',
						data:res.data.token
					})
				}else{
					console.log('登录失败')
				}
			},
			// 显示隐藏获取验证码
			getPhoto(e){
				console.log(e.detail.value)
				console.log("---------------------")
				console.log(e.detail.value.length)
				let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(e.detail.value.length < 11){
					this.isNote = true
				}
				if(e.detail.value.length === 11 && myreg.test(e.detail.value) ){
					this.isNote = false
					
				}
			},
			/**
			 * 检查手机号
			 */
			checkPhone(event) {
			  this.phone = event.detail.value;
			  let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			  if (this.phone === "") {
				uni.showToast({
				  title: "手机号不能为空",
				  icon: "none",
				  duration: 3000
				});
				 this.isNote = true
				return true;
			  } else if (!myreg.test(this.phone)) {
				uni.showToast({
				  title: "您的手机号不合法",
				  icon: "none",
				  duration: 3000
				});
				 this.isNote = true
				return true;
			  }else{
				  this.isNote = false
			  }
			},
			 //短信验证处理
		 	async getNote(){
			  this.noteText = '发送中...'
			  console.log(this.phoneNumber)
			  let res = await api.getSmsVerificationCode({phone:this.phoneNumber})
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
	.login-card{
		width: 710rpx;
		// height: 400rpx;
		// background: #eee;
		margin: 0rpx auto ;
		margin-top: 100rpx;
	}
	
	.input{
		width:100%;
		border-radius:15upx;
		// background-color:#eee;
		color: #000;
		border: 1px solid #ccc;
		height:100upx;
		line-height:100upx;
		padding-left:5%;
		box-sizing:border-box;
		font-size:32rpx; 
		margin: 20upx 0upx;
	}
	.noteCode{
		position: absolute;
		top: 0;
		right: 0;
		color: #fff;
		background: #FF5809;
	}
	.noNoteCode{
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
