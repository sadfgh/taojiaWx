import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		getCount(state , sum){
			return state.count = state.count + sum
		}
	},
	actions:{
		getSum(context , sum){
			context.commit('getCount' , sum)
		}
	}
	
})
export default store