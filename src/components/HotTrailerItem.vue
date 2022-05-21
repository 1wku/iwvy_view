<template>
  <div
    class="hotTrailer__item"
    @mouseover="changePreview(1)"
    @mouseleave="changePreview(0)"
    @click="redirectYtb(trailer.key)"
  >
    <img
      :src="`https://i.ytimg.com/vi/${trailer.key}/maxresdefault.jpg`"
      alt=""
      class="hotTrailer__item-img"
    />
    <div class="hotTrailer__item-video">
      <iframe
        width="100%"
        height="100%"
        :src="`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=${isPreview}&mute=1&controls=0`"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    trailer: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isPreview = ref(0)
    const changePreview = val => {
      isPreview.value = val
    }

    const redirectYtb = id => {
      window.open(`https://www.youtube.com/watch?v=${id}`)
    }

    return { isPreview, changePreview, redirectYtb }
  },
}
</script>

<style lang="scss" scoped>
.hotTrailer__item {
  width: 17.5rem;
  height: 10rem;
  position: relative;
  transition: all 0.3s ease-out;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
  &:hover &-img {
    opacity: 0;
  }
  &-img {
    position: absolute;
    border-radius: 0.375rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
    z-index: 4;
  }
  &-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 0.375rem;
    & > iframe {
      border-radius: 0.375rem;
    }
  }
}
</style>
