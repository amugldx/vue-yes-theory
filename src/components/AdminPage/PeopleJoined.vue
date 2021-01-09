<template>
	<div>
		<div class="h-20 bg-clrGrey rounded-t-lg text-clrWhite">
			<h3 class="text-3xl text-center py-6">People Joined</h3>
		</div>
		<div v-for="people in peopleList" :key="people.email">
			<div
				class="h-14 rounded-full w-1/2 my-10 mx-auto shadow-lg bg-clrYellow text-clrBlack"
			>
				<p class="text-center py-3 text-xl">
					{{ people.email }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	export default {
		name: 'PeopleJoined',
		setup() {
			const store = useStore();
			const peopleList = computed(() => {
				return store.getters.getPeopleJoined;
			});
			store.dispatch('loadPeopleJoined');

			return { peopleList };
		},
	};
</script>
