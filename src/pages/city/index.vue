<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list
      :hot="state.hotCities"
      :cities="state.cities"
    />
    <city-alphabet
      @change="handleLetterChange"
    />
  </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, onUpdated, onMounted,defineComponent, getCurrentInstance } from 'vue'
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CitySearch from './components/Search.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default defineComponent({
  name: 'theCity',
  components: {
    CityHeader,
    CityList,
    CitySearch,
    CityAlphabet
  },
  setup (props,{ctx}) {
  
    
    const state= reactive({
      hotCities: [],
      cities: {}
    })

    const letterValue = ref('A');
    const handleLetterChange = (letter) =>{
      letterValue.value = letter;
      console.log(letterValue.value)
    }
    const handleGetDataSucc = (res) => {
      if (res.status && res.data) {
        const data = res.data
        state.hotCities = data.data.hotCities
        state.cities = data.data.cities
      }
    }

    const getCityInfo = () => {
      //axios.get('api/city.json').then(handleGetDataSucc)
      axios.get('/static/mock/city').then(handleGetDataSucc)
    }
    onMounted(() => {
      getCityInfo()
    })
    //  const {
    //  ctx
    //} = getCurrentInstance();
    return {
      letterValue,
      handleLetterChange,
      getCityInfo,
      state
    }
  }
})
</script>
