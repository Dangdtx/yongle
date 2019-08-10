export default ({
    path:"/detail/:id",
    name:"detail",
    component:()=>import("views/detail"),
    meta:{
        flag:false,
        auth:false
    }, 
    props:true
   
})