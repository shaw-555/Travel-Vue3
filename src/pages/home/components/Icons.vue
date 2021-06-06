<template>
  <div class="icons">
    <ul class="icon">
      <li v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" :alt="item.id">
        <p>{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name : 'HomeIcons',
  props: {
    list: {
      type: Array
    }
  },
  setup(props){

  }
})
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'

  .icons
    .icon
      li
        display inline-block
        width 20%
        margin-top 10px
        img
          width 50px
          height 50px
        p
          font-size 8px
</style>
