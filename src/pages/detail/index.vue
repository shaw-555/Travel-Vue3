<template>
  <div>
    <detail-banner/>
    <detail-header/>
    <detail-list/>
  </div>
</template>

<script>
import { onMounted,defineComponent, getCurrentInstance } from 'vue'
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

    const handleGetDetailInfoSucc = (res) => {
      console.log(res);
    }
    const getDetailInfo = () => {
      // axios
      //   .get('api/detail.json')
      //   .then(handleGetDetailInfoSucc)
      axios.get('/static/mock/detail').then(handleGetDataSucc)
    }

    onMounted(() => {
      getDetailInfo();
      console.log(1);
    })
    return {
      ctx,
      getDetailInfo,
      handleGetDetailInfoSucc
    }
  }
})
</script>
