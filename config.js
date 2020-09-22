export const online = true // true or flase 
// 服务器地址
// export const oldphotoDomain = online
// 	? 'https://shop.itaojia.com/client'
// 	: 'http://192.168.1.85:100'
/**
 * 访问服务器接口用： https: //servicer.itaojia.com
 * 访问服务器前端用： https: //shop.itaojia.com
 */
export const mallappid = 'wx9fe32d0bf28ad5f4'
// 百度地图AK，测试服AK=PRZdSKZjtF9AB8y5HvoQwLsZkviFNi4w，正式服AK=I5GfnYQKYNkt2oBVG8yjT9wZuHWXwXB0
export const baiduMapAK = online ? 'I5GfnYQKYNkt2oBVG8yjT9wZuHWXwXB0' : 'PRZdSKZjtF9AB8y5HvoQwLsZkviFNi4w'
// 新服务器地址
// 访问的是服务器接口
export const photoDomain = online
	? 'https://shop.itaojia.com/img/small_program'
	: 'http://192.168.1.61:8080'
export const webviewUrl = online
	? 'https://www.itaojia.com/h5-webapp'
	// ? 'https://localhost:8000/h5-webapp' // 本地服务
	: 'https://192.168.1.58:8080/h5-webapp' 
export const videoDomain = online
	? 'https://shop.itaojia.com/video/Taojia'
	: 'http://192.168.1.65:100'
// 访问的是新服务器接口地址
export const newphotoDomain = online
	? 'https://shop.itaojia.com/img/small_program'
	: 'http://192.168.1.55:100'

// 根据后台返回的图片路径拼接前缀
export const photoBase = online
	? 'https://shop.itaojia.com/img/Taojia'
	: 'http://192.168.1.55:100'
// 服务器API
export const apiDomain = online
	// ? 'https://shop.itaojia.com'
	? 'https://shop.itaojia.com/cloud-tjb'
	: 'http://test.itaojia.com'	// 测试域名
	// : 'http://192.168.1.61:8080/Taojia'
// 供应后台 API
export const supplyDomain = online
	? 'https://api.itaojia.com/supply'
	: 'http://192.168.1.55:9111'
// 接口版本
export const apiVersion = '/v0.5.3'
// 反馈 https://tucao.qq.com
export const tucaoAppId = 'wx8abaf00ee8c3202e'
export const appId = 'wx0685735ffa7fb4f1'
export const secret = '6ede5c6d513e87fe4248696bfce756b3'
export const tucaoProductId = '21014'
// others
export const adminID = '57b11e62ee476fcc10b1f9ba'
export const packagesID = '5914143ddcf51359c59be248'
// pages
export const shoppeInformation = '59f1a49348e73103f51ed6c0' // 选材技巧

export const tabbar = '/pages/user/index/pages/main/index/pages/store/list/pages/estate/estate/pages/shoppe/index' // tabbar页面链接
export const actObject = {
	A01: '5a6ad7d3b25ad977f122be72',
	A02: '5a716d03ecbd9b419fa11686',
	A03: '5aa744759f951239197662d2'
}

// 服务器图片路径
export const SeverImgUrl = 'https://shop.itaojia.com/img/small_program/'

export const geokey = 'bcd4feb4b592f3f5b9e482e48873f223'

// 新用户满减专享券ID 满100 - 20 元
export const couponID = '5a73c5869c511f7b347c283e'

