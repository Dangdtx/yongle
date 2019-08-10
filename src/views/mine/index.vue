<template>
<div class="page mine">   
            <div class="product personal pb50 lianmeng">
              <div class="personal-head">
                <div class="head-bg">
                  <div class="person-headBg-shadow"></div>
                </div>
                <div class="head-icon">
                  <a href="javascript:;" class="gobacks"> < </a>
                </div>
                <div class="con mt80">
                  <div class="top">
                    <div class="head-portrait tc pt10">
                      <img src="//m2static.228.cn/images/head-photo.png" />
                      <h4 class="f18 mt10">wap182****2097</h4>
                    </div>
                    <div class="right fr">
                      <span>
                        <a href="###" class="serviceIcon">
                          <b></b>
                        </a>
                      </span>
                      <a href="/person/profile.html" class="setUpIcon"></a>
                    </div>
                  </div>
                  <div class="bot tc">
                    <span>
                      <a href="/person/myCashCoupon" class="shengou-order">
                        0张
                        <br />现金券
                      </a>
                    </span>
                    <span>
                      <span>未启用</span>
                      <br />电子钱包
                    </span>
                    <span>
                      0
                      <br />积分
                    </span>
                  </div>
                </div>
              </div>
              <div class="personal-content nolianmeng">
                <div class="orders-btn">
                  <a href="/person/order.html" class="yanchu-order">
                    <i></i>我的订单
                  </a>
                  <a href="/person/myCashCoupon" class="sg-cash-coupon">
                    <i></i>现金券
                  </a>
                </div>
                <div class="btn-list">
                  <p>
                    <a href="/person/address.html" class="shipping-address">
                      <i></i>收货地址
                    </a>
                    <a href="/person/collect.html" class="my-collection">
                      <i></i>我的收藏
                    </a>
                    <a href="/person/shortagerecord.html" class="shortage-registration">
                      <i></i>我的登记
                    </a>
                  </p>
                  <p>
                    <a href="/person/question.html" class="my-question">
                      <i></i>我的提问
                    </a>
                    <a href="/person/watchProof.html" class="vouchers">
                      <i></i>观演凭证
                    </a>
                  </p>
                  <p>
                    <a></a>
                  </p>
                </div>
              </div> 
            </div> 
       
 
</div>
</template>
<script>

export default {
  name: "Mine",
  components: {}
};
</script>

