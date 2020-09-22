<template>
	<view class="page">
		<!-- 轮播图 -->
		<comSwiper/>
		<view class="index">
			<Activity/>
			<view class="bottom-content">
				
				<view class="mian-classify">
					<view class="fixed" v-show="isFixed">
						<scroll-view :scroll-into-view="toView" scroll-x="true" class="a" scroll-with-animation >
							<view  class="a-1">
								<view :id="'a'+index" v-for="(item , index) in navData" :key="index" @click="getCurrent(index,item.type)" :class="{'a2h':index === current,'a-2':true}">
									{{item.name}}
								</view>
							</view>
						</scroll-view>
					</view>
					<scroll-view :scroll-into-view="toView" scroll-x="true" class="nav-top" scroll-with-animation>
						<view  class="a-1">
							<view :id="'a'+index" v-for="(item , index) in navData" :key="index" @click="getCurrent(index,item.type)" :class="{'a2h':index === current,'a-2':true}">
								{{item.name}}
							</view>
						</view>
					</scroll-view>
					<swiper :current="current" :style="'height: '+ (viewHeight+45) +'px;'"  @change="setCurrent" >
						<swiper-item v-for="(item , index) in navData" :key="index" >
								<view class="wf-page">
									<!--    left    -->
									<view>
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
								
								
									<!--    right    -->
									<view>
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
								
							<!-- </scroll-view> -->
						</swiper-item>
					</swiper>
				</view>
			</view>
			
			
			
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	import Activity from '../../components/activity/activity.vue';
	import comSwiper from '../../components/comSwiper/comSwiper.vue'
	export default {
		data() {
			return {
				toView:'',//锚点
				current:0,//当前索引
				isFixed:false,//固定导航栏
				top:0,//导航栏到顶部距离
				pageScroll:0,
				phone:[
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
						nickName:'Alexas_Fotos'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
						nickName:'Alexas_Fotos'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
						nickName:'Alexas_Fotos'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
						nickName:'Alexas_Fotos'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
						nickName:'Alexas_Fotos'
					},
					{
						image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
						avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
						nickName:'phil454'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/13/19-29-33-253_250x250.jpg',
						nickName:'NickyPe'
					},
					{
						image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
						nickName:'freephotocc'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/05/23/12-55-39-456_250x250.jpg',
						nickName:'pasja1000'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
						nickName:'matthiasboeckel'
					}
				],
				slabe:[
					
					{
						image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
						avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
						nickName:'phil454'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
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
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
						nickName:'Syaibatulhamdi'
					},
					{
						image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
						nickName:'matthiasboeckel'
					}
				],
				desktop:[
				
					{
						image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
						nickName:'VlacK_HammeR'
					},
					{
						image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/06/10/08-34-47-445_250x250.jpg',
						nickName:'Alexas_Fotos'
					},
					
					{
						image:'https://cdn.pixabay.com/photo/2020/06/08/05/28/vortex-5273023_960_720.png',
						avatar:'https://cdn.pixabay.com/user/2015/12/02/23-35-18-266_250x250.png',
						nickName:'GDJ'
					},
					
					{
						image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
						nickName:'Syaibatulhamdi'
					},
					
				],
				laptop:[
					
					{
						image:'https://cdn.pixabay.com/photo/2020/06/08/22/10/couple-5276245_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/04/02/05-34-12-636_250x250.jpg',
						nickName:'VlacK_HammeR'
					},
					
					{
						image:'https://cdn.pixabay.com/photo/2020/06/10/01/32/cumulonimbus-5280578_960_720.jpg',
						avatar:'https://pixabay.com/static/img/profile_image_dummy.svg',
						nickName:'phil454'
					},
					{
						image:'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2017/08/03/10-16-32-389_250x250.png',
						nickName:'freephotocc'
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
				],
				earplug:[
					{
						image:'https://cdn.pixabay.com/photo/2015/10/21/03/44/beach-998788_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2015/10/12/02-06-28-605_250x250.jpg',
						nickName:'rFonz'
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
						image:'https://cdn.pixabay.com/photo/2020/05/28/08/00/girl-5230306_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg',
						nickName:'Syaibatulhamdi'
					},
					{
						image:'https://cdn.pixabay.com/photo/2020/06/10/09/19/cake-5281948_960_720.jpg',
						avatar:'https://cdn.pixabay.com/user/2018/01/25/18-40-42-65_250x250.jpg',
						nickName:'matthiasboeckel'
					}
				],
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
				],
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
				],
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
				],
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
				],
				
				allList:[
					{
						type:"phone",
						
					},
					{
						type:"slabe",
						
					},
					{
						type:"desktop",
						
					},
					{
						type:"laptop",
					
					},
					{
						type:"earplug",
						
					},
					{
						type:"capacitance",
						
					},
					{
						type:"mouse",
						
					},
					{
						type:"television",
						
					},
					{
						type:"sound",
						
					},
					
				],
				
				newsitems: [],
				scrollH:700,
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
		computed:{
			
		},
		components:{
			Activity,
			comSwiper
		},
		onLoad() {
			
		},
		created() {
			// 获取可视高度
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight 
				}
			})
			
			this.__init();
			
			
			const query = uni.createSelectorQuery().in(this);
				query.select(".nav-top").boundingClientRect(res=>{
					console.log(res)
					//获取导航栏到顶部的距离
					this.top = res.top
				}).exec();
			
		},
		mounted() {
			this.waterFall();
		},
		watch:{
			mark(){
				const len = this.requiredData.length;
				if(this.mark < len && this.mark !== 0){
					 this.waterFall();
				}
			}
		},
		//监听滚动钩子
		onPageScroll(res){
			//判断固定距离
			this.pageScroll = res.scrollTop
			if(res.scrollTop> this.top){
				console.log("置顶")
				 this.isFixed = true
			}else{
				console.log("不置顶")
				this.isFixed = false
			}
		},
		
		methods: {
			
			// 初始化事件
			__init() {
				// 获取顶部选项卡
				// this.tabBars = demotabBars
				// 根据顶部选项卡生成页面
				let arr = []
				for (let i = 0; i < this.navData.length; i++) {
					let obj = { // 存放页面的对象
						list: [],
						// 1.上拉加载更多 2.加载中... 3.没有更多了
						loadtext: "上拉加载更多",
					}
					if (i === 0) {
						obj.list = this.phone
					}
					arr.push(obj)
				}
				console.log(arr)
				this.newsitems = arr
				console.log(this.newsitems)
				this.requiredData = this.newsitems[0].list
			},
			
			
			
			
		 getViewHeight(leftOrRight){
				const query = uni.createSelectorQuery().in(this);
				const id = leftOrRight ? '#right' : '#left';
				 setTimeout(()=>{
					query.select(id).boundingClientRect(res=>{
						// console.log(res)
						this.boxHeight[leftOrRight] = res.height;
						// console.log("这里存的是高度：")
						// console.log(this.boxHeight)
						
						this.mark = this.mark + 1;
					}).exec();
				},50)
				// this.waterFall()
			},
		 waterFall(){
				const i = this.mark;
				// console.log("康康这是啥："+i)
				if(i === 0){
					this.leftList.push(this.requiredData[i]);
					// console.log("这是存左边列表的数组：")
					// console.log(this.leftList)
					 this.getViewHeight(0);
				}else if(i === 1){
					this.rightList.push(this.requiredData[i]);
					// console.log("这是存右边列表的数组：")
					// console.log(this.rightList)
					 this.getViewHeight(1);
				}else {
					// console.log("判断第一个值是否大于第二个值")
					const leftOrRight = this.boxHeight[0] > this.boxHeight[1] ? 1 : 0;
					
					if(this.boxHeight[0]>this.boxHeight[1]){
						this.viewHeight = 0
						this.viewHeight = this.boxHeight[0]
					}else{
						this.viewHeight = 0
						this.viewHeight = this.boxHeight[1]
					}
					
					// console.log(leftOrRight)
					if(leftOrRight){this.rightList.push(this.requiredData[i])}
					else{this.leftList.push(this.requiredData[i])}
					 this.getViewHeight(leftOrRight);
				}
			},
			
			
			
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
						this.waterFall()
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

<style lang="scss">
	.fixed{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		margin-top: 0px !important;
		border-radius: 0px !important;
	}
	.page{
		width: 100%;
		background-color: #f7f7f7;
		position: relative;
		
	}
	.index{
		position: absolute;
		left: 20rpx;
		width: 710rpx;
		height: 100vh;
	}
	
	.a{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 10rpx;
		background-color: #f7f7f7;
		white-space: nowrap;
		.a-1{
			display: flex;
			align-items: flex-start;
			.a-2{
				flex: 1;
				margin: 0 20rpx;
			}
			.a2h{
				color: #e95504;
			}
		}
	}
	
	
	.nav-top{
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
				margin: 0 20rpx;
			}
			.a2h{
				color: #e95504;
			}
		}
	}
	
	
	
	.wf-page{
		width: 730rpx;
		height: 100%;
		display: flex;
	}
	
	.wf-item{
	  width: 355rpx;
	  margin-right: 20rpx;
	  margin-bottom: 20rpx;
	}
	
	
	
	.wf-item-page{
		background: #fff;
		overflow: hidden;
		border-radius: 5px;
	}
	
	.item-img{
		width: 100%;
	}
	
	.item-info{
		display: flex;
		align-items: center;
		padding: 5px;
	}
	
	.info-avatar{
		width: 25px;
		height: 25px;
		border-radius: 50%;
		margin-right: 5px;
	}
	
	.info-nickname{
		font-size: 12px;
		color: #333;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// .class-content{
	// 	width: 730rpx;
	// 	height: 100vh;
	// 	background-color: #F0AD4E;
	// }
</style>
