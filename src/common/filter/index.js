import Vue from 'vue'

Vue.filter("toimg",(path,info)=>{
    return path + info;
})