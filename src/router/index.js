import Vue from 'vue'
import VueRouter from 'vue-router'
import first from "./first"
import second from "./second"
import search from "./search"
import mine from "./mine"
import detail from "./detail"
import buy from "./buy"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/first"
        },
        first,
        second,
        search,
        mine,
        detail,
        buy
    ]
})