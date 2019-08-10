<template>
  <div id="app">   
       <router-view></router-view>  
   
    <TabBar v-if="$route.meta.flag" />  
 
  </div>
</template>

<script> 
import {MessageBox} from "lib/message/index.js"
import TabBar from "common/tabBar" 
 import http from "utils/http.js"   
export default {
  name:"App",
  components:{
    TabBar,  
  },
  created(){
   
  }
  
}
</script>


<style lang="scss">
#app {
  height:100%;
}
 
</style>
