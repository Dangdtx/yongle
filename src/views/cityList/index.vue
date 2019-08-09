<template>
<<<<<<< HEAD
  <div class="page">
    <div class="cityList">
      <div class="cityList-title">
        <i class="iconfont"></i>
        <span>选择演出城市</span>
      </div>
      <div class="hotCity">
        <h3>热门城市</h3>
        <ul>
          <v-touch v-for="(item,index) in hotCity"                    
                      :key="index"
                      tag="div"
                      @tap="clickTouchHandler(item)"
                      >
                      {{item.CITYNAME}}
          </v-touch>
         
        </ul>
      </div>
      <div class="moreCity">
        <h3>更多城市</h3>
        <ul>
         <v-touch v-for="(item,index) in moreCity"
              :key="index"
              tag="div"
              @tap="clickTouchHandler(item)">
                  {{item.CITYNAME}}
         </v-touch>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions,mapState,mapMutations} from "vuex"
export default {
  name:"Citylist",
  created(){
      this.hotCityHandler(),
      this.moreCityHandler()
  },
  //await必须在async里面使用,async代表异步函数，await等待，让多个异步同步执行，await可以直接拿到.then的数据
  methods:{
    ...mapActions({
      hotCityHandler:"city/hotCityHandler",
      moreCityHandler:"city/moreCityHandler"
    }),
    ...mapMutations({
      cityToggleMutations:"city/cityToggleMutations"
    }),
    clickTouchHandler(params) {
      this.$router.push("/home")
      console.log(params,111)
      this.cityToggleMutations(params)
    }
  },
  computed:{
    ...mapState({
      hotCity:state=>state.city.hotCity,
      moreCity:state=>state.city.moreCity

=======
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
            <li class="active"  v-for="(item,index) in fcitys">
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
</template>

<script>
import { mapActions, mapState,mapMutations} from "vuex";
export default {
  name: "CityList",
  created() {
    this.handleGetCityAction()
  },
  methods: {
    ...mapActions({
      handleGetCityAction:"city/handleGetCityAction"
>>>>>>> yang
    })
  }
}
</script>

<<<<<<< HEAD

<style>
.cityList {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
}
.cityList-title {
    width:100%;
    height:.4rem;
    font-size:0.17rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
} 
.hotCity h3,.moreCity h3 {
  font-size:0.14rem;
  margin:0.2rem;
}
.hotCity ul ,.moreCity ul{
  display:flex;
  flex-direction:row;
  font-size:0.14rem;
  /* justify-content:space-between; */
  flex-wrap:wrap;
  padding:0px 0.2rem;
  text-align:Center;
}
.hotCity ul div,.moreCity ul div {
  width:0.8375rem;
  height:0.4rem;

}
</style>

=======
<style>

</style>
>>>>>>> yang
