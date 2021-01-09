<template>
	<div>
		<div>
			<div class="h-20 bg-clrGrey rounded-t-lg text-clrWhite">
				<h3 class="text-3xl text-center py-6">Add New Podcast</h3>
			</div>
			<form
				@submit.prevent="addNewPodcast"
				class="flex flex-col justify-center items-center"
			>
				<div class="flex w-full">
					<label
						class="w-3/12 flex-none font-bold text-2xl px-20 text-center mt-40"
						for="title"
						>Title</label
					>
					<input
						class="w-9/12 flex-grow mr-20 mt-40 h-10 rounded-full text-xl px-6 focus:bg-gray-100"
						type="text"
						id="title"
						name="title"
						v-model.trim="podTitle"
					/>
				</div>
				<div class="flex w-full">
					<label
						class="w-3/12 flex-none text-center font-bold text-2xl px-20 mt-10"
						for="subtitle"
						>Subtitle</label
					>
					<input
						class="w-9/12 flex-grow mr-20 mt-10 h-10 rounded-full text-xl px-6 focus:bg-gray-100"
						type="text"
						id="subtitle"
						name="subtitle"
						v-model.trim="podSubtitle"
					/>
				</div>
				<div class="flex w-full">
					<label
						class="w-3/12 flex-none text-center font-bold text-2xl px-20 mt-10"
						for="episode"
						>Episode</label
					>
					<input
						class="w-9/12 flex-grow mr-20 mt-10 h-10 rounded-full text-xl px-6 focus:bg-gray-100"
						type="text"
						id="episode"
						name="episode"
						v-model.trim="podEpisode"
					/>
				</div>
				<AppButton
					class="mt-10"
					type="submit"
					color="bg-clrBlack text-clrWhite hover:bg-clrYellow hover:text-clrBlack"
					>Add Podcast</AppButton
				>
			</form>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useStore } from 'vuex';
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		name: 'NewPodcast',
		setup() {
			const store = useStore();
			const podTitle = ref('');
			const podSubtitle = ref('');
			const podEpisode = ref('');

			const addNewPodcast = () => {
				store.dispatch('addPodcast', {
					titlePod: podTitle.value,
					subtitlePod: podSubtitle.value,
					episodePod: podEpisode.value,
				});
				podTitle.value = '';
				podSubtitle.value = '';
				podEpisode.value = '';
				store.dispatch('loadPodcasts');
			};

			return {
				podTitle,
				podSubtitle,
				podEpisode,
				addNewPodcast,
			};
		},
	};
</script>
