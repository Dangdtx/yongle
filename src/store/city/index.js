import {citylist_now_api} from "api/citylist.js"
const state={
    hotCity:[],
    moreCity:[],
    CITYNAME:'北京',
    PRODUCTNUM:"438",
    CITYJX:'bj',
    FCONFIGID:'1',
    pageNum:'1',
    type:'1'
}
const mutations={
    hotCityMutations(state,params) {
        state.hotCity=params;       
    },
    moreCityMutations(state,params) {
        state.moreCity=params; 
    },
    cityToggleMutations(state,params) {
     
        state.CITYNAME=params.CITYNAME,
        state.PRODUCTNUM=params.PRODUCTNUM,
        state.CITYJX=params.CITYJX,
        state.FCONFIGID=params.FCONFIGID
    }
}
const actions={
    async hotCityHandler({commit}){
        let data=await citylist_now_api();     
        commit("hotCityMutations",data.data.hotCitys)  
    },
    async moreCityHandler({commit}) {
        let data =await citylist_now_api();
        commit("moreCityMutations",data.data.fcitys)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced:true
}