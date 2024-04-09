import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	dataLoadState: null,
	dataLoadError: null,
	info: [],
	characters: []
}

export const episodeSlice = createSlice({
	name: 'episode',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
		setInfo: (state, action) => {
			state.info = action.payload
		},
		setCharacters: (state, action) => {
			state.characters = action.payload
		}
	}
})

export const { setItems, updateLoadState, setInfo, setCharacters } = episodeSlice.actions;

export default episodeSlice.reducer;