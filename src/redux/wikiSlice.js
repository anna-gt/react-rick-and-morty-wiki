import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	dataLoadState: null,
	dataLoadError: null,
	currentPage: 1,
	totalCount: 0,
	pages: 0 
}

export const wikiSlice = createSlice({
	name: 'wiki',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload.results;
			state.totalCount = action.payload.info.count;
			state.pages = action.payload.info.pages;
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
		
	}
})

export const { setItems, updateLoadState, setCurrentPage } = wikiSlice.actions;

export default wikiSlice.reducer;