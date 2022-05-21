import movieAPI from '@/apis/movieAPI'

export default {
  namespaced: true,
  state() {
    return {
      trending: [
        {
          vote_average: '6.6',
          title: 'The Pirates: The Last Royal Treasure',
          release_date: '2022-01-26',
          id: '591120',
          genre_ids: [28, 12, 35, 36],
          poster_path: '/50UQeTrUM7ErXzkvqCsV6EXcM3g.jpg',
        },
      ],
    }
  },
  getters: {
    getBanner({ trending }) {
      return trending[0]
    },
  },
  mutations: {
    setMovieTrending(state, payload) {
      state.trending = payload
    },
  },
  actions: {
    async getMovieTrending(state) {
      const data = await movieAPI.getTrending()
      return state.commit('setMovieTrending', data.data.results)
    },
  },
}
