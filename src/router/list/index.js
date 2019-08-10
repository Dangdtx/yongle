export default{
    path:"/list/:path",
    component:()=>import("views/list"),
    name:"list",
    meta:{
       flag:false,
       auth:false
   },
   props:true
}