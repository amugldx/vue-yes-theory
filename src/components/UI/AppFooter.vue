<template>
	<div>
		<div
			class="bg-clrBlue text-clrWhite h-32 md:h-40 lg:h-48 flex flex-col justify-center items-center"
		>
			<div class="text-xs md:text-sm lg:text-base font-light">
				<router-link class="hover:text-clrYellow mx-2" to="/">Home</router-link>
				<router-link class="hover:text-clrYellow mx-2" to="/about"
					>About</router-link
				>
				<router-link class="hover:text-clrYellow mx-2" to="/podcasts"
					>Podcasts</router-link
				>
				<router-link class="hover:text-clrYellow mx-2" to="/contact"
					>Contact</router-link
				>
			</div>
			<div class="mt-3 md:mt-4 lg:mt-6">
				<LinksYesTheory />
			</div>
			<div>
				<p
					class="mt-3 md:mt-4 lg:mt-6 text-center text-xs md:text-sm lg:text-base font-light"
					>@copyright by <b>Yes Theory</b><br />
					Designed and Developed by <b>Ammar Mughal</b></p
				>
			</div>
		</div>
	</div>
</template>

<script>
	import LinksYesTheory from './LinksYesTheory.vue';
	export default {
		components: { LinksYesTheory },
		name: 'AppFooter',
		setup() {
			return {};
		},
	};
</script>
