<template>
	<div>
		<h3
			class="mb-12 mt-4 lg:mt-20 lg:mb-20 text-3xl text-center md:text-4xl mx-10 lg:text-6xl font-bold"
			>Our Recent Podcasts</h3
		>
		<div v-for="podcast in podcastsList" :key="podcast.episodePod">
			<div class="mx-10 mt-4 lg:mt-8 md:mx-20 lg:mx-96">
				<PodcastsSingle
					:episodePod="podcast.episodePod"
					:titlePod="podcast.titlePod"
					:subtitlePod="podcast.subtitlePod"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import PodcastsSingle from './PodcastsSingle.vue';
	export default {
		components: { PodcastsSingle },
		name: 'PodcastsList',
		setup() {
			const store = useStore();
			let podcastsList = computed(() => {
				store.dispatch('loadPodcasts');
				return store.getters.getPodcasts;
			});

			return { podcastsList };
		},
	};
</script>
