<template>
	<div>
		<div
			class="flex flex-col w-full h-screen bg-cover bg-top text text-clrWhite"
			:style="cssProps"
		>
			<div class="self-start fixed w-full">
				<AppHeader />
			</div>
			<div class="self-center m-auto mx-8">
				<div class="flex flex-col justify-center items-center">
					<h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">Yes Thoery</h1>
					<div
						class="text-center text-sm md:text-base lg:text-2xl font-light mt-6 lg:mt-12"
					>
						<h3
							>We believe life’s greatest moments and <br />
							deepest connections exist outside of <br />
							your comfort zone.</h3
						>
					</div>
					<AppButton
						class="mt-6 md:mt-8 lg:mt-12"
						to="https://www.seekdiscomfort.com/"
						color="bg-clrWhite text-clrBlack hover:bg-clrBlue hover:text-clrWhite"
						>Join Our Newsletter</AppButton
					>
				</div>
			</div>
			<div class="self-end mb-8">
				<LinksYesTheory />
			</div>
		</div>
		<SponsersYesTheory />
		<AboutSection />
		<div class="md:flex md:flex-row md:h-auto">
			<PodcastsSection class="md:w-1/2" />
			<LatestVideosSection class="md:w-1/2" />
		</div>
		<SeekDiscomfortSection />
		<AppFooter />
	</div>
</template>

<script>
	import LinksYesTheory from '../components/UI/LinksYesTheory.vue';
	import SponsersYesTheory from '../components/HomePage/SponsersYesTheory.vue';
	import AppButton from '../components/UI/AppButton.vue';
	import AppHeader from '../components/UI/AppHeader.vue';
	import AboutSection from '../components/HomePage/AboutSection.vue';
	import PodcastsSection from '../components/HomePage/PodcastsSection.vue';
	import LatestVideosSection from '../components/HomePage/LatestVideosSection.vue';
	import SeekDiscomfortSection from '../components/HomePage/SeekDiscomfortSection.vue';
	import AppFooter from '../components/UI/AppFooter.vue';
	export default {
		components: {
			AppHeader,
			AppButton,
			SponsersYesTheory,
			LinksYesTheory,
			AboutSection,
			PodcastsSection,
			LatestVideosSection,
			SeekDiscomfortSection,
			AppFooter,
		},
		name: 'HomePage',
		setup() {
			const cssProps = {
				backgroundImage: `url(${require('@/assets/images/m-home-page-header-bg.svg')})`,
			};

			return {
				cssProps,
			};
		},
	};
</script>
