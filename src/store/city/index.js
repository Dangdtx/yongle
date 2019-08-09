import {second_api} from 'api/second.js'
const state = {
    cityList:[]
}
const mutations = {
    handleToggleCity(state,params){
        console.log(params);
        
    },
}
const actions = {
    async handleGetCityAction({commit}){
        let data = await second_api()
        console.log(data)
        commit("handleGetCityMutation",data.data.fcitys)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}