export default{
    path:"/login",
    component:()=>import("views/login"),
    name:"login",
    meta:{
        flag:false,
        auth:false
    }
}