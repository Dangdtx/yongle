<template>
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
    })
  }
}
</script>

<style>

</style>