<template>
	<div>
		<div
			class="bg-clrBlack rounded-lg text-clrWhite flex flex-col justify-center items-center"
		>
			<p
				class="mt-4 mb-2 mr-4 text-xs font-light md:text-sm lg:text-base self-end"
				>{{ episodePod }}</p
			>
			<div
				class="flex flex-col justify-center items-center md:flex-row md:self-start px-20"
			>
				<img
					class="h-36 md:h-44 lg:h-52 lg:ml-16 mb-6 lg:mb-10 md:self-start"
					src="../../assets/images/podcasts/podcast-img.svg"
					alt="Podcasts Image"
				/>
				<div class="md:pl-20 lg:pl-32 w-48 md:w-80 lg:w-96">
					<h4
						class="md:text-left text-lg text-center font-bold md:text-xl lg:text-2xl"
						>{{ titlePod }}</h4
					>
					<p
						class="md:text-left mt-1 text-center text-sm md:text-base lg:text-lg"
						>{{ subtitlePod }}</p
					>
					<p
						class="mt-6 lg:mt-12 text-center text-xs font-light md:text-sm lg:text-base"
						>Stream Now</p
					>
					<div
						class="bg-clrWhite w-full flex flex-row justify-evenly items-center rounded-full mt-2 mb-8"
					>
						<img
							class="py-2 lg:pl-6 pl-4 md:h-10 h-8"
							src="../../assets/images/podcasts/google-podcasts-black.svg"
							alt="Google Podcasts"
						/>
						<img
							class="py-2 pl-2 lg:pl-4 md:h-10 h-8"
							src="../../assets/images/podcasts/spotify-black.svg"
							alt="Spotify"
						/>
						<img
							class="py-2 pl-2 lg:pl-4 md:h-10 h-8"
							src="../../assets/images/podcasts/apple-black.svg"
							alt="Apple"
						/>
						<img
							class="py-2 pl-2 lg:pr-6 lg:pl-4 pr-4 md:h-10 h-8"
							src="../../assets/images/podcasts/stitch-black.svg"
							alt="Stitch"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PodcastsSingle',
		props: ['titlePod', 'subtitlePod', 'episodePod'],
		setup() {
			return {};
		},
	};
</script>
