<template>
  <div>
    <detail-banner/>
    <detail-header/>
    <detail-list :list="state.list"/>
  </div>
</template>

<script>
import { reactive, onMounted,defineComponent, getCurrentInstance } from 'vue'
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from'./components/Header.vue'
import DetailList from'./components/List.vue'
export default defineComponent({
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup(props){
    const {
      ctx
    } = getCurrentInstance();

    const state = reactive({
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    })

    const handleGetDetailInfoSucc = (res) => {
      const result  = res.data
      if (result.ret && result.data) {
        console.log(result.data);
        state.sightName = result.data.sightName
        state.bannerImg = result.data.bannerImg
        state.gallaryImgs = result.data.gallaryImgs
        state.list = result.data.categoryList
        console.log('state',state);
      }
    }
    const getDetailInfo = () => {
      // axios
      //   .get('api/detail.json')
      //   .then(handleGetDetailInfoSucc)
      axios.get('/static/mock/detail').then(handleGetDetailInfoSucc)
    }

    onMounted(() => {
      getDetailInfo();
    })
    return {
      ctx,
      getDetailInfo,
      handleGetDetailInfoSucc,
      state
    }
  }
})
</script>
