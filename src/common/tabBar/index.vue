<template>
    <div id="footer">
        <ul>
             <router-link v-for="(item,index) in navs" 
             :key="index"
             :to="item.path"
             tag="li" >
            <i class="iconfont" v-html="item.icon"> </i>
            <span>{{item.text}}</span>
             
             </router-link>
        </ul>   
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    icon:"&#xe606;",
                    text:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe7f8;",
                    text:"分类",
                    path:"/sort"
                },
                {
                    icon:"&#xe626",
                    text:"搜索",
                    path:"/search"
                },
                {
                    icon:"&#xe607;",
                    text:"我的",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
     html{
        font-size:100px;
    }
    #footer{
        width: 100%;
        height: 0.5rem;
        position:fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: 1px solid #cccccc;
    }
    #footer ul ,  #footer ul li {
        width: 100%;
        height: 100%;
    }
    #footer ul{
           display: flex;
       }
   
   #footer>ul>li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.01rem;
    }
     #footer>ul>li i {
         font-size: 0.16rem; 
     }
    #footer .router-link-active{
        color: #cc3333;
    }
</style>
