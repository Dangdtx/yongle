<template>
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

    }
</style>
