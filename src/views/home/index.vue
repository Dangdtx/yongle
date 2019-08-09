<template>
  <div id="Home" ref="homeAll">
    <div class="Home-all">
      <!-- 导航条 -->
      <div class="home-nav">
        
        <router-link class="homeCity"
                to="/cityList"
                tag="div">
              <span>{{cityname}}</span>
              <div class="circle"></div>
        </router-link>
       
        
        <div class="nav-search">
          <!-- <router-link  :to="/search" tag="input" :key="index">搜索</router-link> -->
          
            <v-touch type="text" placeholder="搜索"
                    @tap="clickHandlerInput()"
                    tag="input"
                >
            </v-touch>
         
          
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="slideShow">
        <a href="#">
          <img src="../../../public/img/slideShow1.jpg" alt />
        </a>
      </div>
      <!--  -->

      <TitleNav></TitleNav>
      <!-- 推荐，场馆 -->
      <div class="home-detail">
        <div v-for="(item,index) in arr" :key="index" @click="clickHandler(index)">{{item}}</div>
      </div>

      <keep-alive>
        <component :is="page"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
import Recommended from "components/homeDetailRecommended";
import Venues from "components/homeDetailVenues";
import TitleNav from "components/list";
import {mapState} from "vuex"
export default {
  components: {
    Recommended,
    Venues,
    TitleNav
  },
  created() {
    console.log(this)
  },
  data() {
    return {
      page: "Recommended",
      arr: ["推荐", "场馆"],
      homeCity: "homeCity",
      
    };
  },
  computed:{
    ...mapState({
      cityname:state=>state.city.CITYNAME
    })
  },
  methods: {
    clickHandler(index) {
      switch (index) {
        case 0:
          this.page = "Recommended";
          break;
        case 1:
          this.page = "Venues";
          break;
      }
    },
    clickHandlerInput() {
      this.$router.push("/search")
    }
  }
  // mounted() {
  //   new BScroll(this.$refs.homeAll,{
  //     tap:true
  //   });
  // }
};
</script>
<style>
html,
body {
  font-size: 100px;
}
#Home {
  height: 100%;
}
.Home-all {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
/* 导航 */
.home-nav {
  width: 100%;
  height: 0.48rem;
  display: flex;
  padding: 0.04rem 0.15rem 0.04rem 0.1rem;
  justify-content: space-between;
  font-size: 0.14rem;
  align-items: center;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
}

.homeCity {
  width: 0.65rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color: #fff;
  font-family: 宋体;
}
div.circle {
  display: inline-block;
  width: 0;
  height: 0;
  line-height: 0.4rem;
  border-width: 0.05rem;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  margin-left: 0.05rem;
  margin-top: 0.15rem;
}

.nav-search {
  width: 2.85rem;
  height: 0.34rem;
  text-align: center;
  border-radius: 1rem;
}
.nav-search input {
  width: 2.85rem;
  height: 0.34rem;
  border-radius: 0.1rem;
  text-align: center;
}
/* 轮播图 */

.slideShow {
  width: 3.75rem;
  height: 1.52rem;
}
.slideShow img {
  width: 3.75rem;
  height: 1.52rem;
}

/* title-nav */

/* 推荐 */

.home-detail {
  height: 0.39rem;
  font-size: 0.22rem;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0.2rem 0.15rem;
  padding: 0.1rem 0 0;
  font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB",
    "Microsoft YaHei", "WenQuanYi Micro Hei", "sans-serif";
}
.home-detail-recommended {
  margin-right: 0.1rem;
}
.home-detail > div {
  margin-right: 0.15rem;
  width: 0.44rem;
  height: 0.25rem;
}
</style>



