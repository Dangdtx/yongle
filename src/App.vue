<template>
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
export default {
  name:"APP",
  components:{
    TabBar,
    Loading
  },
  created() {
    http("get","/server/category/default.json").then((data)=>{
      // console.log(data);
      
    })
  },
  
}
</script>

<style lang="scss">

</style>
