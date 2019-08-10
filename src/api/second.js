import http from "utils/http.js"
//舞台
export const second_api = ()=>http("GET","/server/category/default.json")
//搜索接口
// https://m.228.cn/server/search/s/a.json
// https://m.228.cn/server/search/s/aas.json
export const search_api = (someVal)=>http("GET","/server/search/s/"+someVal+".json")
//详情页
// export const detail_api = (pid)=>http("GET","/server/product/ticket-603671727.json?pid=603671727.html")
export const detail_api = (pid)=>http("GET","/server/product/ticket-"+pid+".json",{pid:pid})
//加载更多接口
export const moreSearch_api = ()=>http("GET","/server/search/moreSearch.json")