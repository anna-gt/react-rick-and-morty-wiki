import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	dataLoadState: null,
	dataLoadError: null,
}

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload.results;
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
	}
})

export const { setItems, updateLoadState } = locationSlice.actions;

export default locationSlice.reducer;