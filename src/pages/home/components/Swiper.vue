<template >
  <div>
    <swiper>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg" alt=""></swiper-slide>
      <swiper-slide><img  class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {  Scrollbar, A11y } from 'swiper'
SwiperCore.use([ Scrollbar, A11y])

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoPlay: {
          autoplay: true,
          delay: 1000
        }
      },
      swiperList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
      },{
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
      },{
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
      },{
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
      }],
    }
  },
}
</script>

<style>
  .swiper-slide {
    width: 10%;
  }
</style>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background-color #eee
    .swiper-img
      width 0%
      height 0%

</style>