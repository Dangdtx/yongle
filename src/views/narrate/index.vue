<template>
  <div id="narrate">
    <div class="narrate_all">
      <div class="title">
        <v-touch class="iconfont" 
                  @tap="clickIhandler()"
                  tag="i">&#xe618;
        </v-touch>
        <h2 class="head">永乐说戏</h2>
      </div>
      
      <img class="slide-show" src="../../../../../永乐说戏_files/1524637153542_o1z2.png" alt />
      <div class="narrate-detail">
        <div class="one" 
                    v-for="(item,index) in showList"
                    :key="index">
          <div class="show_list">
            <img :src="item.IMG|ToImg" alt />
            <div class="show_list_inf">
              <h3>{{item.REMARK}}</h3>
              <div>2018年12月05日</div>
            </div>
          </div>
          <div class="show_list_detail">{{item.TEXT}}</div>
        </div>
      </div>
      <div class="pullmore">
        <a href="">展开更多</a>
      </div>
    </div>
  </div>
</template>
<script>
import {narrate_now_api} from "api/citylist.js"
export default {
  data() {
    return {
      showList:[]
    }
  },
  methods:{
    clickIhandler() {
      this.$router.back()
    }
  },
  async created() {
    let data = await narrate_now_api();
    console.log(data.data.sxList)
    this.showList=data.data.sxList
  }
};
</script>
<style>
#narrate {
  width: 100%;
  height: 100%;
  background:#c3c3c3;
}
.narrate_all {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.15rem 1rem;

}
.narrate_all .title {
  height:0.4rem;
  display:flex;
  flex-direction: row;
  justify-content:space-between
}
.narrate_all .title i{
  line-height:0.4rem;
}
.narrate_all .head {
  font-size:0.17rem;
  width: 100%;
  height: 0.4rem;
  line-height:0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
 
}
.narrate_all .slide-show {
  width: 100%;
  height: 1.52rem;
}
.narrate_all .one {
  display: flex;
  flex-direction: column;
  padding: 0.15rem;
  background:#fff;
  margin-top:0.15rem;
}

.narrate_all .one .show_list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.narrate_all .one .show_list img {
  width: 1.8rem;
  height: 1.0178rem;
  border-radius: 0.1rem;
}
.narrate_all .one .show_list .show_list_inf {
  width: 1.25rem;
  display: flex;
  flex-direction: column;
  margin-left: 0.1rem;
}
.narrate_all .one .show_list .show_list_inf h3 {
  width: 100%;
  font-size: 0.16rem;
}
.narrate_all .one .show_list .show_list_inf div {
  width: 100%;
  color: #b5bbc1;
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.narrate_all .one .show_list_detail {
  height:.4rem;
  line-height:.2rem;
  width: 100%;
  color: #7b8187;
  padding-top: 0.05rem;
  font-size: 0.13rem;
  overflow:hidden;
}
.narrate_all .pullmore {
  width:100%;
  height:.3rem;
  font-size:0.17rem;
  line-height:.3rem;
  text-align:Center;
 
}
</style>