<style    >
a{text-decoration: none;}
html{ font-size: 100px;}
h2, h3, h4, h5, h6 {font-weight: normal;}
.mine{width: 100%; height: 100%;}
.pb50 {padding-bottom: 0.5rem; width: 100%;height: 100%;}
.personal .personal-head { width: 100%; position: relative;z-index: 1;}
.personal .personal-head .head-bg { position: absolute; width: 100%; height: 70%;background: url(//m2static.228.cn/images/head-poho-bg.jpg) no-repeat top;background-size: 120%;}
.person-headBg-shadow { width: 100%;height: 100%;background-size: 100%;position: relative;z-index: 2;}
.product .head-icon { padding-top: .29rem; width: calc(100% - .3rem); margin-left: .15rem; overflow: hidden;position: relative; z-index: 9;} 
.product .head-icon .gobacks { float: left; font-size: .28rem; font-weight: 900;  padding-left: .05rem ; background-position: 0 -34.54rem; background: #986E6D;border-radius: 50%;color:#f3f4f5}
.product .head-icon a { width: .3rem;height: .31rem;display: block;background-size: 1.5rem;}
.personal .personal-head .con { position: relative;z-index: 9;height: 1.79rem;}
.mt80 { margin-top: 0.8rem;  }
.personal .personal-head .con .top {background: url(//m2static.228.cn/images/person-titBg.png) top no-repeat; background-size: 100%; position: relative;}
.pt10 {padding-top: 0.1rem;display: flex;flex-direction: column;justify-content: center;align-items: center; text-align: center;text-align: center;position: relative}
.head-portrait img { height: .6rem;width: .6rem;border: 2px solid #fff;border-radius: 50%;}
img {vertical-align: top;}
.f18 { font-size: 0.18rem;margin-top: 0.1rem; }
.personal .con .top .right {position: absolute;top: .33rem;right: 0;}
.fr { float: right;}
.personal .con .top .right .serviceIcon {background-position: 0 0;}
.personal .con .top .right a {  width: .2rem;height: .2rem;display: block;float: left;margin-right: .26rem;}
.personal-content .btn-list p a i, .personal-content .orders-btn a i, .personal .con .top .right a {background: url(//m2static.228.cn/img/31af021.png) no-repeat;background-size: .25rem;}
.personal .con .top .right .setUpIcon {background-position: 0 -.28rem;}
.personal .con .top .right a { width: .2rem;height: .2rem; display: block; float: left; margin-right: .26rem;}
.personal-content .btn-list p a i, .personal-content .orders-btn a i, .personal .con .top .right a { background: url(//m2static.228.cn/img/31af021.png) no-repeat; background-size: .25rem;}
.personal .con .bot { display: flex;height: .4rem;margin: 0.2rem .2rem .1rem; font-size: .12rem;}
.tc {text-align: center;}
.personal .con .bot span {flex: 1;}
.personal .con .bot span a {color: #000;}

.personal-content .orders-btn {
    display: flex;
    height: .98rem;
    border-top: 1px solid #f3f4f5;
    border-bottom: 1px solid #f3f4f5;
    line-height: .98rem;
}
.personal-content .orders-btn a {
    flex: 1;
    text-align: center;
    position: relative;
    padding-top: .24rem;
    font-size: .13rem;
    color: #333;
}
.personal-content .orders-btn .yanchu-order i {
    background-position: 0 -.58rem;
}
.personal-content .orders-btn a i {
    width: .23rem;
    height: .24rem;
    display: block;
    position: absolute;
    top: .3rem;
    left: calc((100% - .21rem)/2);
    background: url(//m2static.228.cn/img/31af021.png) no-repeat;
    background-size: .25rem;
}
.personal-content .orders-btn .sg-cash-coupon i {
    background-position: 0 -5.23rem;
    width: .3rem;
    height: .24rem;
    background-size: .3rem;
    left: calc((100% - .3rem)/2);
    top: .31rem;
    background: url(//m2static.228.cn/img/31af021.png) no-repeat;
    background-size: .25rem;
}
.personal-content .btn-list {
    margin-top: .1rem;
}
.personal-content .btn-list p {
    height: .9rem;
    margin: 0;
}
.personal-content .btn-list p a {
    display: block;
    float: left;
    width: calc(33.33333% - 1px);
    text-align: center;
    line-height: .9rem;
    height: .7rem;
    position: relative;
    padding-top: .15rem;
    font-size: .13rem;
    overflow: hidden;
    color: #7b8187;
}
.personal-content .btn-list p a:nth-child(3) {
    border-right: none;
    width: 33.33333%;
}
.personal-content .btn-list p .shipping-address i {
    background-position: 0 -5.39rem;
}
.personal-content .btn-list p .my-collection i {
    background-position: 2px -2.96rem;
}
.personal-content .btn-list p .shortage-registration i {
    background-position: 4px -2.62rem;
}
.personal-content .btn-list p .my-question i {
    background-position: 2px -3.3rem;
}
.personal-content .btn-list p .vouchers i {
    background-position: 0 -1.96rem;
}
.personal-content .btn-list p a i {
    width: .23rem;
    height: .22rem;
    left: calc((100% - .22rem)/2);
    top: .2rem;
    position: absolute;
    display: block;
}
.personal-content .btn-list p a i, .personal-content .orders-btn a i, .personal .con .top .right a {
    background: url(//m2static.228.cn/img/31af021.png) no-repeat;
    background-size: .25rem;
}
</style>