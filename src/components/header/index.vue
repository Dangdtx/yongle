<template>
    <div class="header">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        }
    }
}
</script>

<style>
html{
    font-size: 100px;
}
    .header{
        width: 100%;
        height: 1rem;
        background: #e54847;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top:0;
        font-size:.14rem;
    }
</style>