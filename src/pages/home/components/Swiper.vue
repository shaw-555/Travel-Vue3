<template >
  <swiper>
    <swiper-slider>1</swiper-slider>
    <swiper-slider>2</swiper-slider>
    <swiper-slider>3</swiper-slider>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="stylus" scoped>
  div
    color red
</style>