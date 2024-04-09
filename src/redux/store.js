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
	// middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ['your/action/type'],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
  //       // Ignore these paths in the state
  //       ignoredPaths: ['items.dates'],
  //     },
  //   }),
})