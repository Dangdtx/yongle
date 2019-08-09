export default {
    path:"/second",
    component:()=>import("views/second"),
    name:"second",
    meta:{
        tabBar:true,
        auth:false
    },
}