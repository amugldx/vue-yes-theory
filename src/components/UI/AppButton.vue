<template>
	<div>
		<div v-if="to">
			<router-link
				class="px-5 py-2 text-sm md:text-base lg:text-2xl transition-all rounded-full focus:outline-none active:outline-none hover:outline-none"
				:to="to"
				:class="color"
				><slot
					class="focus:outline-none active:outline-none hover:outline-none outline-none"
			/></router-link>
		</div>
		<div v-else>
			<button
				@click="$emit('btn-clicked')"
				class="px-4 py-2 text-sm md:text-base lg:text-2xl transition-all rounded-full focus:outline-none active:outline-none hover:outline-none"
				:class="color"
				:type="type ? type : 'button'"
				><slot
					class="focus:outline-none active:outline-none hover:outline-none outline-none"
			/></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppButton',
		props: ['color', 'to', 'type'],
		setup() {
			return {};
		},
	};
</script>
