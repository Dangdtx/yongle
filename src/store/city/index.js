
import {city_api} from "api/city.js"

const state = {
    cityHot:[],
    cityList:[]
}
// 异步操作获取列表
const actions={
    async handleGetActions({commit}){
         let data = await city_api();  
         commit("handleMutations",data )
    }
}
const mutations={
    handleMutations(state,data){
         state.cityHot = data.data.hotCitys 
        let city = data.data.fcitys
        console.log(city) 
        let citylist =[]//cityList   [{index:1,list[{cityId:"",cityName:""},]}]
        for(var i = 0 ; i < city.length;i++){ 
            let letterFirst =( city[i].CITYJX).substr(0,1).toUpperCase(); 
            if(isExist(letterFirst)){ //如果存在就把  就找打对应的citylist对应的idnex中   添加近去
                for(var j = 0 ; j<citylist.length;j++){
                    if(letterFirst == citylist[j].index){
                        citylist[j].list.push({cityId:city[i].FCONFIGID,cityName:city[i].JXNAME})
                        break;
                    }
                } 
            }else{//当idnex不存在的时候
                citylist.push({index:letterFirst,list:[{cityId:city[i].FCONFIGID,cityName:city[i].JXNAME}]})
                
            }
            
        }
        console.log(citylist)

        // 【判断citylist中index是否存在
        function isExist (letterFirst){
            let bStop = false;
            for(var i = 0;i<citylist.length;i++){  
                if(citylist[i].index == letterFirst){
                    bStop = true ;
                    break;
                } 
            }
            return bStop;
        }
        





    }
}
export default {
    state,
    actions,
    mutations,
    namespaced:true
} 