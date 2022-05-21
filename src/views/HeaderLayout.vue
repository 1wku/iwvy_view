<template>
  <div
    class="header"
    :class="{
      'background-on': positionY >= 180,
      hide: positionY >= 624,
    }"
  >
    <router-link to="/">
      <h1 class="header__title">TineVyView</h1>
    </router-link>
    <nav class="header__nav glass">
      <router-link to="/" class="header__navItem">Movies</router-link>
      <router-link to="/" class="header__navItem">Shows</router-link>
      <router-link to="/" class="header__navItem">Soon</router-link>
      <router-link to="/" class="header__navItem">News</router-link>
    </nav>
    <div class="header__iconWrap">
      <div class="header__icon glass">
        <img src="../assets/svgs/searchIcon.svg" alt="" />
      </div>
      <div class="header__icon glass">
        <img src="../assets/svgs/humanIcon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positionY: 0,
    };
  },
  mounted() {
    document.addEventListener("scroll", () => {
      this.positionY = document.documentElement.scrollTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  padding: 0 5rem;
  position: fixed;
  width: 100vw;
  top: 0;
  color: #fffffe;
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(15, 14, 23, 0) 100%
  );
  z-index: 10;
  transition: all 0.3s ease-in;
  animation: slide-to-bottom 0.5s 1 forwards ease-out;
  &__title {
    font-size: 2.25rem;
    font-weight: bold;
    cursor: pointer;
  }
  &__nav {
    display: flex;
    align-items: center;
    padding: 0.75rem 0.8rem;
    border-radius: 50px;
    height: 3.125rem;
    &Item {
      padding: 0 1.25rem;
      & + & {
        border-left: 1px solid #fffffe;
      }
    }
  }
  &__icon {
    height: 3.125rem;
    width: 3.125rem;
    padding: 1rem;
    border-radius: 6.25rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &Wrap {
      display: flex;
      flex-direction: row;
    }
    & > * {
      height: fill;
      width: fill;
    }
  }
}

.background-on {
  background-color: rgb(15, 14, 23, 0.8);
  height: 4.5rem;
}

.hide {
  animation: slide-to-top 0.5s 1 forwards ease-out;
}
</style>
