<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list/>
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
  setup (props) {
    const {
      ctx
    } = getCurrentInstance();


    const letterValue = ref('A');
    const handleLetterChange = (letter) =>{
      letterValue.value = letter;
      console.log(letterValue.value)
    }
    const handleGetDataSucc = (res) => {
      res = res.data
      console.log(res);
    }

    const getCitylInfo = () => {
      axios.get('api/city.json').then(handleGetDataSucc)
    }
    onMounted(() => {
      getCitylInfo()
    })
    return {
      letterValue,
      handleLetterChange,
      getCitylInfo
    }
  }
})
</script>
