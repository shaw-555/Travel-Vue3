<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="buuton-list">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCities" :key="item.id" >
              <div class="button" >{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">xxx</div>
        <div class="item-list">
          <div class="item border-bottom">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before 
      border-color: #ccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
  .title 
    line-height .44rem
    background-color #eee
    padding-left .2rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.3%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .3rem
  .item-list
    .item 
      line-height .76rem
      color #666
      padding-left .2rem
      text-align center
</style>