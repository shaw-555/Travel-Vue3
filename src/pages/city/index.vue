<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list :hot="hotCities"/>
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
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CitySearch,
    CityAlphabet
  },
  setup (props,{ctx}) {
  
    
    let hotCities= reactive([1,2,3])

    const letterValue = ref('A');
    const handleLetterChange = (letter) =>{
      letterValue.value = letter;
      console.log(letterValue.value)
    }
    const handleGetDataSucc = (res) => {
      res = res.data
      console.log(res);
      if (res.ret && res.data) {
        const data = res.data
        
        hotCities = data.hotCities
        console.log('hotCities1',hotCities);
        console.log('hotCities2',ctx.hotCities);
      }
      return hotCities
    }

    const getCityInfo = () => {
      axios.get('api/city.json').then(handleGetDataSucc)
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
      hotCities
    }
  }
})
</script>
