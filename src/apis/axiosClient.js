import axios from 'axios'
import queryString from 'query-string'

export default async function request(url, method, body, querys) {
  const baseURL = 'https://api.themoviedb.org/3'
  const headers = {}
  const queryFormarted = queryString.stringify({
    ...querys,
    api_key: process.env.VUE_APP_API_KEY,
  })
  let objMeta = {
    method,
    url: `${baseURL}${url}?${queryFormarted}`,
    headers,
    data: body,
  }

  return await axios(objMeta)
}
