<template>
	<div class="bg-clrBlack text-clrWhite w-screen h-screen">
		<div class="w-full bg-clrGrey flex justify-center items-center">
			<button
				@click="currentTabValue = 'podcast'"
				ref="podRef"
				class="w-full bg-clrWhite text-clrBlack font-bold h-20 text-xl text-center flex flex-col justify-center items-center cursor-pointer hover:bg-clrYellow focus:bg-clrYellow focus:outline-none"
				>Add New Podcast</button
			>
			<button
				@click="currentTabValue = 'joined'"
				ref="joinRef"
				class="w-full bg-clrWhite ml-px text-clrBlack h-20 text-xl font-bold text-center flex flex-col justify-center items-center cursor-pointer hover:bg-clrYellow focus:bg-clrYellow focus:outline-none"
				>People Joined</button
			>
			<button
				@click="currentTabValue = 'contacted'"
				ref="contactRef"
				class="w-full bg-clrWhite ml-px text-clrBlack h-20 text-xl font-bold text-center flex flex-col justify-center items-center cursor-pointer hover:bg-clrYellow focus:bg-clrYellow focus:outline-none"
				>People Who Contacted</button
			>
		</div>
		<div class="bg-clrWhite text-clrBlack w-4/5 h-4/5 my-16 mx-auto rounded-lg">
			<div v-if="currentTabValue === 'podcast'">
				<NewPodcast />
			</div>
			<div v-else-if="currentTabValue === 'joined'">
				<PeopleJoined />
			</div>
			<div v-else>
				<PeopleContacted />
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import NewPodcast from '../components/AdminPage/NewPodcast.vue';
	import PeopleJoined from '../components/AdminPage/PeopleJoined.vue';
	import PeopleContacted from '../components/AboutPage/PeopleContacted.vue';
	export default {
		components: { NewPodcast, PeopleJoined, PeopleContacted },
		name: 'AdminPage',
		setup() {
			const currentTabValue = ref('');

			return { currentTabValue };
		},
	};
</script>
