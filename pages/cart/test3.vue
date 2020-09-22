<template>
    <view v-if="tableData.length != 0" class="">
        <mytable :tableHead="tableHead" :centerList="centerList" :tableHeadT="tableHeadT" :tableData="tableData" ></mytable>
    </view>
</template>
<script>
	import mytable from "@/components/mytable/mytable.vue";
	export default {
	    data() {
	        return {
	            tableData:[],
	            tableHead: [
	                {
	                    name:'核心指标'
	                },
	                {
	                    name: '姓名'
	                },
	                {
	                    name: '年龄'
	                },
	                {
	                    name: '颜色'
	                },
	                {
	                    name: '出生地'
	                },
	                {
	                    name: '居住地'
	                },
	                {
	                    name: '高度'
	                },
	                {
	                    name: '宽度'
	                },
	                {
	                    name: '重量'
	                },
	                {
	                    name: '热度'
	                },
	            ],
	            tableHeadT: [
	                {
	                    name: '姓名'
	                },
	                {
	                    name: '年龄'
	                },
	                {
	                    name: '颜色'
	                },
	                {
	                    name: '出生地'
	                },
	                {
	                    name: '居住地'
	                },
	                {
	                    name: '高度'
	                },
	                {
	                    name: '宽度'
	                },
	                {
	                    name: '重量'
	                },
	                {
	                    name: '热度'
	                },
	            ],
	            centerList:[
	                {
	                    name:'行政中心',
	                    bgColor:'#ede8f3'
	                },
	                {
	                    name:'操作中心',
	                    bgColor:'#dff8dc'
	                },
	                {
	                    name:'经营中心',
	                    bgColor:'#d8dbfe'
	                },
	                {
	                    name:'转运中心',
	                    bgColor:'#f9fecf'
	                },
	                {
	                    name:'运营中心',
	                    bgColor:'#f8bbbb'
	                },
	            ],
	        }
	    },
	    components: {
	        mytable
	    },
	    onLoad(options){
	        this.getList()
	    },
	    methods: {
	         getList(){
	            this.tableData = [
	                {
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },
	                {
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },
	                {
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },
	                {
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },
	                {
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },
	                {
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },{
	                    name:'小曾',
	                    age:11,
	                    color:'red',
	                    region:'茂名',
	                    address:'深圳',
	                    height:'170cm',
	                    width:'50cm',
	                    weight:'62kg',
	                    hot:'hot'
	                },
	            ]
	        },
	    }
	};
	
</script>
   


<style lang="scss">
</style>