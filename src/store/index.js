import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
	state: {
		podcasts: [],
		peopleJoined: [],
		peopleContacted: [],
	},
	mutations: {
		addPodcast(state, payload) {
			state.podcasts = payload;
		},
		addPeopleJoined(state, payload) {
			state.peopleJoined = payload;
		},
		addPeopleContacted(state, payload) {
			state.peopleContacted = payload;
		},
	},
	actions: {
		async addPodcast(context, payload) {
			await axios.post(
				'https://yes-theory-ac62a-default-rtdb.firebaseio.com/podcasts.json',
				JSON.stringify(payload),
			);

			context.commit('addPodcast', payload);
		},
		async loadPodcasts(context) {
			const response = await axios.get(
				'https://yes-theory-ac62a-default-rtdb.firebaseio.com/podcasts.json',
			);

			context.commit('addPodcast', response.data);
		},
		async addPeopleJoined(context, payload) {
			await axios.post(
				'https://yes-theory-ac62a-default-rtdb.firebaseio.com/people.json',
				JSON.stringify(payload),
			);
			context.commit('addPeopleJoined', payload);
		},
		async loadPeopleJoined(context) {
			const response = await axios.get(
				'https://yes-theory-ac62a-default-rtdb.firebaseio.com/people.json',
			);

			context.commit('addPeopleJoined', response.data);
		},

		async addPeopleContacted(context, payload) {
			await axios.post(
				'https://yes-theory-ac62a-default-rtdb.firebaseio.com/contacts.json',
				JSON.stringify(payload),
			);
			context.commit('addPeopleContacted', payload);
		},
		async loadPeopleContacted(context) {
			const response = await axios.get(
				'https://yes-theory-ac62a-default-rtdb.firebaseio.com/contacts.json',
			);

			context.commit('addPeopleContacted', response.data);
		},
	},
	getters: {
		getPodcasts(state) {
			return state.podcasts;
		},
		getPeopleJoined(state) {
			return state.peopleJoined;
		},
		getPeopleContacted(state) {
			return state.peopleContacted;
		},
	},
});
