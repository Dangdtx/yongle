<template>
  <div class="list">
    <div class="product activity-details">
      <div class="head" style="height: 1.9rem;">
        <div class="head-bg">
          <div class="bgImg">
            <div class="bgImgBg" > 
            <img :src= "bgimg|ToImg('//static.228.cn')"  class="imgheight">
          </div>
        </div>
        <div class="head-icon">
          <v-touch tag="a" @tap="handleBack()" class="gobacks"></v-touch>
        </div>
      </div>
    </div>
    <div class="activity-details mb70">
      <div class="content">
        <h4 class="tc">{{title}}</h4>
        <div class="tl"  v-html= "ppp">  </div> 
      </div>
      <div>
        <v-touch tag="div" class="goods-list" v-for="(item,index) in activelist"  
        
        @tap="handleToDetail(item.PRODUCTID)" :key="index" >
          <a class="goods-con">
            <div class="left">
              <img
                :src= "item.PBIGIMG|ToImg('//static.228.cn')"
               
                class="imgs"
                alt="Olive橄榄现场呈现·2019谢春花&quot;无声叛逆&quot;全国巡回演出"
                style="background: rgba(166, 175, 9, 0.3);"
              />
              <i class="gradual-red tip tip-grabSeat">售票中</i>
            </div>
            <div class="right">
              <b class="name">{{item.NAME}}</b>
              <span class="gray mt10 12">{{item.SHOWDATE}}</span>
              <span class="gray f12">{{item.VNAME}}</span>
              <span class="gray mt10 f12">
                <b class="red f14 mr5">{{item.MINPRICE}} - {{item.MAXPRICE}}元</b>
              </span>
            </div>
          </a>
        </v-touch>
      </div>
      <!---->
    </div>
  </div>
  </div>
</template>
<script>
import { list_trick } from "api/list.js"
export default {
  name:"List",
  props:["PATH"],
  data(){
    return {
      data:"", 
      title:"",
      bgimg:"",
      ppp:"",
      activelist:"",
       productId:""
    }
  },
  async created(){ 
    ///detail-xihabaofupu1019.json   URL: "/xihabaofupu1019  对接口进行改装 
      let path = this.PATH.replace("/","-")+".json";  
      var  data = await  list_trick(path)   
      this.title = data.data.subjectMap.SHARETITLE
      this.ppp = data.data.subjectMap.WAPCONTEXT
      this.bgimg = data.data.subjectMap.IMG
      this.activelist=data.data.subjectProductList
      this.productId = data.data.PRODUCTID    
  },
  methods:{
    handleBack(){
      this.$router.back()
    },
    handleToDetail(id){
       this.$router.push({name:"detail",params:{id}})
    }
  }
};
</script>
<style scoped>
html {
  font-size: 100px;
}
h2, h3, h4, h5, h6 {
    font-weight: normal;
}
.list {
  width: 100%;
  height: 100%;
}
.activity-details {
  background: #fff;
}
.product .head {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.2rem;
}
.product .head-bg {
  top: 0;
  position: absolute;
  height: 1.9rem;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}
.activity-details .head-bg .bgImg {
  left: -2%;
  width: 200%;
}
.product .head-bg .bgImg {
  position: absolute;
  content: "";
  z-index: 1;
  height: 2.5rem;
  top: -0.6rem;
  left: -50%;
  width: 250%;
  border-radius: 40%;
  overflow: hidden;
}
.activity-details .head-bg .bgImg .bgImgBg {
  top: -0.4rem;
}
.product .head-icon {
  padding-top: 0.29rem;
  width: calc(100% - 0.3rem);
  margin-left: 0.15rem;
  overflow: hidden;
  position: relative;
  z-index: 9;
}
.product .head-icon .gobacks {
  float: left;
  background-position: 0 -34.54rem;
}
.product .head-icon a {
  width: 0.3rem;
  height: 0.31rem;
  display: block;
  background-size: 1.5rem; 
  background: #7b8187;
  border-radius: 50%;
}
.activity-details {
    background: #fff;
}
.mb70 {
    margin-bottom: .7rem;
}
.activity-details .content {
    margin: .2rem;
}
.activity-details .content h4 {
    font-size: .17rem;
    color: #000;
    margin-bottom: .15rem;
}
.tc {
    text-align: center;
    height:0.22rem;
    line-height:0.22rem;
}
.tl {
    text-align: left;
}
.activity-details .content p {
    font-size: .14rem;
    line-height: 22px;
    letter-spacing: 2px;
    color: #7b8187;
}
.goods-list {
    padding: .2rem;
    background: #fff;
}
a {
    text-decoration: none;
    color: #333;
}
.goods-con {
    display: block;
    margin-bottom: .15rem;
    border-bottom: 1px solid #fafafb;
    padding-bottom: .15rem;
    overflow: hidden;
}
.goods-con .left {
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
img {
    vertical-align: top;
}
.goods-con .left img {
    width: 100%;
    height: 100%;
}
.tip-grabSeat {
    background-position: 0 -24.19rem;
}
.tip {
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .11rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;
    /* background-size: 1.5rem; */
}
.gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.goods-con .right {
    margin-left: .15rem;
    float: left;
    width: calc(100% - 1rem);
}
.goods-con .right .name {
  font-size:0.14rem;
    height: .4rem;
    line-height: .2rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.goods-con .right span {
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mt10 {
  font-size:0.1rem;
    margin-top: 0.1rem;
}
 
.f12 {
    font-size: 0.12rem;
}
.red {
    color: #ff3a56;
}
.f14 {
    font-size: 0.14rem;
}
.mr5 {
    margin-right: 0.05rem;
}
.imgheight{
  height: 70%;
  width: 70%;
  text-align: center; 
}
</style>
