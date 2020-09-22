<template>
  <div class="wrapper">
    <web-view :src="url" @message="getMessage"></web-view>
  </div>
</template>

<script>
import { webviewUrl } from "@/config";
import { newphotoDomain, photoBase, photoDomain } from "@/config";
const defaultUrl = '/pages/webviews/appointment/introduction';
export default {
  components: {},
  data() {
    return {
      photoDomain: "https://shop.itaojia.com/img/small_program/appointment",
      url: webviewUrl + '/#/pages/h5/introduction',
      resultObj: {
        title: '放心装修上淘家',
        path: defaultUrl
      }
    };
  },
  props: {},
  watch: {},
  onLoad(options) {
  //   this.url += '?source=' + this.source;
  //   let userInfo = uni.getStorageSync('user');
		// if (typeof userInfo === 'string')
		// 	userInfo = JSON.parse(userInfo)
  //   this.url += '&userId=' + userInfo.userId;
  //   if (options && options.childPath) {
  //     this.url = decodeURIComponent(options.childPath)
  //   }
  },
  onShow() {
    // #ifdef MP-BAIDU
    swan.setPageInfo({
      title: "淘家",
      keywords: "佛山,装修,资讯,全屋装修设计，梁工,装饰,家居建材,施工,O2O",
      description:
        "平台为消费者提供从线上线下对全屋装修设计、家居建材及施工 提供整套解决方案，是泛家居行业实体销售网络的创新型O2O领航企业",
      image: [
        "https://shop.itaojia.com/img/small_program/assets/index/banner-index-1-n.jpg",
        "https://shop.itaojia.com/img/small_program/assets/index/banner-index-2-n.jpg",
        "https://shop.itaojia.com/img/small_program/assets/index/banner-index-3-n.jpg"
      ]
    });
    // #endif
  },
  onShareAppMessage(res) {
    return this.resultObj;
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * 获取webView中返回的数据
     */
    getMessage(options) {
      const data = options.detail.data[options.detail.data.length - 1];
      if (data.url)
        this.resultObj.path = defaultUrl + '?childPath=' + encodeURIComponent(data.url);
      if (data.imageUrl)
        this.resultObj.imageUrl = data.imageUrl;
      if (data.title)
        this.resultObj.title = data.title
    }
  }
};
</script>
<style lang="css" scoped>
.wrapper {
}
</style>
