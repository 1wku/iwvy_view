<template>
  <div class="home__banner">
    <img :src="bannerUrl" alt="" />
    <span class="home__banner-overlay1"></span>
    <span class="home__banner-overlay2">
      <div class="home__banner-left">
        <h5 class="home__banner-title">{{ data?.title }}</h5>
        <p class="home__banner-des">
          {{ data.overview }}
        </p>
        <div class="home__banner-info">
          <text-icon
            v-for="info in infoArray"
            :key="info.text"
            :text="info.text"
            :svg="info.svg"
          />
        </div>
        <div class="home__banner-tags">
          <hash-tag v-for="tag in tagArray" :key="tag" :text="tag" />
        </div>
      </div>
      <div class="home__banner-right">
        <button-basic class="home__banner-btn" text="Watch now" />
      </div>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import useGenre from 'services/useGenre'
import imgAPI from 'apis/imgAPI'

import TextIcon from './UI/IconText.vue'
import HashTag from './UI/HashTag.vue'
import imdbIcon from 'assets/svgs/imdbIcon.svg'
import clockIcon from 'assets/svgs/clockIcon.svg'
import canIcon from 'assets/svgs/canIcon.svg'
import ButtonBasic from './UI/ButtonBasic.vue'

export default {
  name: 'HomeBanner',
  components: {
    TextIcon,
    HashTag,
    ButtonBasic,
  },
  setup() {
    const store = useStore()
    const data = computed(() => store.getters['movie/getBanner'])

    const bannerUrl = computed(() => imgAPI.original(data.value.backdrop_path))

    const infoArray = computed(() => [
      {
        text: `IMDB ${data.value.vote_average}`,
        svg: imdbIcon,
      },
      {
        text: '2h25m',
        svg: clockIcon,
      },
      {
        text: data.value?.release_date || '2022-01-01',
        svg: canIcon,
      },
    ])

    const tagArray = computed(
      () =>
        data.value.genre_ids.map(id => useGenre(id)) || [
          'Action',
          'Hero',
          'Marvel',
        ]
    )

    return { infoArray, bannerUrl, tagArray, data }
  },
}
</script>

<style lang="scss">
.home {
  &__banner {
    width: 100vw;
    position: relative;
    margin-bottom: 2.55rem;
    & > img {
      width: 100%;
      object-fit: cover;
      height: calc(100vw * 9 / 21);
      opacity: 0;
      animation: fade-in 0.5s 1 forwards ease-in;
    }
    //	&-overlay1 {
    //		position: absolute;
    //		width: 100%;
    //		height: 10.625rem;
    //		top: 0;
    //		left: 0;
    //		background: linear-gradient(180deg, #000000 0%, rgba(15, 14, 23, 0) 100%);
    //	}
    &-overlay2 {
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
      padding-bottom: 2rem;
      color: #fffffe;
      padding: 0 4.6875rem;
    }
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
    &-readmore {
      font-weight: bold;
    }
  }
}
</style>
