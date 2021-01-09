import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import PodcastsPage from '../views/PodcastsPage.vue';
import ContactPage from '../views/ContactPage.vue';
import AdminPage from '../views/AdminPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'AboutPage',
		component: AboutPage,
	},
	{
		path: '/contact',
		name: 'ContactPage',
		component: ContactPage,
	},
	{
		path: '/podcasts',
		name: 'PodcastsPage',
		component: PodcastsPage,
	},
	{
		path: '/admin',
		name: 'AdminPage',
		component: AdminPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
