
import http from "utils/http.js"

// 详情
export const list_trick = (path)=>http("get","/server/subject/detail"+path)

// https://m.228.cn/server/subject/detail-xihabaofupu1019.json   URL: "/xihabaofupu1019"