<<<<<<< HEAD
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
=======
export default {
    path:"/detail/:id/:name",
    component:()=>import("views/detail"),
    name:"detail",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}
>>>>>>> yang
