export default{
    path:"/list/:PATH",
    component:()=>import("views/list"),
    name:"list",
    meta:{
       flag:false,
       auth:false
   },
   props:true
}