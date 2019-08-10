<template>
    <div class="title-nav">
            <router-link v-for="(item,index) in texts"
                        :key="index"
                        tag="a"
                        to="/narrate">
                <i class="iconfont" v-html=item.icon></i>
                <span>{{item.name}}</span>
            </router-link>
            
        </div>
</template>
<script>
export default {
    data() {
        return {
            
            texts:[{
                icon:'&#xe610',
                name:'演唱会'
            },
            {
                icon:'&#xe710',
                name:'话剧舞台剧'
            },
            {
                icon:'&#xe68a',
                name:'体育赛事'

            },
            {
                icon:'&#xe615',
                name:'儿童亲子'
            },
            {
                icon:'&#xe624',
                name:'全部分类'
            },
            {
                icon:'&#xe631',
                name:'活动'
            },
            {
                icon:'&#xe611',
                name:'永乐说',
               
            },
            {
                icon:'&#xe632',
                name:'我的'
            }]
        }
    }
}
</script>
<style>
.title-nav {
    display:flex;
    height:1.35rem;
    margin:0.25rem 0.2rem;
    flex-direction:row;
    flex-wrap:wrap;
}
.title-nav i{ 
    font-size:0.25rem;
    color:red;
}
.title-nav a {
    display:flex;
    width:0.83rem;
    height:0.55rem;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    color:#7B8187;
    font-size:0.14rem;
    margin-bottom:0.3rem;
}
.title-nav i {
    margin-bottom:0.1rem;
}
</style>


