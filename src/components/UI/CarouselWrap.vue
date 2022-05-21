<template>
  <div class="carousel">
    <h3 class="carousel__title">{{ title }}</h3>
    <div ref="inner" class="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        <vertical-card type="movie" f="trending" v-bind="card" />
      </div>
    </div>
    <span class="carousel__btn left" @click="prev">
      <img :src="leftIcon" alt="" />
    </span>
    <span class="carousel__btn right" @click="next">
      <img :src="rightIcon" alt="" />
    </span>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue'
import leftIcon from 'assets/svgs/arrowleft.svg'
import rightIcon from 'assets/svgs/arrowright.svg'
import VerticalCard from './VerticalCard.vue'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    cardsData: Object,
    type: String,
    f: String,
  },
  components: {
    VerticalCard,
  },
  setup(props) {
    const innerStyles = reactive({})
    const step = ref(264)
    const inner = ref(null)
    //change
    const cards = computed(() =>
      props.cardsData.map(item => ({
        ...item,
        vote_average: String(item.vote_average),
        id: String(item.id),
      }))
    )

    onMounted(() => {
      innerStyles.transform = `translateX(-${step.value * 2}px)`
      let card = cards.value.splice(cards.value.length - 3, 2)
      cards.value.unshift(...card)
    })

    const moveLeft = () => {
      innerStyles.transition = 'transform 0.3s ease-out'
      innerStyles.transform = `translateX(-${step.value}px)
																translateX(-${step.value * 2}px)`
    }

    const moveRight = () => {
      innerStyles.transition = 'transform 0.3s ease-out'
      innerStyles.transform = `translateX(${step.value}px)
																translateX(-${step.value * 2}px)`
    }

    const afterTransition = callback => {
      // TODO: Check the remove event logic
      // create a callback to execute and remove the listener to avoid the side effect
      const listener = () => {
        callback()
        inner.value.removeEventListener('transitionend', listener)
      }
      inner.value.addEventListener('transitionend', listener)
    }

    const resetTranslate = () => {
      innerStyles.transition = 'none'
      innerStyles.transform = `translateX(-${step.value * 2}px)`
    }

    const next = () => {
      moveLeft()
      afterTransition(() => {
        const card = cards.value.shift()
        cards.value.push(card)
        resetTranslate()
      })
    }

    const prev = () => {
      moveRight()
      afterTransition(() => {
        const card = cards.value.pop()
        cards.value.unshift(card)
        resetTranslate()
      })
    }

    return {
      cards,
      inner,
      next,
      prev,
      innerStyles,
      leftIcon,
      rightIcon,
    }
  },
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100vw;
  display: flex;
  overflow: hidden;
  padding: 0 4.688rem;
  position: relative;
  flex-direction: column;
  margin-bottom: 2.875rem;
  &__title {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fffffe;
  }
  &__btn {
    position: absolute;
    height: 21.25rem;
    width: 4.5rem;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    & > img {
      transition: transform 0.2s ease;
    }
    &:hover {
      backdrop-filter: brightness(0.8);
      & > img {
        transform: scale(1.1);
      }
    }
    &:active {
      backdrop-filter: brightness(1);
      & > img {
        transform: scale(0.9);
      }
    }
  }
  .left {
    left: 0;
    background: linear-gradient(90deg, #0f0e17 0%, rgba(15, 14, 23, 0) 100%);
  }
  .right {
    right: 0;
    background: linear-gradient(270deg, #0f0e17 0%, rgba(15, 14, 23, 0) 100%);
  }
}
.inner {
  white-space: nowrap;
  width: 100%;
  padding: 0;
  display: flex;
}

.card {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}
</style>
