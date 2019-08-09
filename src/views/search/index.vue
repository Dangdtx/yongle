<<<<<<< HEAD
=======
<template>
    <div class="box">
         <header class="head-tit">
        搜索
        <a  class="goback">&lt;</a>
        <a  class="search"></a>
        </header>
        <div class="title-search">
         <form  class="input-kw">
         <input type="search" class="search-in" v-model="someVal"/>
         <input type="text" name="test" style="display:none"/>
         </form>
         <i class="extend">8</i>
         <a href="" class="closes">取消</a>
       </div>
    <div class="goodslist" v-for="(item,index) in someList" :key="index">
            <a class="good-con">
            <div class="left">
                <img :src="'//static.228.cn'+item.pbigimg" style="background: rgba(139, 90, 9, 0.3);">
                <i :class="item.pzlx==1?'tip':'tip1'">{{item.pzlx==1?"预定":"售票中"}}</i>
            </div>
            <div class="right">
            <b class="name">{{item.name}}</b>
            <span class="time">{{item.enddate}}</span>
            <span class="address">{{item.vname}}</span>
            <span class="price">{{item.minprice}} - {{item.maxprice}}</span>
            </div>
           </a>
         </div>
        </div>  
</template>
<script>
import {search_api} from 'api/second.js'
export default {
    name:"Search",
    data() {
        return {
            someVal:"",
            someList:[]
        }
    },
    timer:null,
   watch:{
        someVal(newVal,oldVal){
           clearTimeout(this.timer)

          this.timer = setTimeout( async ()=>{
            let data = await search_api(this.someVal)
           console.log(data);
           this.someList = data.data.pagerMemory?data.data.pagerMemory.list:[]
           console.log(this.someList);
           },300)
           
       }
   }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
html{
    font-size:100px;
}
body{
    width:100%;
    height:100%;
    font-size: .14rem;
    margin: auto;
    font-weight: 400;
    background: #fff;
}

.box{
    width:100%;
    height:100%;
    margin: auto;
    display:flex;
    flex-direction:column;
    margin-bottom:0.93rem;

}
header{
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    width: calc(100% - .8rem);
    font-size: .17rem;
    padding: 0 .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height:0.4rem;
    background:#0cc;
    position:fixed;
    top:0;
    left:0;
    z-index:1;

}
.goback{
    width: .18rem;
    height: .18rem;
    position: absolute;
    display: block;
    top: .11rem;
    color: #323232;
    text-align:center;
    line-height:.18rem;
}
.title-search{
    height: .34rem;
    margin: .5rem .2rem 0;
    position: relative;
    display: flex;
}
.input-kw{
    display: block;
    width:100%;
    margin-top: 0em;
    overflow: hidden;
}
.search-in{
    font-size: .13rem;
    padding: 0 .3rem;
    outline: none;
    width: 2.79rem;
    /* 问题 */
    height: .34rem;
    border: none;
    background: #f3f4f5;
    border-radius: 1rem;
    -webkit-appearance: none;
    position: absolute;
    top: 0;
    left: 0;
}
.closes{
    width: .45rem;
    height: .34rem;
    line-height: .34rem;
    text-align: center;
    display: block;
    color: #5f646a;
    font-weight: normal;
    font-size:.14rem;
    text-decoration: none;
    z-index: 1;
}
.extend{
    position: absolute;
    font-size: .14rem;
    top: .1rem;
    left: .1rem;
    width: .14rem;
    height: .14rem;
    background-size: 1.5rem;
    background-position: 0 -28.76rem;
}
.shoplist{
    height:100%;
    margin-top:0.86rem;
    overflow-y:auto;
    font-size: .14rem;
}
.goodslist{
    width:100%;
    
    margin:.1rem;
}
.good-con{
    display: block; 
    border-bottom: 1px solid #fafafb;
    overflow: hidden;
}
.left{
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    font-size: .14rem;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
.left>.tip {
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .08rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;
    background:blue;
    /* background-size: 1.5rem; */
}
.left>.tip1 {
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .08rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;
    background:red;
    /* background-size: 1.5rem; */
}
.left>img{
    width: .85rem;
    height: 1.13rem;
}
.right{
    font-size: .14rem;
    margin-left: .15rem;
    float: left;
    width: calc(100% - 1rem);
}
.name{
    height: .4rem;
    line-height: .2rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.time{
        display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.address{
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.price{
    color:red;
    font-size:0.14rem;
    margin-right:0.05rem;
}

</style>
>>>>>>> yang
