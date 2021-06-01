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
import { ref, reactive, computed, watchEffect, onUpdated, defineComponent } from 'vue'
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CitySearch from './components/Search.vue'
import CityAlphabet from './components/Alphabet.vue'
export default defineComponent({
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CitySearch,
    CityAlphabet
  },
  setup (props) {
    const letterValue = ref('A');
    const handleLetterChange = (letter) =>{
      letterValue.value = letter;
      console.log(letterValue.value)
    }
    
    return {
      letterValue,
      handleLetterChange
    }
  }
})
</script>
