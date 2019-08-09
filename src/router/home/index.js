 export default{
     path:"/home",
     component:()=>import("views/home"),
     name:"home",
     meta:{
        flag:true,
        auth:false
    }
 }