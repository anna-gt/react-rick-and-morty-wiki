import { configureStore } from '@reduxjs/toolkit';
import wikiReducer from './wikiSlice';
import locationReducer from './locationSlice';
import episodeReducer from './episodeSlice'

export const store = configureStore({
	reducer: {
		wiki: wikiReducer,
		location: locationReducer,
		episode: episodeReducer,
	},
})