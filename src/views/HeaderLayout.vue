<template>
  <div class="header">
    <h1 class="header__title">TineVyView</h1>
    <nav class="header__nav glass">
      <router-link to="/" class="header__navItem">Movies</router-link>
      <router-link to="/" class="header__navItem">Shows</router-link>
      <router-link to="/" class="header__navItem">Soon</router-link>
      <router-link to="/" class="header__navItem">News</router-link>
    </nav>
    <div class="header__icon glass"></div>
    <div class="header__icon glass"></div>
  </div>
</template>

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
  z-index: 10;
  &__title {
    font-size: 2.25rem;
    font-weight: bold;
  }
  &__nav {
    display: flex;
    align-items: center;
    padding: 0.75rem 0.8rem;
    border-radius: 50px;
    &Item {
      padding: 0 1.25rem;
      & + & {
        border-left: 1px solid #fffffe;
      }
    }
  }
}
</style>
