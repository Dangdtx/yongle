export default {
    path:"/first",
    component:()=>import("views/first"),
    name:"first",
    meta:{
        tabBar:true,
        auth:false
    },
}
