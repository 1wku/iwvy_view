<template>
  <button @click="handleClick" class="btn">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Click me',
    },
    handleClick: {
      type: Function,
      default: () => {
        console.log('handleClick')
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
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
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.01);
    backdrop-filter: brightness(1.3);
  }
  &:active {
    transform: scale(1);
  }
}
</style>
