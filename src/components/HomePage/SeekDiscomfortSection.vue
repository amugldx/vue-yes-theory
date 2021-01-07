<template>
	<div>
		<div
			class="bg-clrBlack text-clrWhite h-40 md:h-48 lg:h-72 flex flex-col justify-center items-center"
		>
			<h3 class="text-xl md:text-2xl lg:text-4xl font-bold">Seek Discomfort</h3>
			<p
				class="text-center text-clrYellow text-xs md:text-sm lg:text-base lg:mt-1"
				>Lifestyle apparel for the Seekers</p
			>
			<AppButton
				class="mt-6 md:mt-8 lg:mt-12"
				to="https://www.seekdiscomfort.com/"
				color="bg-clrWhite text-clrBlack hover:bg-clrBlue hover:text-clrWhite"
				>Rep the Movement</AppButton
			>
		</div>
	</div>
</template>

<script>
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		name: 'SeekDiscomfortSection',
		setup() {
			return {};
		},
	};
</script>
