<template>
    <div id="footer">
      <ul>
        <router-link to="" v-for="(item, index) in navs" :key="index" :to="item.path" tag="li">
        <span>
            {{item.text}}
        </span>
        
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
    name:"tabBar",
    data() {
        return {
            navs:[
                {
                    text:"首页",
                    path:"/first"
                },
                {
                    text:"分类",
                    path:"/second"
                },
                {
                    text:"搜索",
                    path:"/search"

                },
                {
                    text:"我的",
                    path:"mine"
                }
            ]
        }
    },  
}
</script>

<style>
html{
    font-size:100px;
}
*{
    margin:0;
    padding:0;
}
    #footer{
        font-size:.14rem;
        width:100%;
        height:1rem;
        position:fixed;
        left:0;
        bottom:0;
        background:#fff;
        border-top:1px solid #ccc;

    }
    #footer>ul,#footer>ul>li{
        width:100%;
        height:100%;
    }
    #footer>ul{
        display:flex;
    }
    #footer>ul>li{
        display:flex;
        flex-direction: colum;
        justify-content:center;
        align-items:center;
    }
</style>