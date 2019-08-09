<template>
    <div id="recommended">
        <div class="recommended-detailInf" >
            <div class="one" 
                v-for="(item,index) in recommendPage" 
                :key="index"
                @click="clickHandlerToDetail(item)">
                <img :src="item.PBIGIMG|ToImg" alt="">
                <p>{{item.NAME}}</p>
                <div class="time">{{item.BEGINDATE|ToTime}}-{{item.ENDDATE|ToTime}}</div> 
                <!--{{item.BEGINDATE}}-{{item.ENDDATE}} -->
                <div class="price"><span>￥{{item.MINPRICE}}</span>起</div>
            </div>
           
        </div>
    </div>
</template>
<script>
import {home_now_api} from "api/citylist"
import {mapState} from "vuex"
export default {
    data() {
        return {
            recommendPage:[]
        }
    },
    computed:{
        ...mapState({
            cityId:state=>state.city.PRODUCTNUM,
            CITYJX:state=>state.city.CITYJX
        })
    },
    methods:{
        clickHandlerToDetail(params) {
            console.log(params)
        }
    },
    async activated() {
        let data = await home_now_api(this.CITYJX)
        console.log(data)
        this.recommendPage=data.data.recommendPage.list
    },
    async created() {
        let data = await home_now_api(this.CITYJX)
        this.recommendPage=data.data.recommendPage.list
    
      

    }
    
}
</script>
<style>
.recommended-detailInf {
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:0.2rem 0.2rem 0.5rem;
    flex:1;
}
.recommended-detailInf .one {
    margin-bottom:0.1rem;
}

.recommended-detailInf .one img {
    width:1.05rem;
    height:1.4rem;
    margin-bottom:0.12rem;
}
.recommended-detailInf .one p {
    font-size: .13rem;
    height: .34rem;
    line-height: .18rem;
    width:1.05rem;  
    font-weight:700;
    margin-bottom:0.05rem;
    overflow:hidden;
    text-overflow: ellipsis;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
.recommended-detailInf .one .time {
    font-size:0.11rem;
    color:#999;
}
.recommended-detailInf>.one>div {
    font-size:0.12rem;
    
}
.recommended-detailInf .one .price {
    font-size:0.13rem;
}
.recommended-detailInf .one .price span {
    font-size:0.13rem;
    color: #ff3a56;
    margin-right:0.05rem;
}
</style>