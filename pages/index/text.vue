<template>
	<view class="">
		<scroll-view :scroll-into-view="toView" scroll-x="true" class="a" scroll-with-animation >
			<view  class="a-1">
				<view :id="'a'+index" v-for="(item , index) in navData" :key="index" @click="getCurrent(index,item.type)" :class="{'a2h':index === current,'a-2':true}">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<swiper :current="current" :style="{height:(1000+50)+'px'}"  @change="setCurrent" >
			<swiper-item  v-for="(item , index) in navData" :key="index">
				<!-- <view class="class-content">
				</view> -->
				<!-- <WaterfallsFlow @getHeight="getHeight" class="home-data" :wfList='list' @itemTap="itemTap" /> -->
				<!-- {{requiredData}} -->
				
				<view class="" style="width: 100%;height: 200rpx;background-color: #007AFF;margin: 40rpx;" v-for="(item , index) in requiredData" :key="index">
					<view class="">
						{{item.image}}
					</view>
					<view class="">
						{{item.avatar}}
					</view>
					<view class="">
						{{item.nickName}}
					</view>
					
				</view>
				
				
				<!-- <view class="wf-page"> -->
					<!--    left    -->
					<!-- <view>
						<view id="left" >
							<view v-for="(item,index) in leftList" :key="index" 
							class="wf-item" >
								<view class="wf-item-page">
									<image :src="item.image" mode="widthFix" class="item-img" />
									<view class="item-info">
										<image :src="item.avatar" mode="aspectFill" class="info-avatar" />
										<view class="info-nickname">{{item.nickName}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				 -->
				
					<!--    right    -->
					<!-- <view>
						<view id="right">
							<view v-for="(item,index) in rightList" :key="index" 
							class="wf-item" >
								<view class="wf-item-page">
									<image :src="item.image" mode="widthFix" class="item-img" />
									<view class="item-info">
										<image :src="item.avatar" mode="aspectFill" class="info-avatar" />
										<view class="info-nickname">{{item.nickName}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				 -->
				
				
				
				
				
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				toView:'',//锚点
				current:0,//当前索引
				allList:[
					{
						type:"phone",
						phone:[
							{
								
								nickName:'rFonz'
							},
							{
								avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/11/21/25/imp-5288348_960_720.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					{
						type:"slabe",
						slabe:[
							{
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								nickName:'phil454'
							},
							{
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
							},
							{
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								nickName:'GDJ'
							},
							{
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
							}
						]
					},
					{
						type:"desktop",
						desktop:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								nickName:'freephotocc'
							},
							{
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
							}
						]
					},
					{
						type:"laptop",
						laptop:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								},
							{
								avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
								nickName:'GDJ'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					{
						type:"earplug",
						earplug:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2015/10/12/02-06-28-605_250x250.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/11/21/25/imp-5288348_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
								nickName:'GDJ'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					{
						type:"capacitance",
						capacitance:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2015/10/12/02-06-28-605_250x250.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/11/21/25/imp-5288348_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
								nickName:'GDJ'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					{
						type:"mouse",
						mouse:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2015/10/12/02-06-28-605_250x250.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/11/21/25/imp-5288348_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
								nickName:'GDJ'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					{
						type:"television",
						television:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2015/10/12/02-06-28-605_250x250.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/11/21/25/imp-5288348_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
								nickName:'GDJ'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					{
						type:"sound",
						sound:[
							{
								image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2015/10/12/02-06-28-605_250x250.jpg',
								nickName:'rFonz'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
								nickName:'VlacK_HammeR'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/11/21/25/imp-5288348_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
								nickName:'Alexas_Fotos'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
								avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
								nickName:'phil454'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/06/04/16/table-5265190_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
								nickName:'NickyPe'
							},
							{
								image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
								nickName:'freephotocc'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
								avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
								nickName:'GDJ'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/03/16/30/wave-5255593_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
								nickName:'pasja1000'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
								nickName:'Syaibatulhamdi'
							},
							{
								image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
								avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
								nickName:'matthiasboeckel'
							}
						]
					},
					
				],
				
				
				
				viewHeight:0,//内容高度
				leftList:[],//左边列表
				rightList:[],//右边列表
				mark:0,
				boxHeight:[],//存高度
				navData:[
					{
						index:0,
						name:"手机",
						type:"phone"
					},
					{
						index:1,
						name:"平板电脑",
						type:"slabe"
					},
					{
						index:2,
						name:"台式电脑",
						type:"desktop"
					},
					{
						index:3,
						name:"笔记本电脑",
						type:"laptop"
					},
					{
						index:4,
						name:"音响",
						type:"sound"
					},
					{
						index:5,
						name:"耳塞",
						type:"earplug"
					},
					{
						index:6,
						name:"电宝",
						type:"capacitance"
					},
					{
						index:7,
						name:"鼠标",
						type:"mouse"
					},
					{
						index:8,
						name:"电视机",
						type:"television"
					},
				],
				requiredData:[]
			}
		},
		methods:{
			itemTap(item){
				console.log(item);
			},
			getCurrent(index,type){
				this.requiredData = [];
				this.current = index
				console.log(index)
				console.log(type)
				this.allList.forEach(item =>{
					// console.log(item)
					if(type === item.type){
						// this.requiredData = item[type]
						this.requiredData = JSON.parse(JSON.stringify(item[type]))
						// console.log(item[type])
						console.log(this.requiredData)
					}
				})
				
			},
			setCurrent(e){
				this.toView = ''
				this.current = e.detail.current
				this.toView = 'a'+(e.detail.current/2)
			}
		}
	}
</script>

<style scoped lang="scss">
	.a{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 10rpx;
		margin-top: 20rpx;
		background-color: #f7f7f7;
		white-space: nowrap;
		.a-1{
			display: flex;
			align-items: flex-start;
			.a-2{
				flex: 1;
				// height: 60rpx;
				margin: 0 20rpx;
				// border: 1rpx solid #4CD964;
			}
			.a2h{
				// border-bottom: 4rpx solid #007AFF;
				color: #e95504;
			}
		}
	}
	
	
</style>
