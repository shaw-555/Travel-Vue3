import { createStore } from 'vuex'
import state from './state' 
import mutations from './mutations' 

export default createStore({
  state: state,
  acttions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: mutations
})
