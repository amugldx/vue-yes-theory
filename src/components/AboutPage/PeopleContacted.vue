<template>
	<div>
		<div class="h-20 bg-clrGrey rounded-t-lg text-clrWhite">
			<h3 class="text-3xl text-center py-6">People Who Contacted</h3>
		</div>
		<div v-for="people in peopleData" :key="people.id">
			<div
				class="pb-3 bg-clrGrey text-clrWhite w-4/5 mt-10 mx-auto rounded-lg shadow-lg"
			>
				<div class="flex justify-between">
					<p class="mt-3 text-clrYellow font-bold text-xl ml-16">{{
						people.name
					}}</p>
					<p class="mr-16 mt-3">{{ people.email }}</p>
				</div>
				<p class="ml-16 font-bold text-lg mt-1">{{ people.subject }}</p>
				<p class="ml-16 mt-1">{{ people.message }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	export default {
		name: 'PeopleContacted',
		setup() {
			const store = useStore();
			store.dispatch('loadPeopleContacted');
			const peopleData = computed(() => {
				return store.getters.getPeopleContacted;
			});
			return { peopleData };
		},
	};
</script>
