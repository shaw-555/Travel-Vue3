<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-icons/>
    <home-recommend/>
    <home-weekend/>
  </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, onMounted, defineComponent, getCurrentInstance } from 'vue'
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

    //console.log(ctx)
    const handleGetDataSucc = (res) => {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        ctx.sightName = data.sightName
        ctx.bannerImg = data.bannerImg
        ctx.gallaryImgs = data.gallaryImgs
        ctx.list = data.categoryList
        console.log(ctx.sightName);
      }
    }

    const getDetailInfo = () => {
      axios.get('api/detail', {
        params: {
          id: ctx.$route.params.id
        }
      }).then(ctx.handleGetDataSucc)
    }
    onMounted(() => {
      getDetailInfo()
      console.log(1)
   })
    return {
      ctx,
      handleGetDataSucc,
      getDetailInfo
    }
  }
})
</script>

<style lang="stylus">
</style>