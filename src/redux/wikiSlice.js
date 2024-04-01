import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: null,
	dataLoadState: null,
	dataLoadError: null,
}

export const wikiSlice = createSlice({
	name: 'wiki',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload.items;
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
	}
})

export const { setItems, updateLoadState } = wikiSlice.actions;

export default wikiSlice.reducer;