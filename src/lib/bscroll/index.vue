<template>
<<<<<<< HEAD
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:"DBScroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper ,{
            tap:true,
            pullDownRefresh:true,//下拉刷新
            scrollX:true,  //横向滚动
        })
    },
    methods:{
        //下拉刷新数据
        handlePullingDown(cb){
             this.scroll.on("pullingDown",()=>{
                 cb();
             })
        },
        // 下拉刷新加载数据完成后 通知batter-scroll
        handlefinishPullDown( ){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        // 上拉加载更多
        handlepullingUp(cb){
            this.scroll.on("pullingUp"(()=>{
                cb();
                })
            )
        },
        // 上拉刷新加载数据后 通知batter-scroll 重新计算高度
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh(); 
        }
    }
}
</script>


<style>
    .wrapper{ 
        height:100%;
=======
    <div class="wapper" ref="wrapper">
       <slot></slot>
    </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"yzz-BScroll",
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            pullDownRefresh:true
        })
    },
    methods: {
        handlepullingDown(){
            this.scroll.on("pullingDown",()=>{
                callback();
            })
        }
    },
}
</script>

<style>
    .wapper{
        height:100%;

>>>>>>> yang
    }
</style>
