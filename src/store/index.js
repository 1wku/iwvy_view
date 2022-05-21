import { createStore } from 'vuex'
import movieModule from './movieModule'
import tvModule from './tvModule'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movie: movieModule,
    tv: tvModule,
  },
})

export default store

store.dispatch('movie/getMovieTrending')
store.dispatch('tv/getTvTrending')
