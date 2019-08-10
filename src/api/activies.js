import http from "utils/http.js"

// 活动列表
export const activies_api = (pageNum )=>http("get","/server/subject/list.json", {pageNum:pageNum} )
export const activies2_api = (pageNum=2)=>http("get", "/server/subject/more.json" ,{pageNum:pageNum})
export const activies3_api = (pageNum=3)=>http("get", "/server/subject/more.json" ,{pageNum:pageNum})
// 活动二次加载https://m.228.cn/server/subject/more.json?pageNum=2
// 活动三次加载https://m.228.cn/server/subject/more.json?pageNum=3