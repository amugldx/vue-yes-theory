<template>
	<div>
		<div
			class="bg-clrGrey pb-10 md:pb-14 lg:pb-16 mx-6 md:mx-24 lg:mx-48 mt-2 mb-8 lg:my-20 md:my-16 rounded-lg"
		>
			<h3
				class="bg-clrWhite text-center py-1 text-lg md:text-xl lg:text-4xl md:py-2 lg:py-4 font-bold rounded-t-lg"
				>Contact Us</h3
			>
			<form class="text-clrWhite flex flex-col">
				<div
					class="flex flex-col justify-center items-center mt-10 md:mt-12 lg:mt-16"
				>
					<label class="text-sm md:text-base lg:text-lg mb-2" for="name"
						>Your Name</label
					>
					<input
						class="w-4/5 rounded-full text-clrBlack h-8 lg:h-12 lg:text-2xl p-4"
						type="text"
						id="name"
					/>
				</div>
				<div
					class="flex flex-col justify-center items-center mt-6 md:mt-8 lg:mt-10"
				>
					<label class="text-sm md:text-base lg:text-lg mb-2" for="email"
						>Your Email Address</label
					>
					<input
						class="w-4/5 rounded-full text-clrBlack h-8 lg:h-12 lg:text-2xl p-4"
						type="email"
						id="email"
					/>
				</div>
				<div
					class="flex flex-col justify-center items-center mt-6 md:mt-8 lg:mt-10"
				>
					<label class="text-sm md:text-base lg:text-lg mb-2" for="subject"
						>Your Message Subject</label
					>
					<input
						class="w-4/5 rounded-full text-clrBlack h-8 lg:h-12 lg:text-2xl p-4"
						placeholder="Let us know what you're thinking"
						type="text"
						id="subject"
					/>
				</div>
				<div
					class="flex flex-col justify-center items-center mt-6 md:mt-8 lg:mt-10"
				>
					<label class="text-sm md:text-base lg:text-lg mb-2" for="message"
						>Your Message</label
					>
					<textarea
						class="w-4/5 rounded-lg text-clrBlack lg:text-2xl p-4"
						name="message"
						id="message"
						rows="3"
					></textarea>
				</div>
				<div class="self-center mt-6 md:mt-8 lg:mt-10">
					<AppButton
						type="submit"
						color="bg-clrWhite text-clrBlack hover:bg-clrBlue hover:text-clrWhite"
						>There You Go</AppButton
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		name: 'ContactForm',
		setup() {
			return {};
		},
	};
</script>
