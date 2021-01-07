<template>
	<div>
		<div
			class="bg-clrBlack text-clrWhite py-8 md:py-14 px-6 flex flex-col md:flex-row lg:flex-row"
		>
			<div class="self-center">
				<img
					class="h-56 md:h-64 lg:h-full lg:mx-6 md:mx-2 mt-2 mx-8"
					src="../../assets/images/about-img.svg"
					alt="About Section Image"
				/>
			</div>
			<div
				class="flex flex-col justify-center items-center mt-6 md:w-3/5 md:mx-8 lg:mx-20"
			>
				<h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">About Us</h1>
				<p
					class="text-center text-sm md:text-base lg:text-2xl font-light mt-2 lg:mt-12"
					>Yes Theory began in the summer of 2015 when Ammar, Thomas, Derin and
					Matt were four strangers in our early 20s who bonded over the idea
					that life's greatest moments and deepest connections exist outside
					your comfort zone...</p
				>
				<AppButton
					class="my-8 "
					to="/about"
					color="bg-clrWhite text-clrBlack hover:bg-clrBlue hover:text-clrWhite"
					>Our Story</AppButton
				>
			</div>
		</div>
	</div>
</template>

<script>
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		name: 'AboutSection',
		setup() {
			return {};
		},
	};
</script>
