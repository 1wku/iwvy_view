<template>
  <div class="wrap" :class="{ small }">
    <img :src="svg" alt="" class="icon" />
    <p class="text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    svg: {
      required: true,
    },
    small: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  .icon {
    height: 1.25rem;
  }
  .text {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: 200;
    color: #a7a9be;
  }
}
.small {
  & > img {
    height: 1rem !important;
  }
  & > p {
		font-weight: 400;
    font-size: 0.875rem !important;
  }
}
</style>
