export default{
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        flag:true,
        auth:true
    }
}