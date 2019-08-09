<template>
    <div class="box">
        <div class="product pb60">
        <div class="head">
        <div class="head-bg">
        <div class="bgImg">
        <div class="bgImgBg" style="background: url(&quot;//static.228.cn/upload/2019/08/06/AfterTreatment/1565075939149_a2p7-0.jpg&quot;) center center / 50% 3.9rem no-repeat;"></div>
         <div class="bgImg-black"></div>
         </div></div> 
         <span><!----></span>
        <div class="head-icon">
        <v-touch
        @tap="handleto"
        tag="a" 
        class="gobacks">&lt;</v-touch>
         <a href="javascript:;" class="share"></a> 
         <a href="javascript:;" class="love"></a>
         </div> <!---->
          <div class="head-con">
          <div class="left">
          <img :src="'//static.228.cn'+product.PBIGIMG" onerror="this.src=&quot;//static.228.cn/resources/images/lazy_default.gif&quot;" style="background: rgba(127, 37, 8, 0.3);"> <i id="statusDiv" class="tip  gradual-blue white">预订</i>
          </div>
        <div class="right">
        <h3 class="white">{{product.NAME}} </h3>
         <div class="cl product-icon mt8"><!----> <!----></div> 
         <b class="price f14 mt30 db"><em class="f16">
         <em class="f14">¥ </em>{{product.MINPRICE}} - <em class="f14">¥ </em>{{product.MAXPRICE}}</em></b>
         </div>
         </div>
         </div> 
         </div>

         <div class="content">
         <div class="top">
         <div class="discount tc mb10">
         <div id="discountBox" class="discount-box tl list gray9 f13" style="height: 55px; overflow: hidden;">
         <div class="text mb5" style="-webkit-line-clamp: 3; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical;">
         【温馨提示】本演出将于8月8日12:00开启预售；建议您提前注册、登陆永乐票务网站或客户端，便于第一时间抢票成功；为了保证您能够更顺利购票，请下载最新版本的APP（版本号：V3.6.2）。<br></div>
          <div class="text" style="-webkit-line-clamp: 3; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical;">本演出将于8月8日12:00开启预售；</div>
          </div>
           <a id="discountBtn" class="look-more f11 mt10 db undb" style="display: inline;">查看更多</a></div>
        <a href="/venue-50896357.html" class="addresses"><p><i></i><span>2019.08.31</span></p> <p><i></i><span>武汉客厅•中国文化博览中心</span></p> <em class="go-address"></em></a></div> <!----></div>
        <h3 class="con-tit mb15"><b>注意事项</b></h3>
        <div class="need-attention">a)演出详情仅供参考，具体信息以现场为准；<br>b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；<br>c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。<br>d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。</div>
        <div>
        <h3 class="con-tit mb15 mt15"><b>购票公告</b></h3> 
        <div id="afficheShow" class="need-attention show-details show-notices-imgs" style="height: 65px; overflow: hidden;">
        <p style="text-indent:2em;">
        <span style="color:#0000ff;">【温馨提示】</span>
        </p><p style="text-indent:2em;"><span style="color:#0000ff;">1.本演出将于<strong><span style="color:#ff0000;">8月8日12:00</span></strong>开启预售；</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">2.目前演出票价显示“已售完”不代表门票售罄，售票开启后，可售价位门票将点亮销售；</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">3.本演出<strong><span style="color:#ff0000;">不支持银行转帐</span></strong>的购票方式；</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">4.为尽可能地保证公平，让更多朋友买到心仪的价位，购票下单后<strong><span style="color:#ff0000;">15分钟内</span></strong>未支付将被取消订单回滚库存；大家可密切刷新网页进行购买；</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">5.部分银行信用卡网上支付有限额，请大家提前跟卡片所属银行核实限额，以免耽误付款；</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">6.为了确保广大观众的利益，对于异常订购行为，永乐票务有权取消相应订单！（同一注册ID、同一收货地址及姓名、同一手机号、同一支付方式账号、同一版本号信息购买设备均视为异常购票行为）</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">7.同一订单同等价位门票确保连座；</span></p><p style="text-indent:2em;"><span style="color:#0000ff;">8.抢票前请在“我的永乐-收货地址”中维护好准确的收货地址，以便后期更快收到您的票品；抢票成功后将不支持修改配送方式及收货地址。</span></p></div> <div class="tc mt15 mb20"><a id="afficheBtn" class="look-more">查看更多</a></div></div>
        <div class="answer"><a href="javascript:;" class="">
						FAQ
		<i></i></a>
        </div>
        <div class="answer"><a href="javascript:;" class="">
            在线问答
        <i></i></a></div>
        <div class="crumbs ml20 mr20">
        <span style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;">
        <a href="/" class="nuxt-link-active">永乐票务&gt;</a>
        <a href="/category/yanchanghui" class="">演唱会<em>&gt;</em></a><a href="/category/wh-yanchanghui/" class="">武汉演唱会<em>&gt;</em></a><a href="/ticket-603671727.html" class="nuxt-link-exact-active nuxt-link-active">演唱会门票MC HotDog热狗2019“废欲清”全国巡演-武汉站-永乐票务</a></span></div>
        <div class="home-foot tc">
        <div class="box-shadow-top"
        ><div class="box-shadow-bot">
        <p class="pt20 mb10">
        <a href="/notices/" class="">最新资讯</a>
         <a href="/partner.html" class="">合作招商</a> 
         <a href="/contect.html" class="">联系我们</a>
         </p>
          <em class="f11">© 永乐票务</em></div></div></div>
        <div>
        <div class="real-btn">
        <div class="btns">
        <span><a href="###" class="service"><b></b></a></span>
        <a href="javascript:;" class="btn gradual-red white">立即预订</a>
        </div></div></div>
    </div>

