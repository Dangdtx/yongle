<template>
<<<<<<< HEAD
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
=======
  <div id="app">
    
    <router-view></router-view>
    
    <TabBar v-if="$route.meta.tabBar"/>
    <loading/>
  </div>
</template>

<script>
import TabBar from './common/tabBar'
import http from "utils/http.js"
import Loading from "./lib/loading"
>>>>>>> yang
export default {
  name:"APP",
  components:{
<<<<<<< HEAD
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
=======
    TabBar,
    Loading
  },
  created() {
    http("get","/server/category/default.json").then((data)=>{
      // console.log(data);
      
    })
  },
>>>>>>> yang
  
}
</script>

<style lang="scss">
<<<<<<< HEAD
#app {
  height:100%;
}
 
=======

>>>>>>> yang
</style>
