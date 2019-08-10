<template>
    <div class="home-foot tc">
        <div class="box-shadow-top">
            <div class="box-shadow-bot">
                <p class="pt20 mb10">
                    <a href="/notices/" class="">最新资讯</a>
                    <a href="/partner.html" class="">合作招商</a>
                     <a href="/contect.html" class="">联系我们</a>
                </p>
                <em class="f11">© 永乐票务</em>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Footer"
    
}
</script>
<style  scoped>  
.home-foot {
    height: .77rem;
    width: 100%;
}
.tc {
    text-align: center;
}
.box-shadow-top { 
     height: .77rem; 
     
}
.box-shadow-bot{
    height: 100%;
}
.mb10 {
    height: 100%;
    margin-bottom: 0.1rem;
}
.pt20 {
    padding-top: 0.2rem;
}
a {
    height: 100%;
    text-decoration: none;
    color: #333;
}
.home-foot p a {
    margin: 0 .15rem;
    color: #5f646a;
    font-size: .12rem;
}
.home-foot em {
    color: #ccd1d6;
        font-style: normal;
}
.f11 {
    height: 100%;
    font-size: .11rem;
}
</style>
