<template>
	<header-layout />
	<router-view />
</template>

<script>
import HeaderLayout from "./views/HeaderLayout.vue";
export default {
	components: {
		HeaderLayout,
	},
};
</script>

<style lang="scss">
</style>
