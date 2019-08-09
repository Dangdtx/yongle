 export default{
     path:"/home",
     component:()=>import("views/home"),
     name:"home",
     meta:{
         tabBar:true,
         auth:false
     }
 }