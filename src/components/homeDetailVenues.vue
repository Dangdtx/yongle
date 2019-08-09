<template>
    <div id="vennus">
        <div class="vennus-detailInf">
            <div class="one" v-for="(item,index) in vennusList.list"
                        :key="index"
                        @click="clickToDetail(item)">
                <img :src="item.IMG|ToImg" alt="">
                <p>{{item.VNAME}}</p>
                <div>{{item.ADDRESS}}</div>
            </div>
           
        </div>
        
    </div>
</template>
<script>
import {vennus_now_api} from "api/citylist.js"
import {mapState} from "vuex"
export default {
    async created() {
        let data = await vennus_now_api(this.FCONFIGID,this.pageNum,this.type);
        this.vennusList=data.data.venuePage;
        console.log(this.vennusList,1111)
    },
    computed:{
        ...mapState({
            FCONFIGID:state=>state.city.FCONFIGID,
            pageNum:state=>state.city.pageNum,
            type:state=>state.city.type
        })
    },
    methods:{
        clickToDetail(params) {
            console.log(params,999)
        }
    },
    data() {
        return {
            vennusList:[]
        }
    }
    
}
</script>
<style>
#vennus {
    height:100%;
}
.vennus-detailInf {
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:0.2rem;
    flex:1;
    padding-bottom:0.5rem;
}
.vennus-detailInf .one {
    width:48%;
    margin-bottom:0.12rem;
    white-space:nowrap;
    overflow:hidden;
}
.vennus-detailInf .one img {
    width:1.61rem;
    height:1.4rem;
    border-radius:0.1rem;
    margin-bottom:0.05rem;
}
.vennus-detailInf .one p {
    font-size: .13rem;
    margin-bottom:0.05rem;
    color:#000;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
.vennus-detailInf .one div {
    font-size: .13rem;
    color:#999;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
</style>


