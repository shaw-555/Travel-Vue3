<template>
  <div>
    <home-header/>
    <home-swiper :list="state.swiperList"/>
    <home-icons :list="state.iconList"/>
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
    const state = reactive({
      swiperList:[],
      iconList:[]
    })
    console.log(ctx)
    const handleGetDataSucc = (res) => {
      res = res.data
      if (res.ret && res.data) {
        state.swiperList = res.data.swiperList
        state.iconList = res.data.iconList
       
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
      state
    }
  }
})
</script>

<style>

</style>
