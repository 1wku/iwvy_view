export default {
  original(id) {
    return `https://image.tmdb.org/t/p/original${id}`
  },
  svg(id) {
    const url = `https://image.tmdb.org/t/p/original${id}`
    return url
      .split('.')
      .reduce((prev, curr, index, arr) => {
        return index === arr.length - 1 ? [...prev, 'svg'] : [...prev, curr]
      }, [])
      .join('.')
  },
  w500(id) {
    return `https://image.tmdb.org/t/p/w500${id}`
  },
}
