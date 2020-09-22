<template>
	<view class="">
		<navigator open-type="switchTab" url="/pages/index/index">
			<view  class="" style="margin-top: 64rpx;margin-left: 20rpx; width: 60rpx;height: 60rpx;line-height: 60rpx; border-radius: 50%;border: 1rpx solid #eee; text-align: center;">
				<uni-icons type="home" size="15" color="#646566"></uni-icons>
			</view>
		</navigator>
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
								<!-- <button form-type="reset">Reset</button> -->
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
								<!-- <button form-type="reset">Reset</button> -->
							</form>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../api/apiConfig'
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	export default{
		data(){
			return {
				current:0,
				
				phoneNumber:'',
				isNote:true,
				noteText:'获取验证码',
				totalTime:60,
			}
		},
		components:{
			uniIcons
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
						uni.setStorage({
							key:'token',
							data:res.data.token
						})
						const parsm = await api.queryById({id:res.data.id})
						if(parsm.code === 200){
							user = parsm.data
							this.user = user
							uni.setStorage({
								key:'user',
								data:JSON.stringify(user)
							})
							// setTimeout(()=>{
								uni.navigateBack({})
							// },0)
						}
						// user.userName = res.data.userName;
						// user.phone = res.data.phone;
						// user.email = res.data.email;
						// user.avatar = res.data.avatar;
						// user.id = res.data.id;
						// console.log(user)
						// this.user = user
						// uni.setStorage({
						// 	key:'user',
						// 	data:JSON.stringify(user)
						// })
						
						// this.isShow = true
					}else if( JSON.parse(res).code === 500){
						uni.showToast({
						  title: JSON.parse(res).message,
						  icon: "none",
						  duration: 3000
						});
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
	.switch{
		display: flex;
		margin-bottom: 50rpx;
	}
	.switch-item{
		flex: 1;
		text-align: center;
		text{
			padding: 15rpx 0;
		}
	}
	
	.active{
		border-bottom: 8rpx solid #F7962F;
	}
	
	
	
	
	
	
	
	
	
	
	.login-card{
		width: 710rpx;
		margin: 0 auto;
		box-sizing: border-box;
		border-radius: 15rpx;
		// height: 400rpx;
		// background: #eee;
		// margin: 0rpx auto ;
		// margin-top: 100rpx;
		background: #fff;
		padding: 20rpx;
		margin-top: 280rpx;
		padding-bottom: 50rpx;
	}
	
	.input{
		width:100%;
		border-radius:15upx;
		// background-color:#eee;
		color: #000;
		border: 1px solid #ccc;
		height:80rpx;
		min-height: 0rpx;
		line-height:80rpx;
		padding-left:5%;
		box-sizing:border-box;
		font-size:28rpx; 
		margin: 30upx 0upx;
	}
	.noteCode{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 30rpx;
		color: #fff;
		background: #FF5809;
	}
	.noNoteCode{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 30rpx;
	}
	
</style>
