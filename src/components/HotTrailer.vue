<template>
	<div class="hotTrailer">
		<h3 class="hotTrailer__title sessionTitle">Hot Trailers</h3>
		<div class="hotTrailer__body">
			<hot-trailer-item
				v-for="trailer in trailerArray"
				:key="trailer"
				:trailer="trailer"
			/>
		</div>
	</div>
</template>

<script>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

import HotTrailerItem from './HotTrailerItem.vue'

export default {
	components: {
		HotTrailerItem,
	},
	setup() {
		const store = useStore()
		const trailerArray = ref([])

		const trending = computed(() => {
			return store.state.movie.trending
				.map(item => item.id)
				.splice(0, 4)
		})

		watch(trending, () => {
			if (trending.value.length > 0) {
				const promises = trending.value.map(item =>
					axios.get(
						`https://api.themoviedb.org/3/movie/${item}/videos?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`,
					),
				)

				;(async promises => {
					const data = await Promise.all(promises)
					trailerArray.value = data.map(item =>
						item?.data.results.find(
							item => item.type === 'Trailer',
						),
					)
				})(promises)
			}
		})

		return {
			trailerArray,
		}
	},
}
</script>

<style lang="scss" scoped>
.hotTrailer {
	margin-bottom: 2rem;
	padding: 0 4.6875rem;
	&__title {
		margin-bottom: 1rem;
	}
	&__body {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
