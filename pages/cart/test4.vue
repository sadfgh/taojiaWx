<template>
	<view class="box">
		<view class="left">
			<view class="">
				<view  class="Left_list">
					项目进度
				</view>
				<view  class="Left_list">
					负责人
				</view>
			</view>
			<block v-for="(item, index) in sideList" :key="index">
				<view >
					<view  class="Left_list">
						{{item.node}}
					</view>
					<view  class="Left_list">
						{{item.principal}}
					</view>
				</view>
			</block>
		</view>
		<view class="table">
			<scroll-view scroll-x >
				<view class="" style="width: 2000px;height: 100%; background: #F0AD4E;">
					大家好，我叫小马哥，大家都叫我小马哥
				</view>
				<!-- <view class="header" v-for="(item, index) in listData" :key="index">
					
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			sideList:[],
			 allData:{
				  projectCyde:{
					starTime:"2020-06-20",
					endTime:"2020-12-12"
				  },
				  projectDetails:[
					{
					  node:"拆改",
					  principal:"张工",
					  starTime:"2020-06-20",
					  endTime:"2020-07-05",
					  state:"完成"
					},
					{
					  node:"水电",
					  principal:"李工",
					  starTime:"2020-07-02",
					  endTime:"2020-07-20",
					  state:"完成"
					},
					{
					  node:"泥工",
					  principal:"王工",
					  starTime:"2020-07-04",
					  endTime:"2020-08-25",
					  state:"未完成"
					},
					{
					  node:"油漆",
					  principal:"张工",
					  starTime:"2020-06-26",
					  endTime:"2020-09-05",
					  state:"未完成"
					},
					{
					  node:"竣工",
					  principal:"林工",
					  starTime:"2020-09-06",
					  endTime:"2020-09-25",
					  state:"未完成",
					},
					{
					  node:"拆改",
					  principal:"张工",
					  starTime:"2020-06-20",
					  endTime:"2020-07-05",
					  state:"完成"
					},
					{
					  node:"水电",
					  principal:"李工",
					  starTime:"2020-07-02",
					  endTime:"2020-07-20",
					  state:"完成"
					},
					{
					  node:"泥工",
					  principal:"王工",
					  starTime:"2020-07-04",
					  endTime:"2020-08-25",
					  state:"未完成"
					},
					{
					  node:"油漆",
					  principal:"张工",
					  starTime:"2020-06-26",
					  endTime:"2020-09-05",
					  state:"未完成"
					},
					{
					  node:"竣工",
					  principal:"林工",
					  starTime:"2020-09-06",
					  endTime:"2020-09-25",
					  state:"未完成"
					},
			  ]
			},
			
		};
	},
	onPageScroll(e){
		console.log("滚动页面了")
		console.log(e.scrollTop)
	},
	mounted() {
		this.getSideList();
		this.textList();
	},
	methods: {
		getSideList(){
			let sideList = this.allData.projectDetails;
			sideList.forEach((item) =>{
				this.sideList.push({node:item.node,principal:item.principal})
			})
			console.log(this.sideList)
		},
		textList(){
			let arr = [5,4,9,7,3,5,9,1,2,7,5,4,6,8,3];
			let obj = {}
			for(let i=0;i<arr.length;i++){
				console.log(arr[i])
				console.log(obj.arr[i])
				obj.arr[i] = arr[i]
				console.log('走了吗')
				console.log(obj)
			}
			console.log(obj)
		}
	}
};
</script>
<style lang="less" scoped>
page {
	font-size: 25upx;
	padding: 10upx;
}

.box {
	display: flex;
	margin-left: 34px;
}

.left {
	width: 190upx;
	view:nth-last-of-type(1) {
		border-bottom: 1upx solid #c8c7cc;
	}
	.Left_list {
		height: 80upx;
		width: 180upx;
		text-align: center;
		line-height: 80upx;
		border: 1upx solid #c8c7cc;
		border-bottom: 0;
		border-right: 0;
	}
}

.table {
	white-space: nowrap;
	overflow: hidden;
	height: 100%;
	border: 1upx solid #c8c7cc;
	border-bottom: 0;
	.header {
		width: 190upx;
		text-align: center;
		display: inline-block;
		view {
			height: 80upx;
			border: 1upx solid #c8c7cc;
			border-top: 0;
			border-left: 0;
			line-height: 80upx;
		}
		.table_one {
			border-top: 0;
			border-left: 0;
			position: relative;
			.table_one_img {
				position: absolute;
				left: 0;
				top: 20upx;
				width: 5upx;
				height: 40upx;
				margin-right: 20upx;
			}
		}
	}
}

.border {
}
</style>
