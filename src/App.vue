<template>

  <div id="app">  
    <keep-alive>
       <router-view></router-view> 
    </keep-alive>
   
    <TabBar v-if="$route.meta.flag" />  
 
  </div>
</template>

<script> 
import {MessageBox} from "lib/message/index.js"
import TabBar from "common/tabBar" 
 import http from "utils/http.js"   

export default {
  name:"APP",
  components:{
    TabBar,  
  },
  created(){
    // MessageBox({
    //   title:"最美城市",
    //   message:"中国",
    //   // 点击之后需要做的逻辑
    //   handleOk(){
    //     alert("OK");
    //   },
    //   handleCancel(){
    //     alert("NO")
    //   } 
    // })
  // https://m.228.cn/server/person/order/list.json
    // http("get","/server/subject/detail-xiechunhua0621.json").then((data)=>{
    //   console.log(data)
    // })

  }

  
}
</script>

<style lang="scss">
#app {
  height:100%;
}
</style>
