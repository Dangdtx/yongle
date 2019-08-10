<template>
  <div class="active">
    <div class="activies">
      <Head_tit></Head_tit>
      <div class="pb50">
        <div class="wrapper" ref="wrapper">
          <div class="activity-area">
            <router-link
              class="list tc"
              v-for="(item,index) in list"
              :key="index"
              tag="div"
              :to="{name:'list',params:{path:item.URL}}"
            >
              <div class="photo" style="height: 150.087px;">
                <img :src="item.IMG|ToImg('//static.228.cn')" />
              </div>
              <div class="text f17 fw">{{item.SHARETITLE}}</div>
            </router-link>
            <v-touch class="load-more" @tap="handlePageNum()">
              <a href="javascript:;">查看更多</a>
            </v-touch>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { activies_api } from "api/activies.js";
export default {
  name: "Activies",
  data() {
    return {
      active: "活动专区",
      list: "",
      list2: [],
      count: 1
    };
  },
  async created() {
    let data = await activies_api();
    this.list = data.data.subjectPage.list;
  },

  methods: {
    async handlePageNum() {
      if (this.count <= 2) {
        this.count++;
        let data = await activies_api(this.count);
        this.list2 = data.data.subjectPage.list;
        this.list2.forEach(item => {
          this.list.push(item);
        });
        console.log(this.list);
      }
    },
    handleTo(PATH) {
      //   this.$router.push({name:"list",params:{PATH}})
    }
  }
};
</script>

<style scoped>
html {
  font-size: 100px;
}
.active {
  width: 100%;
  height: 100%;
}
.activies {
  background: #f5f6f7;
  width: 100%;
  height: 100%;
}
.pb50 {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
}
.wrapper {
  widows: 100%;
  height: 100%;
  overflow: auto;
}
.activity-area {
  margin: 0.15rem;
}
.activity-area .list {
  margin-bottom: 0.2rem;
  width: 100%;
  border-radius: 0.1rem;
  overflow: hidden;
  background: #fff;
}
.tc {
  text-align: center;
}
.activity-area .photo {
  width: 100%;
  /* height: 1.5rem; */
  position: relative;
}
img {
  vertical-align: top;
}
.activity-area .photo img {
  width: 100%;
  height: 100%;
}
.activity-area .text {
  margin: 0.2rem;
}
.f17 {
  font-size: 0.17rem;
}
.fw {
  font-weight: bold;
}
.load-more {
  font-size: 0.14rem;
  height: 0.3rem;
  width: 100%;
  background: #fff7f7;
  line-height: 0.3rem;
  text-align: center;
}
.load-more a {
  color: #ff2959;
}
</style>