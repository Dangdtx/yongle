import http from "utils/http.js"

// 详情
export const detail_trick = (path , pid)=>http("get","/server/product/ticket-"+ path+".json" ,{pid:pid})

//https://m.228.cn/server/product/ticket-586212454.json?  //需要
//https://m.228.cn/server/product/ticket-586212454.json?pid=586212454.html
//