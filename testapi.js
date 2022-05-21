const testApi = () => {
  fetch('https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'movie-details1.p.rapidapi.com',
      'x-rapidapi-key': 'a0430f848cmsh4ce3e971a6c19cep13c8e5jsnc6f6a275c1cc',
    },
  })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
}

testApi()
