import Vue from "vue"
Vue.filter("ToImg",(path)=>{
    return "//static.228.cn"+path
})
                                             
Vue.filter("ToTime",(time)=>{
    return time.split(" ")[0].toString().slice(5).replace(/\-/,'.')
  
})


Vue.filter("changePage",(path)=>{
    return "//static.228.cn"+path+'!t90x120.jpg'
})

///upload/2019/01/26/AfterTreatment/1548472238451_x0w5-0.jpg
////static.228.cn/upload/2019/01/26/AfterTreatment/1548472238451_x0w5-0.jpg!t90x120.jpg

// /upload/2019/08/02/AfterTreatment/1564714174617_o9b4-0.jpg
////static.228.cn/upload/2019/08/02/AfterTreatment/1564714174617_o9b4-0.jpg



//   //static.228.cn/upload/2015/01/09/AfterTreatment/1420773063918_f8t7-0.jpg
//    /upload/2015/01/09/AfterTreatment/1420773063918_f8t7-0.jpg


// ///static.228.cn/upload/2018/12/05/1543981079826_x7h7.png
///upload/2018/12/05/1543981079826_x7h7.png"