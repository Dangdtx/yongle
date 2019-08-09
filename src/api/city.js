import http from "utils/http.js";

export const  city_api = ()=>http("get","/server/content/city/list.json")
// 城市列表https://m.228.cn/server/content/getCityByName.json
//http://m.228.cn/server/content/city/list.json