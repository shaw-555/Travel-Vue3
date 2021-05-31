<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list/>
    <city-alphabet/>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CitySearch from './components/Search.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CitySearch,
    CityAlphabet
  }
}
</script>
