<template>
	<div class="bg-clrBlack">
		<div
			class="flex flex-col w-full h-screen bg-cover bg-top text text-clrWhite"
			:style="cssProps"
		>
			<div class="self-start fixed w-full">
				<AppHeader />
			</div>
			<div class="self-center m-auto mx-8">
				<div class="flex flex-col justify-center items-center">
					<h1
						class="text-3xl text-center md:text-4xl mx-10 lg:text-6xl font-bold"
						>Get in contact with us</h1
					>
					<div
						class="text-center text-sm md:text-base lg:text-2xl font-light mt-2 lg:mt-4"
					>
						<h3>Send a message below</h3>
					</div>
				</div>
			</div>
		</div>
		<ContactForm />
		<AppFooter />
	</div>
</template>

<script>
	import ContactForm from '../components/ContactPage/ContactForm.vue';
	import AppFooter from '../components/UI/AppFooter.vue';
	import AppHeader from '../components/UI/AppHeader.vue';
	export default {
		components: { AppHeader, ContactForm, AppFooter },
		name: 'ContactPage',
		setup() {
			const cssProps = {
				backgroundImage: `url(${require('@/assets/images/contact/contact-header.svg')})`,
			};

			return {
				cssProps,
			};
		},
	};
</script>
