import { User } from './apis/user'

const apiLocalhost = 'http://192.168.1.155:6001'
function axiosSubmit (options) {
	let config = {
		method: options.method,
		url: options.url,
		header:  options.header || {'Content-Type': 'application/json;charset=UTF-8' },
		data: options.params
	}
	 const token = uni.getStorageSync('token');
	 if(token){
		 config.header['Authorization'] = token
	 }
	console.log(config.method)
	console.log(config.data)
	 if (config.method === 'GET') {
	         let str = ''
	        for(let key in config.data){
	            str = str + '/'+config.data[key]
	            console.log(config.data[key])
	        }
	        console.log(str)
	        config.url = config.url + str
	        console.log(config.url)
	        config.data = {}
	    }
	// if(config.method === 'POST'){
		
	// }
		config.url = apiLocalhost + config.url
	    console.log(config)
	return uni.request(config)
		.then(res => {
			console.log(res)
			return  res[1].data
		}).catch(res => {
			const errMsg = {code: 404, msg: '网络超时'}
			return errMsg
		})
}


export default Object.assign(
		User(axiosSubmit)
)