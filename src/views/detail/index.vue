<template>
  <div class="product pb60">
    <!-- head -->
    <div class="head">
      <div class="head-bg">
        <div class="bgImg">
          <div class="bgImgBg"></div>
          <div class="bgImg-black"></div>
        </div>
      </div>
      <div class="head-icon">
        <v-touch tag="a" @tap="handleBack()" href="#" class="gobacks iconfont ">&#xe675;</v-touch>
        <a href="#" class="share iconfont"   >&#xe60f; </a>
        <a href="#" class="love active iconfont">&#xe664;</a>
      </div>
      <div class="head-con">
        <div class="left">
          <img :src="activeDetail.PBIGIMG|ToImg('//static.228.cn')" alt />
          <i id="statusDiv" class="tip gradual-red white">售票中</i>
        </div>
        <div class="right">
          <h3 class="white">{{activeDetail.NAME}}</h3>
          <div class="cl product-icon mt8"></div>
          <b class="price f14 mt30 db">
            <em class="f16">
              <em class="f14">¥</em>{{activeDetail.MINPRICE}} -
              <em class="f14">¥</em>{{activeDetail.MAXPRICE}}
            </em>
          </b>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="top">
        <div class="discount tc mb10">
          <div id="discountBox" class="discount-box tl list gray9 f13" style="height: 55px; overflow: hidden;">
            <!---->
            <div class="text">{{activeDetail.ROBTICKETTIPS}}</div> 
          </div>
          <a id="discountBtn" class="look-more f11 mt10 db undb" style="display: inline;">查看更多</a>
        </div>
        <a href="/venue-50896357.html" class="addresses">
          <p>
            <i></i>
            <span>{{activeDetail.BEGINDATE }}-{{activeDetail.ENDDATE  }} </span>
          </p>
          <p>
            <i></i>
            <span>{{activeDetail.VNAME}}</span>
          </p>
          <em class="go-address iconfont  ">&#xe636;</em>
        </a>
      </div>
      <h3 class="con-tit">
        <b>巡演城市</b>
      </h3>
      <div class="roadShow-city">
        <DBScroll>
          <ul>
            <v-touch class v-for="(item,index) in adress"   tag="li" @tap="handleDress(item.PRODUCTID)"  :key="index">
              <a href="#" class
                title="演唱会门票Olive橄榄现场呈现·2019谢春花“无声叛逆”全国巡回演出-永乐票务重庆演唱会">{{item.JXNAME}} <em> {{item.ENDDATE|ToAddress()}}</em>
              </a>
            </v-touch>
          </ul>
        </DBScroll>
      </div>
    </div>

    <h3 class="con-tit mb15">
      <b>注意事项</b>
    </h3>
    <div class="need-attention" v-html="activeDetail.PRECAUTIONS">111 </div> 
    <h3 class="con-tit mb15 mt15">
      <b>演出详情</b>
    </h3>
    <div id="attentionShow" class="need-attention show-details show-notices-imgs" v-html="activeDetail.INTRODUCTION">
    </div>
    <div class="tc mt15 mb20">
      <a id="attentionBtn" class="look-more">收起</a>
    </div>
    <div class="answer">
      <a href="javascript:;" class>
        FAQ
        <i></i>
      </a>
    </div>
    <div class="answer">
      <a href="javascript:;" class>
        在线问答
        <i></i>
      </a>
    </div>
    <div class="crumbs ml20 mr20">
      <span
        style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;">
        <a href="/" class="nuxt-link-active">永乐票务&gt;</a>
        <a href="/category/yanchanghui" class> {{activeDetail.TYPEA1}}<em>&gt;</em> </a>
        <a href="/category/cq-yanchanghui/" class>{{activeDetail.JXNAME}}{{activeDetail.TYPEA1}} <em>&gt;</em></a>
        <a href="/ticket-586212454.html" class="nuxt-link-exact-active nuxt-link-active"> {{activeDetail.PAGETITLE}}</a>
      </span>
    </div>
    <div class="real-btn">
      <div class="btns">
        <span>
          <a href="###" class="service">
            <b></b>
          </a>
        </span>
        <a href="javascript:;" class="btn gradual-red white">立即购买</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import {  detail_trick  } from "api/detail.js"
  export default {
    name: "Detail",
    // props: ["id"],

    async created() {
      let id = this.$route.params.id + ".html"
      let data = await detail_trick(this.$route.params.id, id)  
      this.activeDetail = data.data.product
      this.adress = data.data.listPerform 
      console.log(data)
    },
    data() {
      return { 
        activeDetail: "",
        adress: "", 
      }
    },
    methods: {
      handleBack() {
        this.$router.back()
      },
      async handleDress(pramps){
         let id =  pramps + ".html"
         let data = await detail_trick(this.id, id) 
         console.log(data)
          this.activeDetail = data.data.product
          
      this.adress = data.data.listPerform 
      }
    }
  };
