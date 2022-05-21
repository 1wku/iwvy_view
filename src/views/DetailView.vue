<template>
  <div class="detail">
    <img
      :src="imgAPI.original(data?.backdrop_path)"
      alt=""
      class="detail__backdrop"
    />
    <div class="detail__overlay-bottom">
      <div class="detail__banner-left">
        <h5 class="detail__banner-title">
          {{ data?.title }}
        </h5>
        <p class="detail__banner-des">
          {{ data?.overview }}
        </p>
        <div class="detail__banner-info">
          <text-icon
            v-for="info in infoArray"
            :key="info.text"
            :text="info.text"
            :svg="info.svg"
          />
        </div>
        <div class="detail__banner-tags">
          <hash-tag v-for="tag in tagArray" :key="tag" :text="tag" />
        </div>
      </div>
      <div class="detail__banner-right">
        <button-basic class="detail__banner-btn" text="Watch now" />
      </div>
    </div>
    <!--<button class="detail__playTrailer" @click="controlYtb">
      <img :src="playIcon" alt="" class="detail__playIcon" />
		</button>-->
    <div :class="{ 'o-1': isPlay }" class="detail__trailer">
      <iframe
        class="detail__trailer-iframe"
        ref="ytbRef"
        width="100%"
        height="100%"
        :src="`https://www.youtube-nocookie.com/embed/${ytbKey}?autoplay=1&controls=0`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, watchEffect, ref } from 'vue'
import axios from 'axios'

import imgAPI from '../apis/imgAPI'
import HashTag from '../components/UI/HashTag.vue'
import useGenre from '../services/useGenre.js'
import ButtonBasic from '../components/UI/ButtonBasic.vue'
import TextIcon from '../components/UI/IconText.vue'
import imdbIcon from 'assets/svgs/imdbIcon.svg'
import canIcon from 'assets/svgs/canIcon.svg'
import playIcon from 'assets/svgs/playIcon.svg'

export default {
  setup() {
    const { params, query } = useRoute()
    const store = useStore()
    const data = computed(() =>
      store.state[query.t][query.f].find(item => String(item.id) === params.id)
    )
    const infoArray = computed(() => [
      {
        text: `IMDB ${data.value?.vote_average}`,
        svg: imdbIcon,
      },
      {
        text: data.value?.release_date || '2022-01-01',
        svg: canIcon,
      },
    ])
    const ytbRef = ref(null)

    const ytbKey = ref('')
    const isPlay = ref(false)
    const controlYtb = () => {
      isPlay.value = !isPlay.value
      ytbRef.value && ytbRef.value.play()
    }

    watchEffect(() => {
      const fetchYtKey = async () => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${query.t}/${params.id}/videos?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
        )
        const data = await res?.data.results
        ytbKey.value = data.find(item => item.type === 'Trailer').key
      }
      fetchYtKey()
    })

    return {
      data,
      imgAPI,
      infoArray,
      playIcon,
      ytbKey,
      isPlay,
      controlYtb,
      ytbRef,
      tagArray: computed(
        () => data.value && data.value.genre_ids.map(id => useGenre(id))
      ),
    }
  },
  components: {
    HashTag,
    ButtonBasic,
    TextIcon,
  },
}
</script>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &__backdrop {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  &__overlay-bottom {
    position: absolute;
    width: 100%;
    height: 25.25rem;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(15, 14, 23, 0) 0%, #0f0e17 100%);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    color: #fffffe;
    padding: 0 4.6875rem;
    padding-bottom: 2.5rem;
    z-index: 4;
  }
  &__banner {
    width: 100vw;
    position: relative;
    margin-bottom: 2.55rem;
    &-title {
      font-weight: 700;
      font-size: 4rem;
      margin-bottom: 1.5rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      animation: fade-in 0.5s 0.5s 1 forwards ease-out;
      opacity: 0;
    }
    &-des {
      font-weight: 300;
      font-size: 0.875rem;
      max-width: 46.6875rem;
      line-height: 200%;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 1rem;
      opacity: 0;
      animation: fade-in 0.5s 1s 1 forwards ease-out;
    }
    &-info {
      display: flex;
      margin-bottom: 1.2rem;
      flex-direction: row;
      opacity: 0;
      animation: fade-in 0.5s 1s 1 forwards ease-out;
      & > div + div {
        margin-left: 1.25rem;
      }
    }
    &-tags {
      opacity: 0;
      animation: fade-in 0.5s 1s 1 forwards ease-out;
      & > * + * {
        margin-left: 1rem;
      }
    }
    &-btn {
      opacity: 0;
      animation: fade-in 0.5s 1s 1 forwards ease-out;
    }
  }
  &__playTrailer {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    opacity: 0;
    animation: fade-in 0.5s 1.5s 1 forwards ease-out;
    height: 5rem;
    width: 5rem;
    padding: 1rem;
    border-radius: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in;
    background-color: #0f0e174b;
    border: 2px solid #fffffe;
    &:hover {
      background-color: #0f0e17c9;
    }
    &:active {
      background-color: #0f0e17d9;
    }

    & > img {
      margin-left: 0.4rem;
    }
  }
  &__trailer {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    animation: fade-in 0.5s 3s 1 forwards ease-out;
    &-iframe {
      object-fit: cover;
      transform: scale(1.1);
    }
  }
}
</style>
