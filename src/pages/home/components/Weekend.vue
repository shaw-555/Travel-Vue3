<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        class="item border-bottom"
        >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item-img-wrapper
    box-sizing border-box
    overflow hidden
    height 100px
    padding-bttom 37.09%
    .item-img
      width 100%
      height 2rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #eee
        ellipsis()
</style>