</script>

<style scoped>
  html {
    font-size: 100px;
  }

  .pb60 {
    width: 100%;
    height: 100%;
    padding-bottom: 0.6rem;
    background: #f5f6f7;
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

  .product .head-bg .bgImg {
    position: absolute;
    content: "";
    z-index: 1;
    height: 2.5rem;
    top: -0.6rem;
    left: -75%;
    width: 250%;
    border-radius: 50%;
    overflow: hidden;
  }

  .bgImgBg {
    position: absolute;
    content: "";
    filter: blur(10px);
    z-index: 1;
    height: 3.9rem;
    top: -1rem;
    left: 0;
    width: 100%;
    background: url(//static.228.cn/upload/2019/06/20/AfterTreatment/1561018126947_k2p5-0.jpg) center center / 50% 3.9rem no-repeat;
  }

  .product .head-bg .bgImg-black {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .product .head-icon {
    padding-top: 0.29rem;
    width: calc(100% - 0.3rem);
    margin-left: 0.15rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
  }

  .product .head-icon a {
    width: 0.3rem;
    height: 0.31rem;
    display: block;
    background-size: 1.5rem;
  }

  .product .head-icon .gobacks {
    float: left;
    background:#5f646a;
    background-position: 0 -34.54rem; 
    border-radius: 50%;
  }

  .product .head-icon .share {
    float: right; 
     border-radius: 50%;
     background:#5f646a;
    background-position: 0 -36.955rem;
  }

  .product .head-icon .love.active {
    float: right;
    background-position: 0 -36.14rem;
    margin-right: 0.15rem;
  }

  .product .head-icon .love {
    float: right;
    background-position: 0 -35.34rem;
    margin-right: 0.15rem;
     border-radius: 50%;
     background:#5f646a;
  }

  .product .head-con {
    margin: 0.3rem 0.2rem 0;
    overflow: hidden;
    z-index: 9;
    position: relative;
  }

  .product .head-con .left {
    position: relative;
    float: left;
    width: 1.2rem;
    height: 1.6rem;
    box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1),
      0px 2px 8px 0px rgba(58, 64, 69, 0.1);
    border-radius: 0.1rem;
    overflow: hidden;
  }

  .product .head-con .left img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  .tip {
    display: block;
    height: 0.2rem;
    line-height: 0.2rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: 0.11rem;
    font-weight: bold;
    border-radius: 0.1rem 0;
    padding: 0 0.05rem;
    left: 0;
    text-align: center;
    /* background-size: 1.5rem; */
  }

  .gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
  }

  .product .head-con .right {
    float: left;
    margin-left: 0.15rem;
    width: calc(100% - 1.35rem);
  }

  .product .head-con .right h3 {
    height: 0.63rem;
    line-height: 0.21rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-size: 0.15rem;
  }

  .white {
    color: white;
  }

  .product .product-icon {
    height: 0.18rem;
    margin-top: 0.08rem;
  }

  .f14 {
    font-size: 0.14rem;
  }

  .mt30 {
    margin-top: 0.3rem;
  }

  .db {
    display: block;
  }

  .f16 {
    font-size: 0.16rem;
  }

  em {
    font-style: normal;
  }

  /* content */
  .product .content .top {
    margin: 0 0.2rem 0.16rem;
    background: #fff;
    border-radius: 0.1rem;
    padding: 0.1rem;
  }

  .mb10 {
    margin-bottom: 0.1rem;
    text-align: center;
  }

  .f11 {
    font-size: 0.11rem;
    color: #ff2959;
  }

  .mt10 {
    margin-top: 0.1rem;
  }

  .gray9 {
    color: #999;
  }

  .f13 {
    font-size: 0.13rem;
  }

  .tl {
    text-align: left;
  }

  .product .addresses {
    display: block;
    font-size: 0.14rem;
    color: #5f646a;
    position: relative;
    overflow: hidden;
    text-align: left
  }

  .product .addresses p {
    overflow: hidden;
  }

  .product .addresses p:nth-child(1) {
    margin-bottom: 0.05rem;
  }

  .product .addresses p i {
    float: left;
    display: block;
    margin-top: 0.03rem;
    width: 0.12rem;
    height: 0.12rem;
    margin-right: 0.1rem;
    background: red;
  }

  .product .addresses p:nth-child(1) i {
    background-position: 0 0;
  }

  .product .addresses p span {
    width: calc(100% - 0.42rem);
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .product .addresses p:nth-child(2) i {
    background-position: 0 -0.38rem;
  }

  .product .addresses .go-address {
    position: absolute;
    height: 0.12rem;
    width: 0.12rem;
    display: block;
    top: 0.14rem;
    right: 0;
    background-position: 0 -0.75rem; 
    background-size: 0.5rem;
    
  }

  .con-tit {
    font-size: 0.22rem;
    color: #000;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .con-tit {
    font-size: 0.22rem;
    color: #000;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .product .roadShow-city {
    margin: 0.04rem 0.2rem 0.08rem;
    width: calc(100% - 0.4rem);
    height: 0.76rem;
    overflow: auto;
  }

  .roadShow-city ul {
    width: 10000px;
  }

  .roadShow-city ul li {
    text-align: center;
    font-size: .16rem;
    float: left;
    height: .76rem;
    width: .76rem;
    line-height: .18rem;
    padding-top: .08rem;
     background: url(https://m2static.228.cn/images/pic_city_gray.png) no-repeat;  
    background-size: 100%;
    /* background: #fff; */
    color: rgba(255, 58, 86, 0.8);
    /* border-radius: .18rem; */
    /* margin-right: .3rem; */
  }

  .roadShow-city ul li:last-child {
    margin-right: 0;
  }

  .roadShow-city ul li a {
    display: table-cell;
    vertical-align: middle;
    width: .76rem;
    height: .76rem;
    font-size: .14rem;
    color: rgba(255, 58, 86, 0.8);
  }

  .roadShow-city ul li em {
    display: block;
    font-size: 0.12rem;
    color: rgba(255, 58, 86, 0.6);
  }

  .mb15 {
    margin-bottom: 0.15rem;
  }

  .need-attention {
    margin: 0 0.2rem;
    line-height: 0.22rem;
    letter-spacing: 0.02rem;
    font-size: 0.14rem;
    color: #7b8187;
  }

  .con-tit {
    font-size: 0.22rem;
    color: #000;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .mb15 {
    margin-bottom: 0.15rem;
  }

  .mt15 {
    margin-top: 0.15rem;
  }

  /* 1111111111 ______________________________________________________*/
  /* .show-notices-imgs {
    height: 65px;
    overflow: hidden;
} */
  .need-attention {
    margin: 0 0.2rem;
    line-height: 0.22rem;
    letter-spacing: 0.02rem;
    font-size: 0.14rem;
    color: #7b8187;
  }

  .need-attention p {
    margin-bottom: 0.2rem;
  }

  img {
    vertical-align: top;
  }

  .mb20 {
    margin-bottom: 0.2rem;
  }

  .mt15 {
    margin-top: 0.15rem;
  }

  .tc {
    text-align: center;
  }

  .look-more {
    font-size: 0.14rem;
    color: #ff2959;
  }

  .answer {
    margin: 0 0.2rem 0.15rem;
    padding: 0 0.2rem;
    height: 0.45rem;
    line-height: 0.45rem;
    border-radius: 0.1rem;
    background: #fff;
  }

  .answer a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    font-weight: 700;
  }

  .answer i {
    background: red;
    margin-top: 0.165rem;
    float: right;
    height: 0.12rem;
    width: 0.12rem;
    display: block;
    background-position: 0 -0.75rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .crumbs {
    margin: 0 0.15rem 0.1rem;
  }

  .crumbs,
  .crumbs a {
    color: #999ea3;
    font-size: 0.11rem;
  }

  .crumbs a {
    margin: 0 0.05rem;
  }

  .crumbs,
  .crumbs a {
    color: #999ea3;
    font-size: 0.11rem;
  }

  .real-btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .6rem;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0px 0px 15px 0px rgba(95, 100, 106, 0.2);
  }

  .btns {
    display: flex;
  }

  .btns .btn {
    flex: 1;
    text-align: center;
    height: .44rem;
    /* line-height: .44rem; */
    border-radius: 1rem;
    letter-spacing: 2px;
    font-size: .15rem;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    text-align: center;
  }

  .btns a:first-child {
    margin-left: .08rem;
  }

  .btns a {
    margin: .08rem .08rem .08rem 0;
    font-size: .15rem;
  }

  .service {
    width: .44rem;
    height: .44rem;
    display: block;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
  }

  .service b {
    background: red;
    width: .44rem;
    height: .44rem;
    display: block;
    background-position: 0 -1.11rem;
  }

  .show-notices-imgs p {
    width: 100%;
  }

  .show-notices-imgs p img {
    width: 3.35rem;
    height: 4.09rem
  }
  .iconfont{
    font-size: .18rem;
    text-align: center;
    line-height: .30rem;
  }
</style>