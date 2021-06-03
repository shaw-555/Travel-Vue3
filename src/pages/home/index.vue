<template>
  <div>
    <home-header/>
    <home-swiper :list="swiperList2"/>
    <home-icons :list="iconList"/>
    <home-recommend/>
    <home-weekend/>
  </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, watch ,onMounted, onBeforeMount, onUpdated, defineComponent, getCurrentInstance } from 'vue'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default defineComponent({
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup(prop) {
    const {
      ctx
    } = getCurrentInstance();
    let swiperList2 = reactive([]);
    let iconList = ref([]);
    console.log(ctx)
    const handleGetDataSucc = (res) => {
      res = res.data
      if (res.ret && res.data) {
        swiperList2 = res.data.swiperList
        iconList = res.data.iconList
        console.log(res);
        console.log(11,ctx.swiperList2);
        console.log(1,swiperList2);
        console.log(11,ctx.swiperList2);
        console.log(2,iconList);
        console.log(22,ctx.iconList);
        console.log('props',prop)
        return {
          swiperList2,
          iconList
        }
      }
    }

    let res = getHomeInfo();
    console.log('test',res)
    function getHomeInfo() {
      axios.get('api/index.json').then(ctx.handleGetDataSucc)
    }

    onBeforeMount(() => {
      getHomeInfo()
    })
    onUpdated(() => {
      getHomeInfo()
    })
    return {
      ctx,
      handleGetDataSucc,
      getHomeInfo,
      swiperList2,
      iconList
    }
  }
})
</script>

<style>

</style>
