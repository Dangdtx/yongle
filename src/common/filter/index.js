import Vue from "vue";
Vue.filter("ToImg",(path,info)=>{
    return info + path ;
})
Vue.filter("ToArray",(time)=>{
    return  time.split(" ")[0]
})
Vue.filter("ToAddress",(time)=>{
    return  time.split(" ")[0].split("-")[1] +":"+ time.split(" ")[0].split("-")[2]
})
// //static.228.cn/upload/2018/07/27/1532681634284_l7u8_m1.jpg
// "/upload/2018/07/27/1532681634284_l7u8_m1.jpg"