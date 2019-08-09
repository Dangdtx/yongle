import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import search from "./search";
import sort from "./sort";
import mine from "./mine"; 
import cityList from "./cityList"
import narrate from "./narrate"

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        home,
        sort,
        search,
        mine,
        cityList,
        narrate
    ]
})