<template>
  <div class="home__banner">
    <img
      src="https://ss-images.saostar.vn/wwebp700/pc/1622559104511/saostar-op5e4ap42rpu3pcj.jpg"
      alt=""
    />
    <span class="home__banner-overlay1"></span>
    <span class="home__banner-overlay2">
      <div class="home__banner-left">
        <h5 class="home__banner-title">Spider-man No Way Home</h5>
        <p class="home__banner-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dolor a
          urna bibendum fermentum. Curabitur nec consectetur est, vel cursus
          elit. Nam neque ipsum, tempus sed eleifend nec, sagittis quis massa.
          Vivamus ut dolor eros. Nulla molestie metus mi, commodo elementum leo
          vestibulum sit amet. ... <span class="home__banner-readmore">Read more</span>
        </p>
        <div class="home__info">
          
        </div>
      </div>
      <div class="home__banner-right">
        <button class="home__banner-btn">Watch now</button>
      </div>
    </span>
  </div>
</template>

<style lang="scss">
.home {
  &__banner {
    width: 100vw;
    position: relative;
    & > img {
      width: 100%;
      object-fit: cover;
      height: calc(100vw * 9 / 21);
    }
    &-overlay1 {
      position: absolute;
      width: 100%;
      height: 10.625rem;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, #000000 0%, rgba(15, 14, 23, 0) 100%);
    }
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
    &-left {
    }
    &-title {
      font-weight: 600;
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }
    &-des {
      font-weight: 400;
      font-size: 0.875rem;
      max-width: 46.6875rem;
			line-height: 186%;
    }
    &-readmore {
      font-weight: bold;

    }
    &-btn {
      font-size: 2rem;
      font-weight: bold;
      padding: 1rem 4rem;
      border-radius: 0.375rem;
      color: #fffffe;
      background: linear-gradient(
        94.04deg,
        rgba(255, 137, 6, 0.8) -14.01%,
        rgba(242, 95, 76, 0.5) 125.69%
      );
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>