<template>
  <div class="list" ref="wrapper" @click="alert(1)">
    <div>
      <div class="area">
        <div class="title border-topbottom" @click="alert(1)">当前城市</div>
        <div class="button-list">
          <div class="buuton-list">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom"><strong>{{computeLength}}</strong>大热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item of hot" :key="item.id" >
              <div class="button" >{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="area thelist"
        v-for="(item,key) of cities"
        :key="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div 
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{innerItem.name}}
          </div>
      </div>
    </div>
    <div class="test" ref="test">test</div>
  </div>
</template>

<script>
import { ref, computed, defineComponent, onMounted} from 'vue';
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  setup (props,ctx) {
    const store = useStore()
    const city = computed( () => store.state.city)
    console.log(city);
    const computeLength = computed(() => {
      return props.hot.length
    })

    let wrapper = ref(null)
    let test = ref(null)

    const computeInnerLength = computed((i) => {
      return i.length
    })
    onMounted(() => {
      let bscroll = new Bscroll(document.querySelector('.thelist'))
      // console.log(bscroll);
      // console.log(bscroll.scrollTo);
      // console.log(document.querySelector('.test'));
      // console.log(document.querySelector('.list'));
      // bscroll.scrollToElement(document.querySelector('.test'))
      //bscroll.scrollToElement(test)
      console.log(1);
    })

    // const test = () => {
    //   console.log(1)
    //   //bscroll.scrollToElement(document.querySelector('.test'))
    // }

    return {
      computeLength,
      computeInnerLength,
      wrapper,
      test,
      city
    }
  }
})
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