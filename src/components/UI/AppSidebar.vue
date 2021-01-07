<template>
	<div>
		<div class="flex justify-around items-center px-2 lg:px-3 py-2 lg:py-3">
			<router-link class="hover:text-clrBlue" to="/">Home</router-link>
			<router-link class="hover:text-clrBlue" to="/about">About</router-link>
			<router-link class="hover:text-clrBlue" to="/podcasts"
				>Podcasts</router-link
			>
			<router-link class="hover:text-clrBlue" to="/contact"
				>Contact</router-link
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppSideBar',
		setup() {
			return {};
		},
	};
</script>