// 首页轮播
export const activityBanner = [
	{
		_id: '',
		src: photoDomain + '/wx/banner/shoppe/zhonglian.jpg',
		to: '/pages/about/zhonglianCompany'
	}, {
		_id: '',
		src: photoDomain + '/wx/banner/main/jinghua.jpg',
		to: '/pages/main/jinghua'
	}, {
		_id: '5b1a2cc0dd9edd5ce4cd422c',
		src: photoDomain + '/wx/banner/activity/A09.jpg',
		to: '/pages/activity/index?scene=A09'
	}, {
		_id: '5b021edc925e0d1a743216d2',
		src: photoDomain + '/wx/banner/activity/A08.jpg',
		to: '/pages/activity/index?scene=A08'
	}, {
		_id: '5af5580aed45aa323949a0dd',
		src: photoDomain + '/wx/banner/activity/A07.jpg',
		to: '/pages/activity/index?scene=A07'
	}, {
		_id: '5ae2828bdb8a403ebd464ac5',
		src: photoDomain + '/wx/banner/activity/A06.jpg',
		to: '/pages/activity/index?scene=A06'
	}, {
		_id: '5ad5b92d75083e051932ef69',
		src: photoDomain + '/wx/banner/activity/A05.jpg',
		to: '/pages/activity/index?scene=A05'
	}, {
		_id: '5aba079da3768b33e69e1958',
		src: photoDomain + '/wx/banner/activity/A04.jpg',
		to: '/pages/activity/index?scene=A04'
	}, {
		_id: '5aa744759f951239197662d2',
		src: photoDomain + '/wx/banner/activity/A03.jpg',
		to: '/pages/activity/index?scene=A03'
	}, {
		_id: '',
		src: photoDomain + '/wx/banner/main/DDse.jpg',
		to: '/subPage/store/details?id=5acdb6303865761e770655b1'
	}, {
		_id: '',
		src: photoDomain + '/wx/banner/main/loan.jpg',
		to: '/pages/about/loan'
	}, {
		_id: '5a6ad7d3b25ad977f122be72',
		src: photoDomain + '/wx/banner/activity/A01.png',
		to: '/pages/activity/index?scene=A01'
	},
]
/**
 * 根据url获取对应页面标题
 */
export const showPageTitle = function(pageUrl) {
	const pageObj = {
		'pages/main/index': '首页',
		'pages/main/webview': '',
		'pages/main/statement': '',
		'pages/main/jinghua': '',
		'pages/main/jinghuaCalculate': '',
		'pages/main/jinghuaDetailList': '',
		'pages/estate/model': '',
		'pages/estate/details': '案例详情',
		'pages/estate/listmore': '案例列表',
		'pages/shoppe/index': '',
		'pages/user/index': '个人中心',
		'pages/user/auth': '',
		'pages/user/shoppingCart': '',
		'pages/user/appointment': '个人预约',
		'pages/user/priceCalculate': '',
		'pages/user/orderSuccess': '',
		'pages/user/collect': '收藏',
		'pages/user/coupon': '',
		'pages/order/listAddress': '地址列表',
		'pages/order/createAddress': '新增地址',
		'pages/order/details': '订单详情',
		'pages/order/confirm': '确认订单',
		'pages/order/list': '订单列表',
		//资讯列: ''表
		'pages/information/list': '资讯列表',
		'pages/information/details': '资讯详情',
		//装: ''企
		'pages/store/list': '装企列表',
		'subPage/store/details': '装企详情',
		'subPage/store/aptitude': '',
		'subPage/store/infoBusiness/details': '',
		'subPage/store/sitelog': '',
		'subPage/store/sitelist': '',
		'pages/about/list': '',
		'pages/about/zhengfu': '',
		'pages/about/xiehui': '',
		//家装: ''贷
		'pages/about/loan': '家装贷',
		'pages/about/flow': '',
		'pages/about/vr': '',
		'pages/about/zhonglianCompany': '',
		'pages/about/loanCalculate': '',
		'pages/about/freeDesign': '',
		'pages/activity/index': '',
		'pages/activity/list': '',
		'pages/activity/A07': '',
		'pages/activity/A07/advances': '',
		'pages/activity/A07/chooseStyle': '',
		'pages/activity/A08': '',
		'pages/activity/A08/information': '',
		'pages/activity/A09': '',
		'pages/activity/A10': '',
		'pages/activity/A11': '',
		'pages/activity/A11/heaindex': '',
		'pages/activity/A11/furniture': '',
		'pages/activity/A11/appointment': '预约',
		//预约-免费报: ''价
		"pages/about/freequotation": '免费报价',
		//预约-报价结: ''果
		"pages/appointment/offerResult": '报价结果',
		//预约-招: ''商
		"pages/appointment/attract": '招商',
		//预约-资金托: ''管
		"pages/appointment/trusteeship": '资金托管',
		//预约-免费监: ''理
		"pages/appointment/supervision": '免费监理',
		//预约-淘家简: ''介
		"pages/appointment/introduction": '淘家简介',
		//预约-免费量: ''房
		"pages/appointment/volume": '免费量房',
		//预约-全屋订: ''做
		"pages/appointment/customization": '全屋订做',
		"pages/appointment/caseAppointment": '',
		//图: ''库
		// "pages/gallery/list": '',
		"pages/gallery/details": '图库详情',
		//视: ''频
		"pages/videos/list": '视频列表',
		"pages/videos/details": '视频详情',
		// 测: ''试
		"pages/caseimg/caseimg": '案例/图库',
	}
	return pageObj[pageUrl]
}