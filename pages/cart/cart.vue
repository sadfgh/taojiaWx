<template>
	<view class="page">
		<comSwiper/>
		
			<checkbox-group  @change="changeCheckbox">
				<view class="cart" v-for="(item , index) in catList" :key="index">
					<view  class="cart-card">
						<view class="commodity-img">
							<view class="aa" >
								<checkbox  :value="String(item.value)" :checked="checkedArr.includes(String(item.value))" :class="{'checked':checkedArr.includes(String(item.value))}"/>
							</view>
							<view class="bb">
								<image :src="item.img" mode="widthFix"></image>
							</view>
						</view>
						<view class="commodity-content">
							<view class="com-message">
								<view class="">
									{{item.name}}
								</view>
								<view class="">
									{{item.specification}}
								</view>
								<view class="">
									{{item.price}}
								</view>
							</view>
							<view class="number">
								
								<uni-number-box  style="margin-right: 0;" :min="1"  @change="bindChange($event,index)" ></uni-number-box>
							</view>
						</view>
					</view>
				</view>
			</checkbox-group>
			
			
			<view class="statement-box">
				<view class="statement-price">
					<view class="st-flex st-rad">
						<checkbox-group @change="allChoose">
						    <label>
						        <checkbox value="all" :class="{'checked':allChecked}" :checked="allChecked?true:false"></checkbox> 全选
						    </label>
						</checkbox-group>
					</view>
					<view class="st-flex st-price">
						合计：￥{{total}}
					</view>
					<view class="st-flex st-from">
						<button >结算</button>
					</view>
				</view>
			</view>
			
			
	</view>
</template>

<script>
	import comSwiper from '../../components/comSwiper/comSwiper.vue';
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue";
	export default {
	    data () {
	      return {
			  number:[],
			  total:'0.00',
			  isNumber:false,
			 checkedArr:[], //复选框选中的值
			 allChecked:false, //是否全选
			  catList:[
				  {
					  name:"小米10探索版258G",
					  img:"../../static/logo.png",
					  specification:"高配",
					  price:36990.88,
					  quantity:1,
					  status:0,
					  value:0
				  },
				  {
					  name:"小米11探索版520G",
					  img:"../../static/logo.png",
					  specification:"高配",
					  price:56870.88,
					  quantity:1,
					  status:0,
					  value:1
				  },
				  {
					  name:"小米12探索版1024G",
					  img:"../../static/logo.png",
					  specification:"高配",
					  price:99990.99,
					  quantity:1,
					  status:0,
					  value:2
				  }
			  ]
	      }
	    },
		components:{
			comSwiper,
			uniNumberBox
		},
		created() {
			// this.catList.forEach((item)=>{
			// 	item.isChecked = true
			// })
		},
	    methods: {
			returnFloat(value){
			 var value=Math.round(parseFloat(value)*100)/100;
			 var xsd=value.toString().split(".");
			 if(xsd.length==1){
			 value=value.toString()+".00";
			 return value;
			 }
			 if(xsd.length>1){
			 if(xsd[1].length<2){
			 value=value.toString()+"0";
			 }
			 return value;
			 }
			},
			
			calcTotal(){
				this.total = 0;
				let total = 0;
				this.catList.forEach((item) => {
					if(item.status === 1){
						total  += (item.price*100*item.quantity)/100
					}
				})
				this.total = this.returnFloat(total) 
				console.log(this.total)
			},
			
			// 多选复选框改变事件
			changeCheckbox(e){
					console.log(e)
				    this.checkedArr = e.detail.value;
					console.log(this.checkedArr);
					if(this.checkedArr.length>0){
						this.catList.forEach((item) =>{
							item.status = 0
						})
						this.checkedArr.forEach((item) => {
							this.catList[item].status = 1
						})
						this.calcTotal()
					}else if(this.checkedArr.length === 0){
						this.total = 0;
						this.total = '0.00'
					}
				    // 如果选择的数组中有值，并且长度等于列表的长度，就是全选
				    if(this.checkedArr.length>0 && this.checkedArr.length==this.catList.length){
				        this.allChecked=true;
				    }else{
				        this.allChecked=false;
				    }
			},
			// 全选事件
			allChoose(e){
			    let chooseItem = e.detail.value;
			    // 全选
				this.total = 0;
				
				console.log(e)
				console.log(chooseItem)
			    if(chooseItem[0]=='all'){
			        this.allChecked=true;
					let quellTotal = 0
			        for(let item of this.catList){
			            let itemVal=String(item.value);
						
						quellTotal += (item.price*100*item.quantity)/100
						
						
						console.log(itemVal)
			            if(!this.checkedArr.includes(itemVal)){
			                this.checkedArr.push(itemVal);
			            }
			        } 
					this.total = this.returnFloat(quellTotal);
				   console.log(this.total)
			    }else{
			        // 取消全选
			        this.allChecked=false;
			        this.checkedArr=[];
					this.total = '0.00';
			    }
			},
			
			bindChange(e , index){
				
				  this.catList[index].quantity = e
				  this.calcTotal();
				  
			}
		
	    }
	}
</script>

<style lang="scss" scoped>
.page{
		width: 100%;
		height: 100vh;
		// overflow: hidden;
		background-color: #f7f7f7;
		position: relative;
		
	}
.cart{
	width: 100%;
	height: 200rpx;
	background-color: #FFFFFF;
	margin-top: 20rpx;
}
	
.cart-card{
	width: 710rpx;
	height: 100%;
	margin: 0 auto;
	display: flex;
}	

.commodity-img{
	flex: 1;
	height: 200rpx;
	line-height: 200rpx;
	display: flex;
	.aa{
		flex: 1;
	}
	.bb{
		flex: 3;
		height: 100%;
		line-height: 200rpx;
		image{
			width: 150rpx;
			height: 150rpx;
			margin-top: 25rpx;
		}
	}
	
	radio{
		// width: 58rpx;
		// height: 58rpx;
		
	}
	
}

.commodity-content{
	flex: 2;
	height: 100%;
}

.com-message{
	width: 100%;
	height: 125rpx;
	margin-top: 25rpx;
}

.number{
	width: 148rpx;
	height: 44rpx;
	float: right;
	margin-right: 0rpx;
	margin-bottom: 20rpx;
}


.statement-box{
	position: fixed;
	bottom: 0;
	height: 100rpx;
	background-color: #FFFFFF;
}

.statement-price{
	margin-left: 20rpx;
	width: 730rpx;
	display: flex;
	height: 100%;
	background-color: #FFFFFF;
}

.st-flex{
	height: 100rpx;
	line-height: 100rpx;
}

.st-rad{
	flex: 2;
}
.st-price{
	flex: 3;
}
.st-from{
	flex: 2;
}



</style>
