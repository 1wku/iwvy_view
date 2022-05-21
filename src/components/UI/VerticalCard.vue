<template>
  <router-link :to="`/detail/${id}?t=${type}&f=${f}`">
    <div class="card">
      <img class="card__img" :src="scopePoster_path" alt="" />
      <div class="card__front">
        <h5 class="card__title">{{ scopeTitle }}</h5>
        <div class="card__row">
          <p class="card__date">{{ scopeRelease_date }}</p>
          <icon-text :small="true" :text="scopeVote_average" :svg="imdbIcon" />
        </div>
        <div class="card__hashtags">
          <hash-tag
            v-for="tag in scopeGenres"
            :small="true"
            :key="tag"
            :text="tag"
          />
        </div>
      </div>
      <!--      <div class="card__onhover">
        <img class="card__img" :src="scopePoster_path" alt="" />
</div>-->
    </div>
  </router-link>
</template>

<script>
import useGenre from 'services/useGenre'
import imgAPI from 'apis/imgAPI'
import imdbIcon from 'assets/svgs/imdbIcon.svg'
import IconText from './IconText.vue'
import HashTag from './HashTag.vue'

export default {
  props: {
    title: String,
    genre_ids: Array,
    poster_path: String,
    release_date: String,
    vote_average: String,
    id: String,
    type: String,
    f: String,
  },
  setup(props) {
    return {
      scopePoster_path: imgAPI.original(props.poster_path),
      scopeTitle: props.title,
      scopeId: props.id,
      scopeGenres:
        props.genre_ids.length > 0 && props.genre_ids.map(id => useGenre(id)),
      scopeRelease_date: props.release_date,
      scopeVote_average: props.vote_average,
      imdbIcon,
    }
  },
  components: {
    IconText,
    HashTag,
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 14.375rem;
  height: 21.25rem;
  position: relative;
  border-radius: 0.375rem;
  transition: all 0.1s ease-out;
  filter: drop-shadow(-4px 0 4px rgba(0, 0, 0, 0.25));
  &:hover {
    transform: scale(1.05) translateY(-0.8rem);
  }
  &:hover .card__onhover {
    opacity: 1;
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    border-radius: 0.45rem;
  }
  &__front {
    position: absolute;
    top: 0;
    left: 0;
    width: fill;
    height: 100%;
    z-index: 3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 0.375rem;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #a7a9be;
    width: 100%;
    white-space: pre-wrap;
  }
  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    & > p {
      font-size: 0.875rem !important;
      font-weight: 200;
      color: #a7a9be;
    }
  }
  &__hashtags {
    display: flex;
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    & > * + * {
      margin-left: 0.5rem;
    }
  }
  &__onhover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    border-radius: 0.375rem;
    & > img {
      filter: blur(2px);
    }
  }
}
</style>
