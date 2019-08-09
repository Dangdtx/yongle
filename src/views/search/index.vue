<template>
  <div id="search">
    <div class="search-all">

      <!-- 标题---搜索-------- -->
      <div class="search-title">搜索</div>
      <!-- 输入框 -->
      <div class="search-input">
        <div class="search-touch">
          <i class="iconfont"></i>
          <input type="text" v-model="inputVal" />
        </div>

        <span class="cancel">取消</span>
      </div>

      <!-- 点击搜索栏 -->
      <div class="sortEvery">
        <div class="sortEvery-detail">
          <!-- 点击搜索标题 -->
          <div>
             <ul class="sortEvery-detail-list">
              <v-touch @tap="clickHandler()"
                      tag="li">
                      全国
              </v-touch>
              <li>全部分类</li>
              <li>全部时间</li>
            </ul>
          </div>

          <!-- 点击显示栏 -->
          <div>
              <li>
                <ul class="shownational" v-show="bool">
                  <li v-for="(item,index) in  national" :key="index">{{item.CITYNAME}}</li>
                </ul>
              </li>
              <li>
                <!-- <ul>
                              <li 
                              v-for="(item,index) in  categories"
                              :key="index">{{item.NAME}}
                              </li>
                </ul>-->
              </li>
              <li>
                <!-- <ul>
                              <li>全部时间</li>
                              <li>今天</li>
                              <li>明天</li>
                              <li>后天</li>
                </ul>-->
              </li>
        
          </div>
           
            
        </div>
      </div>

      <!--  -->
      <div>
        <div class="one" v-for="(item,index) in searchList" :key="index">
          <img :src="item.pbigimg|changePage" alt />
          <div class="one-detail">
            <h3>{{item.shorta}}</h3>
            <span class="time">{{item.begindate}}-{{item.enddate}}</span>
            <span class="add">{{item.vname}}</span>
            <div class="price">
              <span>{{item.minprice}}-{{item.maxprice}}</span>
              <span>元</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { search_now_api } from "api/citylist.js";
export default {
  name: "Search",
  data() {
    return {
      inputVal: "",
      searchList: [],
      national: [],
      categories: [],
      totalTime: [],
      bool:true
    };
  },
  async created() {
    let data = await search_now_api(this.inputVal);
    this.national = data.data.fcitys;
    console.log(this.national, 111111);
    //.CITYJX
    this.categories = data.data.typeas;
    console.log(this.categories, 22222222);
    //.TYPEAJX
  },
  watch: {
    async inputVal(newVal, oldVal) {
      //  let data= await search_now_api(this.national,this.categories,newVal);
      let data = await search_now_api(newVal);

      console.log(data);
      this.searchList = data.data.pagerMemory.fistPage;
    }
  },
  methods:{
    clickHandler() {
      console.log(111111111,this.bool)
      this.bool = !this.bool;
    }
  }
};
</script>
<style>
#search,
#search .search-all {
  width: 100%;
  height: 100%;
}
#search .search-all {
  display: flex;
  flex-direction: column;

  margin-bottom: 0.1rem;
}
#search .search-all .search-title {
  font-size: 0.17rem;
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  padding: 0 0.2rem;
}
#search .search-all .search-input {
  height: 0.34rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.15rem;
  padding:0 0.2rem;
}
#search .search-all .search-input .search-touch {
  width: 2.8rem;
  height: 0.34rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  display:flex;
  flex-direction:row;
  justify-content: center;
}

#search .search-all .search-input .search-touch input {
  height:0.32rem;
  vertical-align: center;
  text-align:center;
  
  border: none;
}
#search .search-all .search-input .cancel {
  width: 0.4rem;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.14rem;
  color: #5f646a;
}
#search,
#search .search-all .sortEvery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.search-all .one {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0 0.2rem 0.15rem;
  margin-bottom: 0.15rem;
}
.one img {
  width: 0.85rem;
  height: 1.13rem;
  border-radius: 0.15rem;
}
.one .one-detail {
  display: flex;
  flex-direction: column;
}
.one .one-detail h3 {
  font-size: 0.14rem;
  color: #333333;
  width: 2.35rem;
  height: 0.4rem;
}
.one .one-detail .time {
  font-size: 0.14rem;
  color: #999ea3;
  margin-top: 0.1rem;
}
.one .one-detail .add {
  font-size: 0.12rem;
  color: #999ea3;
}
.one .one-detail .price {
  font-size: 0.14rem;
  color: #ff3a56;
  margin-top: 0.1rem;
}
.sortEvery .sortEvery-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  font-size: 0.14rem;
  height: 0.45rem;
}
.shownational {
  width: 100%;
  height: 100%;
  padding: 0 0.3rem;
  display: flex;
  flex-wrap: wrap;
}
.shownational li {
  font-size: 0.14rem;
  width: 1.05rem;
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
}
.sortEvery-detail-list {
    width:100%;height:0.45rem;
 
    display:flex;
    flex-direction:row;
    justify-content: space-between;
}
.sortEvery-detail-list li{
    width:1.25rem;
    height:0.45rem;
    line-height:0.45rem;
    text-align:center;
}
</style>
