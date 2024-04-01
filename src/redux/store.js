import { configureStore } from '@reduxjs/toolkit';
import wikiReducer from './wikiSlice';

export const store = configureStore({
	reducer: {
		wiki: wikiReducer,
	}
})