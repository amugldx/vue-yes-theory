<template>
	<div>
		<div
			class="flex flex-col justify-center items-center bg-clrYellow text-clrBlack"
		>
			<h3 class="text-clrBlack text-2xl md:text-3xl lg:text-4xl font-bold mt-10"
				>Send us your story</h3
			>
			<p
				class="mx-12 lg:mx-60 md:mx-44 text-center text-sm md:text-base lg:text-xl font-light mt-4 lg:mt-4"
				>Start here with Yes Theory and sign up for our newsletter. We'll send
				you tips, advice, and experience. No bullshit.</p
			>
			<div>
				<form
					@submit.prevent="addPerson"
					class="flex flex-col lg:flex-row justify-center items-center"
				>
					<div class="self-center">
						<input
							class="mt-6 h-8 lg:h-12 rounded-full lg:text-2xl w-52 md:w-60 lg:w-96 p-4 focus:bg-gray-200"
							type="text"
							v-model.trim="personEmail"
						/>
					</div>
					<AppButton
						class="lg:ml-6 mt-2 lg:mt-16 mb-10 md:mt-3"
						type="submit"
						color="text-clrWhite bg-clrBlack hover:bg-clrBlue hover:text-clrWhite"
						>Join Us Now</AppButton
					>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useStore } from 'vuex';
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		name: 'JoinStorySection',
		setup() {
			const store = useStore();
			const personEmail = ref('');

			const addPerson = () => {
				store.dispatch('addPeopleJoined', {
					email: personEmail.value,
				});
				personEmail.value = '';
				store.dispatch('loadPeopleJoined');
			};

			return { addPerson, personEmail };
		},
	};
</script>