</template>

<script>
import {detail_api} from 'api/second'
export default {
    name:"Detail",
    props:["id","name"],
    async created() {
        let data=await detail_api(this.id)
        this.product=data.data.product
        // console.log(this.product);
        
    },
    data(){
        return{
            product:{}
        }
    },
    methods: {
        handleto(){
            this.$router.back()
        }
    },
}
</script>

<style>
html{
    font-size:100px;
}
body{
    font-size:0.14rem;
}
*{
    margin:0;
    padding:0;
}
.product .head {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: .2rem;
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
    content: '';
    z-index: 1;
    height: 2.5rem;
    top: -.6rem;
    left: -75%;
    width: 250%;
    border-radius: 50%;
    overflow: hidden;
}
.product .head-bg .bgImg .bgImgBg {
    position: absolute;
    content: "";
    -webkit-filter: blur(10px);
    filter: blur(10px);
    z-index: 1;
    height: 3.9rem;
    top: -1rem;
    left: 0;
    width: 100%;
    background-size: 200%;
}
.product .head-bg .bgImg .bgImgBg {
    position: absolute;
    content: '';
    filter: blur(10px);
    z-index: 1;
    height: 3.9rem;
    top: -1rem;
    left: 0;
    width: 100%;
    background-size: 200%;
}
.product .head-bg .bgImg-black {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
.product .head-icon {
    padding-top: .29rem;
    width: calc(100% - .3rem);
    margin-left: .15rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
}
.product .head-icon .gobacks {
    float: left;
    background-position: 0 -34.54rem;
    z-index:10;
    color:#fff;
    text-align:center;
}
.product .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
a {
    text-decoration: none;
    color: #333;
}
.product .head-icon .share {
    float: right;
    background-position: 0 -36.955rem;
}
.product .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
.product .head-icon .love {
    float: right;
    background-position: 0 -35.34rem;
    margin-right: .15rem;
}
.product .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
.product .head-con {
    margin: .3rem .2rem 0;
    overflow: hidden;
    z-index: 9;
    position: relative;
}
.product .head-con .left {
    position: relative;
    float: left;
    width: 1.2rem;
    height: 1.6rem;
    box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1), 0px 2px 8px 0px rgba(58, 64, 69, 0.1);
    border-radius: .1rem;
    overflow: hidden;
}
.product .head-con .right {
    float: left;
    margin-left: .15rem;
    width: calc(100% - 1.35rem);
}
.product .head-con .left img {
    width: 100%;
    height: 100%;
}
img {
    vertical-align: top;
}
.product .head-con .right h3 {
    height: .63rem;
    line-height: .21rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: .15rem;
}
.white {
    color: white;
}
.product .product-icon {
    height: .18rem;
}
.mt8 {
    margin-top: 0.08rem;
}
.cl {
    zoom: 1;
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
.product .content .top {
    margin: 0 .2rem .16rem;
    background: #fff;
    border-radius: .1rem;
    padding: .1rem;
}
element.style {
    height: 55px;
    overflow: hidden;
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
element.style {
    display: inline;
}
.f11 {
    font-size: .11rem;
}
.product .addresses {
    display: block;
    font-size: .14rem;
    color: #5f646a;
    position: relative;
    overflow: hidden;
}
.con-tit {
    font-size: .22rem;
    color: #000;
    margin-left: .2rem;
    margin-right: .2rem;
}
.mb15 {
    margin-bottom: 0.15rem;
}

h2, h3, h4, h5, h6 {
    font-weight: normal;
}
.need-attention {
    margin: 0 .2rem;
    line-height: .22rem;
    letter-spacing: .02rem;
    font-size: .14rem;
    color: #7b8187;
}
.con-tit {
    font-size: .22rem;
    color: #000;
    margin-left: .2rem;
    margin-right: .2rem;
}
.mb15 {
    margin-bottom: 0.15rem;
}
.mt15 {
    margin-top: 0.15rem;
}
.need-attention {
    margin: 0 .2rem;
    line-height: .22rem;
    letter-spacing: .02rem;
    font-size: .14rem;
    color: #7b8187;
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
.answer {
    margin: 0 .2rem .15rem;
    padding: 0 .2rem;
    height: .45rem;
    line-height: .45rem;
    border-radius: .1rem;
    background: #fff;
}
.answer a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: .16rem;
    font-weight: 700;
}

a {
    text-decoration: none;
    color: #333;
}
.crumbs {
    margin: 0 .15rem .1rem;
}
.crumbs, .crumbs a {
    color: #999ea3;
    font-size: .11rem;
}
.home-foot {
    height: .77rem;
    width: 100%;
}
.box-shadow-top {
    height: 100%;
    height: 100%;
    box-shadow: 2px 20px 15px -9px #f4f4f4 inset;
}
.home-foot p a {
    margin: 0 .15rem;
    color: #5f646a;
    font-size: .12rem;
}
.home-foot em {
    color: #ccd1d6;
}
.f11 {
    font-size: .11rem;
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
.btns a:first-child {
    margin-left: .08rem;
}
.btns a {
    margin: .08rem .08rem .08rem 0;
}
.service {
    width: .44rem;
    height: .44rem;
    display: block;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
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
.btns {
    display: flex;
}

.btns a {
    margin: .08rem .08rem .08rem 0;
}
.white {
    color: white;
}
.gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}

</style>