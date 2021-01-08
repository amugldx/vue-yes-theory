<template>
	<div>
		<h3
			class="mb-12 mt-4 lg:mt-20 lg:mb-20 text-3xl text-center md:text-4xl mx-10 lg:text-6xl font-bold"
			>Our Recent Podcasts</h3
		>
		<div class="mx-10 mt-4 lg:mt-8 md:mx-20 lg:mx-52">
			<PodcastsSingle
				episodePod="S01E10"
				titlePod="The End of a Chapter"
				subtitlePod="Yes Theory"
			/>
		</div>
		<div class="mx-10 mt-4 lg:mt-8 md:mx-20 lg:mx-52">
			<PodcastsSingle
				episodePod="S01E09"
				titlePod="How to Make a Change"
				subtitlePod="Rich Roll"
			/>
		</div>
		<div class="mx-10 mt-4 lg:mt-8 md:mx-20 lg:mx-52">
			<PodcastsSingle
				episodePod="S01E08"
				titlePod="What Makes Our Friendship Work"
				subtitlePod="Matt, Thomas, and Ammar"
			/>
		</div>
	</div>
</template>

<script>
	import PodcastsSingle from './PodcastsSingle.vue';
	export default {
		components: { PodcastsSingle },
		name: 'PodcastsList',
		setup() {
			return {};
		},
	};
</script>
