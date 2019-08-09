import http from "utils/http.js"

export const citylist_now_api = ()=>http("get","/server/content/city/list.json")


//https://m.228.cn/server/content/city/list.json

// export const home_now_api = ()=>http("get","/server/content/city/bj.json")

export const home_now_api = (cityJx)=>http("get","/server/content/city/"+cityJx+".json")


//https://m.228.cn/server/content/moreProductPlay.json?fcity=1&pageNum=1&type=1

export const vennus_now_api=(fcity=1,pageNum=1,type=1)=>http("get",
            "/server/content/moreProductPlay.json",
            {fcity:fcity,pageNum:pageNum,type:type})
            

export const narrate_now_api=()=>http("get","/server/opera/list.json")



// 搜索

// https://m.228.cn/server/search/s/.json?type=3

// 搜索a出现的
//https://m.228.cn/server/search/s/a.json

// https://m.228.cn/server/search/s/a.json

// 搜索ddd出现的
// https://m.228.cn/server/search/s/ddd.json

export const search_now_api=(inputVal)=>http("get","/server/search/s/"+inputVal+'.json')

// export const search_now_api=(national,categories,inputVal)=>http("get","/server/search/s/"+national+'-'+categories+'-'+inputVal+'.json')


//搜索栏
//https://m.228.cn/server/search/s/s.json