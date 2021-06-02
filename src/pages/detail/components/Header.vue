<template>
  <div>
      <router-link
        tag="div"
        to="/"
        class="header-abs"
        v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
      >
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background-color: rgba(0, 0, 0, .8)
    text-align: center
    .header-abs-back
      color: #fff
      font-size: .4rem
      margin-top: .24rem
  .header-fixed
    position fixed
    top 0
    left 0
    right  0
    height $headerHeight
    line-height $headerHeight
    text-align center
    background-color $bgColor
    font-size .32rem
    color #fff
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .4rem
      text-align center
      font-size .4rem
      color #fff
</style>
