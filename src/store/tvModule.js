import tvAPI from '../apis/tvAPI'

export default {
  namespaced: true,
  state() {
    return {
      trending: [
        {
          backdrop_path: '/fUjATGfykF0EU57DhMDkIXqQlc5.jpg',
          first_air_date: '2022-03-17',
          genre_ids: [18, 10765],
          id: 113566,
          name: 'DMZ',
          origin_country: ['US'],
          original_language: 'en',
          original_name: 'DMZ',
          overview:
            'In the near future after a bitter civil war leaves Manhattan a demilitarized zone (DMZ), destroyed and isolated from the rest of the world, fierce medic Alma Ortega sets out on a harrowing journey to find the son she lost in the evacuation of New York City at the onset of the conflict. Standing in her way are gangs, militias, demagogues and warlords, including Parco Delgado, the popular — and deadly — leader of one of the most powerful gangs in the DMZ.',
          poster_path: '/wnug9DhsenurS5dWCypjZSRFnH6.jpg',
          vote_average: 10.0,
          vote_count: 3,
          popularity: 66.357,
          media_type: 'tv',
        },
      ],
    }
  },
  mutations: {
    setTvTrending(state, payload) {
      state.trending = payload
    },
  },
  actions: {
    async getTvTrending(state) {
      const data = await tvAPI.getTrending()
      return state.commit(
        'setTvTrending',
        data.data.results.map(tv =>
          Object.assign({}, tv, {
            title: tv.name,
            release_date: tv.first_air_date,
          })
        )
      )
    },
  },
}
