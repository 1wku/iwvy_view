	<template>
  <div class="wrap">
    <img :src="svg" alt="" class="icon" />
    <p>{{ text }}</p>
  </div>
</template>
<script>

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    svg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
		const text = props.text
		return {text}
  },
};
</script>

