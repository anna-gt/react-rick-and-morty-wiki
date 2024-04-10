import axios from 'axios';
import { setResult, updateLoadState, setInfo, setResidents } from '../../redux/locationSlice';

export const getLocation = (number) => {
	return async(dispatch) => {
		try {
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://rickandmortyapi.com/api/location/${number}`);
			dispatch( updateLoadState({state:2,error:null}) );
			dispatch(setResult(response.data));
			let residents = await Promise.all(response.data.residents.map(async residentApi => {
				const res = await fetch(residentApi);
				return await res.json();
			})); 
			dispatch(setResidents(residents));
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}))
		}
	}
}

export const getLocationInfo = () => {
	return async(dispatch) => {
		try {
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://rickandmortyapi.com/api/location`);
			dispatch( updateLoadState({state:2,error:null}) );
			dispatch(setInfo(response.data.info));
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}))
		}
	}
}
