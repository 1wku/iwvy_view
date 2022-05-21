<template>
  <home-banner />
  <div class="home">
    <hot-trailer />
    <popular-movie />
    <banner-update />
    <tv-of-week />
  </div>
</template>

<script>
import HomeBanner from 'components/HomeBanner.vue'
import HotTrailer from 'components/HotTrailer.vue'
import PopularMovie from 'components/PopularMovie.vue'
import BannerUpdate from 'components/BannerUpdate.vue'
import TvOfWeek from 'components/TvOfWeek.vue'

export default {
  name: 'HomeView',
  components: { HomeBanner, HotTrailer, PopularMovie, BannerUpdate, TvOfWeek },
}
</script>

<style lang="scss" scoped>
.home {
  opacity: 0;
  animation: fade-in 0.5s 1.5s 1 forwards ease-out;
}
</style>
