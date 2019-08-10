<template>
    <div class="box">
        <header class="head-tit">
        分类
        <v-touch  
        @tap="handleback"
        tag="a"
        class="goback">&lt;</v-touch>
        <a  class="search"></a>
        </header>
        <section>
            <ul>
                <li>
                 全国
                <v-touch 
                tag="i"
                @tap="handleclick" >1</v-touch>
                </li>
                <li>
                全部分类
                <v-touch
                tag="i"
                 @tap="handleclick1" >2</v-touch>
                <!-- <i @click="handleclick1">2</i> -->
                </li>
                <li>
                全部时间
                <v-touch 
                tag="i"
                @tap="handleclick2" >3</v-touch>
                <!-- <i @click="handleclick2">3</i> -->
                </li>
            </ul>
            <div class="type-tab" v-show="flag">
            <ol class="cl">
            <li class="active"
              v-for="(item,index) in fcitys" 
              :key="index">
 					{{item.CITYNAME}}	
                </li> 
            <v-touch class="" 
            v-for="(item,index) in fcitys"
            tag="li"
            @tap="handleto(item)"
            :key="index">{{item.CITYNAME}}</v-touch>
            </ol>
            </div>
            <div class="type-tab" v-show="flag1">
            <ol class="cl"><li class="active">全部分类</li>
             <li yinyuehuia="全部分类" yinyuehuib="演唱会" class="" v-for="(item,index) in typeas" :key="index">{{item.NAME}}</li>
             </ol>
            </div>
            <div class="type-time" v-show="flag2">
            <p class="time-type cl"><a href="javascript:;" class="active">全部时间</a><a href="javascript:;" class="">今天</a><a href="javascript:;" class="">明天</a><a href="javascript:;" class="">本周内</a><a href="javascript:;" class="">本周末</a><a href="javascript:;" class="">下周</a><a href="javascript:;" class="">本月</a></p>
            </div>
        </section>
        <div class="shoplist">
         <div class="goodslist"
          v-for="(item,index) in pagerMemoryList" 
          :key="index"
          @click="handlego(item.productid,item.name)">
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
         <div class="load-more">
            <v-touch @click="handlemore">查看更多</v-touch>
           </div>
        </div>
    </div>
</template>
<script>
import {second_api} from 'api/second.js'
import {moreSearch_api} from 'api/second.js'
// import {mapActions,mapState,mapMutations} from "vuex"
export default {
    name:"second",
    async created() {
        let data = await second_api();
        // console.log(data);
        this.pagerMemoryList=data.data.pagerMemoryList;
        this.fcitys=data.data.fcitys;
        this.typeas=data.data.typeas;
        this.searMap=data.data.searMap;
        console.log(this.pagerMemoryList);
        // console.log(this.fcitys);   
    },
    data() {
        return {
            flag:false,
            flag1:false,
            flag2:false,
        pagerMemoryList:[],
        fcitys:[],
        typeas:[],
        searMap:[]    
        }
    },
    methods: {
        handleclick(){
            this.flag=!this.flag
            this.flag1=false
            this.flag2=false
        },
         handleclick1(){
            this.flag1=!this.flag1
            this.flag=false
            this.flag2=false
        },
         handleclick2(){
            this.flag2=!this.flag2
            this.flag=false
            this.flag1=false
        },
        async handlemore(){
             let data = await second_api();
        // console.log(data);
        this.pagerMemoryList=data.data.pagerMemoryList;
        this.fcitys=data.data.fcitys;
        this.typeas=data.data.typeas;
        this.searMap=data.data.searMap;
        // console.log(this.pagerMemoryList);
        // console.log(this.fcitys); 
                
            
        },
        handleback(){
            this.$router.back()
        },
        // ...mapMutations({
        //     handleToggleCity:"city/handleToggleCity"
        // }),
        // handleto(params){
        //     this.$router.push("/second")
        //     this.handleToggleCity(params)
        // },
        handlego(id){
            console.log(id);
            this.$router.push({name:"detail",params:{id}})
            
        }

    },
     
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
html{
    font-size:100px;
}
body {
    width:100%;
    height:100%;
    font-size: .14rem;
    margin: auto;
    font-weight: 400;
    background: #fff;
    overflow:scroll;
}
	
ul{list-style:none;}
.box{
    width:100%;
    height:100%;
    margin: auto;
    display:flex;
    flex-direction:column;
    margin-bottom:0.93rem;

}
.box>header{
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
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
.search{
    width: .18rem;
    height: .18rem;
    position: absolute;
    display: block;
    right:0.4rem;
    top: .11rem;
    color:#323232;
    text-align:center;
    line-height:.18rem;
    
}
section{
    width:100%;
    height:0.46rem;
    overflow:hidden;
    
    display:flex;
    border-bottom:0.01rem solid #999ea3;
    position: fixed;
    background:#fff;
    left:0;
    top:.4rem;
    z-index: 1;
}
.type-tab{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:.85rem;
    z-index: 100;
    background:#fff;
    overflow: auto;
    border-radius: 0 0 .2rem .2rem;
}
.type-tab ol li {
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    float: left;
    width: calc(100% / 3);
    list-style:none;
}
.type-time{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:.85rem;
    z-index: 100;
    background:#fff;
    overflow: auto;
    border-radius: 0 0 .2rem .2rem;
}
.type-time>p>a{
    width: calc(100% / 3);
    line-height: .45rem;
    display: block;
    float: left;
    text-align: center;
    text-decoration: none;
    color: #333;
}

section>ul{
    display:flex;
    justify-content:space-around;
    overflow:hidden;
}
section>ul>li{
    width:1.25rem;
    height:0.45rem;
    display:flex;
    font-size:0.14rem;
    justify-content:space-around;
    line-height:0.45rem;
    white-space: nowrap;
    text-align:center;
    color: #999ea3;
}
section>ul>li>i{
    width:.18rem;
    height:.18rem;
    margin-top:.14rem;
    text-align:center;
    line-height:.18rem;
    margin-right:.1rem;
}
.shoplist{
    height:100%;
    margin-top:0.86rem;
    overflow-y:auto;
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
   
}
.left>img{
    width: .85rem;
    height: 1.13rem;
}
.right{
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
.load-more{
    margin-bottom:.2rem;
    width: 1rem;
    height: .3rem;
    line-height: .27rem;
    text-align: center;
    border-radius: 1rem;
    margin: auto;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(255, 58, 86, 0.2);
}
    
</style>

