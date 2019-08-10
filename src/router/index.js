
import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import search from "./search";
import sort from "./sort";
import mine from "./mine"; 
 
import register from "./register"; 
import login from "./login"
import detail from "./detail"
import order from "./order"
import activies from "./activies"
import list from "./list"
import cityList from "./cityList"
import narrate from "./narrate"
 

Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home",
        },
        home,
        sort,
        search, 
        mine, 
        register, 
        login,
        detail,
        order,
        activies,
        list,  
        cityList,
        narrate
    ]
})