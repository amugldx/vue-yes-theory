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
					<h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">Our Story</h1>
					<div class="flex flex-row justify-evenly items-center mt-8">
						<div class="flex flex-col justify-center items-center pr-4">
							<img
								class="h-20 md:h-28 lg:h-40"
								src="../assets/images/about/matt-img.svg"
								alt="Matt"
							/>
							<p class="text-xs md:text-sm lg:text-lg font-light mt-4 lg:mt-6"
								>Matt</p
							>
						</div>
						<div class="flex flex-col justify-center items-center pr-4">
							<img
								class="h-20 md:h-28 lg:h-40"
								src="../assets/images/about/ammar-img.svg"
								alt="Ammar"
							/>
							<p class="text-xs md:text-sm lg:text-lg font-light mt-4 lg:mt-6"
								>Ammar</p
							>
						</div>
						<div class="flex flex-col justify-center items-center pr-4">
							<img
								class="h-20 md:h-28 lg:h-40"
								src="../assets/images/about/thomas-img.svg"
								alt="Thomas"
							/>
							<p class="text-xs md:text-sm lg:text-lg font-light mt-4 lg:mt-6"
								>Thomas</p
							>
						</div>
					</div>
					<div
						class="text-center text-sm md:text-base lg:text-2xl font-light mt-8 lg:mt-16"
					>
						<h3
							>We met in 2015 in Montreal, Canada through a series of
							serendipitous encounters.</h3
						>
					</div>
				</div>
			</div>
		</div>
		<StorySection />
		<TestimonialSection />
		<JoinStorySection />
		<AppFooter />
	</div>
</template>

<script>
	import JoinStorySection from '../components/AboutPage/JoinStorySection.vue';
	import StorySection from '../components/AboutPage/StorySection.vue';
	import TestimonialSection from '../components/AboutPage/TestimonialSection.vue';
	import AppFooter from '../components/UI/AppFooter.vue';
	import AppHeader from '../components/UI/AppHeader.vue';
	export default {
		components: {
			AppHeader,
			StorySection,
			TestimonialSection,
			JoinStorySection,
			AppFooter,
		},
		name: 'AboutPage',
		setup() {
			const cssProps = {
				backgroundImage: `url(${require('@/assets/images/about/about-header.svg')})`,
			};

			return {
				cssProps,
			};
		},
	};
</script>
