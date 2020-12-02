import { createStore } from 'vuex'
import coachesModule from './modules/coaches'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule
  }
})

export default store
