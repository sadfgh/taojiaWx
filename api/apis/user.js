export function User(axiosSubmit) {
	return {
		getSmsVerificationCode: function (params) {
			return axiosSubmit({
				method: 'GET',
				url: '/verificationCode/getSmsVerificationCode',
				params
			})
		},
		loginSms:function(params){
			return axiosSubmit({
				method:'POST',
				header:{
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				url: '/taojia/login',
				params
			})
		},
		updateUser:function(params){
			return axiosSubmit({
				method:'POST',
				url: '/user/updateUser',
				params
			})
		},
		queryById:function(params){
			return axiosSubmit({
				method:'GET',
				url: '/user/queryById',
				params
			})
		},
		unbindPhone:function(params){
			return axiosSubmit({
				method:'POST',
				url: '/user/unbindPhone',
				params
			})
		},

	}
}