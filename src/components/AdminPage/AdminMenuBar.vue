<template>
	<div>
		<div class="w-full bg-clrGrey flex justify-center items-center">
			<div
				class="w-full bg-clrWhite text-clrBlack font-bold h-20 text-xl text-center flex flex-col justify-center items-center cursor-pointer hover:bg-clrYellow focus:bg-clrYellow"
				>Add New Podcast</div
			>
			<div
				class="w-full bg-clrWhite ml-px text-clrBlack h-20 text-xl font-bold text-center flex flex-col justify-center items-center cursor-pointer hover:bg-clrYellow focus:bg-clrYellow"
				>People Joined</div
			>
			<div
				class="w-full bg-clrWhite ml-px text-clrBlack h-20 text-xl font-bold text-center flex flex-col justify-center items-center cursor-pointer hover:bg-clrYellow focus:bg-clrYellow"
				>People Who Contacted</div
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AdminMenuBar',
		setup(_, { emit }) {
			const emitPodcasts = () => {
				emit('podcasts-clicked', 'podcasts');
			};

			const emitJoined = () => {
				emit('joined-clicked', 'joinded');
			};

			const emitContacted = () => {
				emit('contacted-clicked', 'contacted');
			};

			return {
				emitPodcasts,
				emitJoined,
				emitContacted,
			};
		},
	};
</script>
