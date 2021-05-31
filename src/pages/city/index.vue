<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list/>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CitySearch from './components/Search.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CitySearch
  }
}
</script>
