<template>
    <div> 
       <h3 class="head-tit"><v-touch tag="a" @tap="handleToBack()" href="javascript:;" class="goback">&lt;  </v-touch>活动列表</h3>
    </div>
       
     
</template>

<script>
export default {
    name:"Head_tit",
    methods:{
        handleToBack(){
            this.$router.back()
        }
    }
}
</script>
<style>
   h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }
     .head-tit {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: .17rem;
        padding: 0 .4rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
     .head-tit .goback { 
        left: .15rem;
        background-size: .8rem;
        background-position: 0px -3.89rem;
    }
     .head-tit .goback {
        width: .18rem;
        height: .18rem;
        position: absolute;
        display: block; 
        color: red; 
    }
</style>
