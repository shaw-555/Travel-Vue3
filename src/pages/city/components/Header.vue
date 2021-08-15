<template>
  <div class="header">
    选择城市
    <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    margin-top -60px
    position relative
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    background-color $bgColor
    font-size .32rem
    color #fff
    .header-back
      position absolute
      left 0
      top 0
      width .4rem
      text-align center
      font-size .4rem
      color #fff
</style>