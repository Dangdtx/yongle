 export default{
    path:"/order",
    component:()=>import("views/order"),
    name:"order",
    meta:{
        flag:false,
        auth:true
    }
}