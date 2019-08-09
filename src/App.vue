<template>
  <div id="app"> 
    <router-view></router-view>
    <TabBar />  
  </div>
</template>

<script> 
import TabBar from "common/tabBar" 
 import http from "utils/http.js" 


export default {
  name:"App",
  components:{
    TabBar, 
  },
  created(){
    http("get","/server/content/unionHead.json").then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    });
  }
  
}
</script>


<style lang="scss">
 
</style>
