<template>
  <carousel-wrap
    :cardsData="trendingArr"
    title="Tv shows of week"
    :childElement="VerticalCard"
  />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import CarouselWrap from 'components/UI/CarouselWrap.vue'
import VerticalCard from './UI/VerticalCard.vue'

export default {
  setup() {
    const store = useStore()

    const trendingArr = computed(() => store.state.tv.trending)
    return { VerticalCard, trendingArr }
  },
  components: { CarouselWrap },
}
</script>
