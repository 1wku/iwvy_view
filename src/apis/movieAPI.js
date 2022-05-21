import axiosRequest from './axiosClient'

export default {
  getTrending() {
    return axiosRequest('/trending/movie/week', 'GET')
  },
  getVideosById(id) {
    return axiosRequest(`/${id}/videos`, 'GET')
  },
}
