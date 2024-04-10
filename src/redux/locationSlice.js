import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dataLoadState: null,
	dataLoadError: null,
	info: [],
	residents: [],
	result: [],
}

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setResult: (state, action) => {
			state.result = action.payload;
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
		setInfo: (state, action) => {
			state.info = action.payload
		},
		setResidents: (state, action) => {
			state.residents = action.payload
		}
	}
})

export const { setResult, updateLoadState, setInfo, setResidents } = locationSlice.actions;

export default locationSlice.reducer;