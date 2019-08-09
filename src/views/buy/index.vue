<template>
    <div class="box">
        <header>
            <a class="back">&lt;</a>
            <span>
                橄榄现场呈现·2019谢春花"无声叛逆"全国巡回演出
            </span>
        </header>
        <div class="check-field">
            <h4>选择日期场次</h4>
            <ul>
            <li _rel="2019-08-23 20:00" class="active">
            <span><b>2019.08.23</b>周五 20:00</span>
            </li>
            </ul>
        </div>
        <div class="check-field">
        <h4>选择价格</h4> 
        <ul id="priceBox">
        <li _p="280" class="active">
        <span><b>280</b></span></li>
        <li _p="480" class="">
        <span><b>480(二层)</b></span>
        </li>
        <li _p="680" class="">
        <span><b>680</b></span>
        </li>
        <li _p="699" class="">
        <span><b>699(480*2 三层)</b></span>
        </li>
        </ul></div>
        <div class="buy-bot">
        <div class="check-num">
        <p class=""><em>3</em>张</p>
        <p class=""><em>4</em>张</p>
        <p class=""><em>5</em>张</p>
        </div> 
        <div class="buy-num">
         <i class="remove toEnd">-</i>
          <div class="num">
            <b>1</b> 包含280元票品1张
          </div>
         <i class="add">+</i>
       </div>
        <div class="btns buy-btn border-t">
        <p class="gray9">应付金额<b class="red f22 ml5">¥ 280</b></p> <a class="btn gradual white">
				下一步
		</a>
        </div>
        </div>   
    </div>
</template>

<script>
export default {
    name:"buy"
}
</script>

<style>
*{
    margin:0;
    padding: 0;
}
html{
   font-size: 100px; 
}
.box{
    width:100%;
    height:100%;
}
header{
    position: relative;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    width: calc(100% - .8rem);
    font-size: .17rem;
    padding: 0 .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
}
.back{
    width: .18rem;
    height: .18rem;
    position: absolute;
    display: block;
    left: 0.15rem;
    top: .11rem;
    color: #323232;
    font-size: .08rem;
    overflow: hidden;
    text-align:center;
    line-height: .18rem;
}
.check-field{
    margin: .07rem .15rem;
    overflow: hidden;
}
.check-field{
    color: #999ea3;
    letter-spacing: .5px;
    font-size: .13rem;
    margin-bottom: .13rem;
}
.check-field ul li{
    margin: 0 .06rem .13rem;
    float: left;
    display: table;
    height: .5rem;
    text-align: center;
    min-width: calc(33.33333% - .24rem);
    padding: 0 .05rem;
    font-size: .12rem;
    background: #fff;
    border-radius: .1rem;
    color: #fff;
    box-shadow: 0 2px 8px 0 rgba(255,37,68,.2);
    background: linear-gradient(to right, #ff7e6f, #ff2959);
}
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.check-field ul li span b {
    font-size: .14rem;
}
.check-field ul li b {
    display: block;
}
.check-field ul li span{
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    z-index:1;
}
.buy-bot {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fefefe;
    border-radius: .2rem .2rem 0 0;
    padding-top: .15rem;
    font-size:.14rem;
}
.check-num {
    padding: 0 .2rem;
    display: flex;
    margin: .12rem 0 .16rem;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.check-num p {
    text-align: center;
    height: .26rem;
    line-height: .26rem;
    flex: 1;
    font-style: normal;
    background-position: 56% -.94rem;
    color: #7b8187;
}
.check-num p, .buy-num i {
   
}
em {
    font-style: normal;
}
.buy-num {
    display: flex;
    font-size: .12rem;
    letter-spacing: 1px;
    color: #a8b6bd;
    padding: 0 .2rem;
    margin: .25rem .35rem .2rem;
}
.buy-num i {
    display: block;
    width: .45rem;
    height: .45rem;
    border-radius: 50%;
}
.buy-num .num {
    flex: 1;
    text-align: center;
    font-size: .12rem;
}
.buy-num .num b {
    display: block;
    font-size: .25rem;
    color: #000;
}
.buy-num i {
    display: block;
    width: .45rem;
    height: .45rem;
    border-radius: 50%;
    text-align:center;
    line-height:.45rem;
    font-style:normal;
},
.btns {
    display: flex;
}
.border-t {
    border-top: 1px solid #f3f4f5;
}
.buy-btn p {
    text-align: center;
    width: 60%;
    font-size: .12rem;
    line-height: .6rem;
}
.gray9 {
    color: #999;
}
.red {
    color: #ff3a56;
}
.f22 {
    font-size: 0.22rem;
}
.ml5 {
    margin-left: 0.05rem;
}
.btns .btn {
    flex: 1;
    text-align: center;
    height: .44rem;
    line-height: .44rem;
    border-radius: 1rem;
    letter-spacing: 2px;
    font-size: .15rem;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    text-align: center;
   
}
.btns a {
    margin: .08rem .08rem .08rem 0;
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.white {
    color: white;
    
}
.btn {
    border-top: 0 none;
}

a {
    text-decoration: none;
    color: #333;
}
</style>