<template>
	<div>
		<div
			class="text-clrYellow bg-clrGrey flex flex-col justify-center items-center h-full"
		>
			<h1 class="mt-12 text-2xl md:text-3xl lg:text-5xl font-bold"
				>Lastest Video</h1
			>
			<iframe
				class="mt-6 md:h-52 lg:h-64"
				width="w-48 md:w-52 lg:w-64"
				height="h-48 md:h-52 lg:h-64"
				src="https://www.youtube.com/embed/qZVBFAtfp2A"
			>
			</iframe>
			<p
				class="text-center mx-20 text-sm md:text-base lg:text-2xl font-bold mt-2 lg:mt-12"
				>Reuniting a Family After a Year Of Separation</p
			>
			<div class="bg-clrYellow text-clrBlack rounded-full mt-12 lg:mt-20 mb-12">
				<div class="flex justify-between items-center px-4 py-2">
					<p class="text-sm md:text-base lg:text-2xl px-4">Watch Now</p>
					<span class="md:mx-3 mx-2 lg:mx-4"
						><img
							class="h-4 md:h-7 lg:h-full"
							src="../../assets/images/arrow-right.svg"
							alt="Arrow Right"
					/></span>
					<span class="md:mx-3 mx-2 lg:mx-4"
						><img
							class="h-4 md:h-7 lg:h-full"
							src="../../assets/images/youtube-logo-black.svg"
							alt="Youtube"
					/></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LatestVideosSection',
		setup() {
			return {};
		},
	};
</script>
