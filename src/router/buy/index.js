export default {
    path:"/buy",
    component:()=>import("views/buy"),
    name:"buy",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}