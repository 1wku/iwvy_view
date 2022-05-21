<template>
  <div class="wrap glass" :class="{ small }">
    <h5>{{ text }}</h5>
  </div>
</template>

<script>
export default {
  name: 'HashTag',
  props: {
    text: {
      type: String,
      default: 'tag name',
    },
    type: {
      type: String,
      default: 'm',
    },
    small: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  border-radius: 0.375rem;
  h5 {
    font-size: 1.125rem;
    font-weight: 500;
  }
}
.small {
  padding: 0.5rem 0.75rem;
  color: #a7a9be;
  & > h5 {
    font-size: 0.75rem;
  }
}
</style>
