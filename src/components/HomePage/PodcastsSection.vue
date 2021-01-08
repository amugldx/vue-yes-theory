<template>
	<div>
		<div
			class="text-clrBlack bg-clrYellow flex flex-col justify-center items-center h-full"
		>
			<h1 class="mt-12 text-2xl md:text-3xl lg:text-5xl font-bold"
				>Latest Podcasts</h1
			>
			<img
				class="h-48 md:h-52 lg:h-64 mt-6"
				src="../../assets/images/home/podcasts-homepage-logo.svg"
				alt="Podcasts Image"
			/>
			<p
				class="text-center text-sm md:text-base lg:text-2xl font-bold mt-2 lg:mt-12"
				>The End of a Chapter</p
			>
			<p
				class="text-center text-xs md:text-base lg:text-2xl font-light mt-6 lg:mt-12"
				>Stream On</p
			>
			<div class="bg-clrBlack rounded-full mt-2 mb-12">
				<div class="flex justify-between items-center px-4 py-2">
					<span class="md:mx-3 mx-2 lg:mx-4"
						><img
							class="h-4 md:h-7 lg:h-full"
							src="../../assets/images/home/google-podcasts-logo.svg"
							alt="Google Podcasts"
					/></span>
					<span class="md:mx-3 mx-2 lg:mx-4"
						><img
							class="h-4 md:h-7 lg:h-full"
							src="../../assets/images/home/Spotify_black.svg"
							alt="Spotify"
					/></span>
					<span class="md:mx-3 mx-2 lg:mx-4"
						><img
							class="h-4 md:h-7 lg:h-full"
							src="../../assets/images/home/Apple_black.svg"
							alt="Apple Logo"
					/></span>
					<span class="md:mx-3 mx-2 lg:mx-4"
						><img
							class="h-4 md:h-7 lg:h-full"
							src="../../assets/images/home/stitch-logo.svg"
							alt="Stitch Logo"
					/></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PodcastsSection',
		setup() {
			return {};
		},
	};
</script>
