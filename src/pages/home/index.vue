<template>
  <div>
    <home-header/>
    <home-swiper :list="state.swiperList"/>
    <home-icons :list="state.iconList"/>
    <home-recommend :list="state.recommendList"/>
    <home-weekend :list="state.weekendList"/>
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
      iconList:[],
      recommendList: [],
      weekendList: []
    })
    console.log(ctx)
    const handleGetDataSucc = (res) => {
      if (res.status && res.data) {
        res = res.data
        state.swiperList = res.swiperList
        state.iconList = res.iconList
        state.recommendList = res.recommendList
        state.weekendList = res.weekendList
      }
    }

    function getHomeInfo() {
      axios.get('/static/mock/index').then(handleGetDataSucc)
    }

    onMounted(() => {
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
