<template>
  <div class="Update">
    <div class="Update__inner">
      <img :src="UpdateBanner" alt="" class="Update__img" />
      <div class="Update__content">
        <h2 class="Update__title">
          Explore more and more<br />
          excluesive movies with Iwvy Premium
        </h2>
        <div class="Update__row">
          <button-basic class="Update__btn" text="Get Update" />
          <p class="Update__deal">Only 4$/mounth in the first year</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateBanner from 'assets/images/updateBanner.png'
import ButtonBasic from './UI/ButtonBasic.vue'
export default {
  components: {
    ButtonBasic,
  },
  setup() {
    return {
      UpdateBanner,
    }
  },
}
</script>

<style lang="scss" scoped>
.Update {
  height: 24.688rem;
  width: 100vw;
  padding: 0 4.6875rem;
  margin-bottom: 2rem;
  &__inner {
    height: fill;
    width: fill;
    margin: 0 auto;
    background: linear-gradient(
      44deg,
      rgba(36, 6, 40, 0.23),
      rgba(229, 49, 112, 0.12) 99.39%
    );
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: relative;
    transition: all 0.2s ease-in;
    &:hover {
      box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.5);
    }
  }
  &__img {
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 5px;
  }
  &__content {
    position: absolute;
    width: 55%;
    left: 2.25rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-weight: 700;
    font-size: 2.25rem;
    color: #fffffe;
    margin-bottom: 1rem;
  }
  &__row {
    display: flex;
    align-items: center;
  }
  &__btn {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }
  &__deal {
    font-weight: 400;
    font-size: 1.125rem;
    margin-left: 2rem;
    color: #fffffe;
  }
}
</style>
