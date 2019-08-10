<template>
    <div class="order">
        <Head_tit> </Head_tit>
        <div class="my-orders">
            <div class="list unpaid">
                <div class="top">
                    <div class="fl gray6 f12">
                        <p class="fl">订单编号：55303545 </p>
                        <!---->
                        <!---->
                    </div>
                    <div class="fr gray5 order-state fw f12"><span>无效</span></div>
                </div>
                <div class="con"><a href="/person/orderdetail.html?orderid=55303545" class=""><i class="logoBg"></i>
                        <img src="//static.228.cn/upload/2019/06/20/AfterTreatment/1561018126947_k2p5-0.jpg!t70x93.jpg"
                            onerror="this.src=&quot;//static.228.cn/resources/images/lazy_default.gif&quot;"
                            class="fl lt" style="background: rgba(28, 86, 1, 0.3);">
                        <div class="fl rt">
                            <h3 class="f14 black" style="-webkit-box-orient: vertical;">Olive橄榄现场呈现·2019谢春花"无声叛逆"全国巡回演出
                            </h3>
                            <p class="f12 gray9 mt10"><span class="db">2019-08-23 20:00</span></p>
                            <p class="mt10 cl pirce-num"><b class="black fl f14">1 <em class="f13">张</em></b> <b
                                    class=" fr f14 red">¥ <em class=" f15"> 498</em></b></p>
                        </div>
                    </a></div>
            </div>
            
            <!---->
        </div>
    </div>
</template>
<script>
    export default {
        name: "Order"
    }
</script>
<style>
    html {
        font-size: 100px;
    }

    .order {
        width: 100%;
        height: 100%;
    }

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

    .head-tit .goback,
    .head-tit .share,
    .head-tit .search {
        width: .18rem;
        height: .18rem;
        position: absolute;
        display: block;
        top: .11rem;
        color: #323232;
        background: red;
    }
    .my-orders {
    margin: 0 .15rem;
}
.my-orders .list {
    background: #fff;
    overflow: hidden;
    border-radius: .1rem;
    margin-top: .15rem;
}
.my-orders .list.unpaid .top {
    background: #fff7f7;
}
.my-orders .list .top {
    padding: 0 .15rem;
    height: .35rem;
    line-height: .35rem;
    border-bottom: 1px solid #fafafb;
    background: #fff;
}
.gray6 {
    color: #666 !important;
}
.f12 {
    font-size: 0.12rem;
}
.fl {
    float: left;
}
.my-orders .list.unpaid .top .order-state {
    color: #ff3a56;
}
.fw {
    font-weight: bold;
}
.fr {
    float: right;
}
.my-orders .list .con {
    padding: .15rem;
    overflow: hidden;
    position: relative;
}
a {
    text-decoration: none;
    color: #333;
} 
.my-orders .list .con .logoBg {
    width: 1.2rem;
    height: 1.45rem;
    background: url(//m2static.228.cn/images/order-head.png) no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: .1rem;
    right: 0;
    z-index: 1;
}
.my-orders .list.unpaid .con .logoBg {
    background: url(//m2static.228.cn/images/order-head-unpaid.png) no-repeat;
    background-size: 100%;
}
.my-orders .list .con Img.lt {
    width: .86rem;
    height: 1.13rem;
    margin-right: .15rem;
    border-radius: .1rem;
}
img {
    vertical-align: top;
}
.my-orders .list .con .rt {
    width: calc(100% - 1.01rem);
    position: relative;
}
.my-orders .list .con .rt h3 {
    height: .4rem;
    line-height: .2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; 
    text-align: left;
}
.black {
    color: #000;
}
.f14 {
    font-size: 0.14rem;
}
.gray9 {
    color: #999;
}
.mt10 {
    margin-top: 0.1rem;
}
.db {
    display: block;
}
.pirce-num {
    position: absolute;
    bottom: -.45rem;
    left: 0;
    width: 100%;
}
.f13 {
    font-size: 0.13rem;
}
em {
    font-style: normal;
}
.red {
    color: #ff3a56;
}
.f15 {
    font-size: 0.15rem;
}
</style>