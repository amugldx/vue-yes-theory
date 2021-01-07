<template>
	<div class="flex flex-col z-auto">
		<div class="flex justify-between items-center p-5 md:px-10 md:pt-10">
			<img
				@click="logoHandler"
				class="h-12 md:h-14 lg:h-full cursor-pointer"
				src="../../assets/images/yes-theory-logo.png"
				alt="Logo"
			/>
			<div @click="toggleNav">
				<div v-if="navState">
					<img
						class="h-5 w-5 md:h-6 md:w-6 lg:w-full lg:h-full cursor-pointer"
						src="../../assets/images/cross-icon.svg"
						alt="Nav Closing Icon"
					/>
				</div>
				<div v-else>
					<img
						class="h-5 w-5 md:h-6 md:w-6 lg:w-full lg:h-full cursor-pointer"
						src="../../assets/images/nav-icon.svg"
						alt="Nav Icon"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="navState"
			class="md:self-end text-sm mx-8 md:w-1/2 lg:w-1/3 md:text-lg lg:text-xl bg-clrWhite text-clrBlack rounded-lg"
		>
			<AppSidebar />
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import AppSidebar from './AppSidebar.vue';
	export default {
		components: { AppSidebar },
		name: 'AppHeader',
		setup() {
			const navState = ref(false);
			const router = useRouter();

			const toggleNav = () => {
				navState.value = !navState.value;
			};
			const logoHandler = () => {
				router.push('/');
			};
			return {
				toggleNav,
				navState,
				logoHandler,
			};
		},
	};
</script>
