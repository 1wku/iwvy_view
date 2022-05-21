<template>
  <carousel-wrap
    :cardsData="trendingArr"
    title="What's Popular"
    type="movie"
    f="trending"
  />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CarouselWrap from 'components/UI/CarouselWrap.vue'
//import CarouselItem from 'components/UI/CarouselItem.vue'
import VerticalCard from './UI/VerticalCard.vue'
export default {
  setup() {
    const store = useStore()

    const trendingArr = computed(() => store.state.movie.trending)
    return { VerticalCard, trendingArr }
  },
  components: { CarouselWrap },
}
</script>
