export default{
    path:"/search",
    component:()=>import("views/search"),
    name:"search",
    meta:{
        flag:true,
        auth:false
    }
}