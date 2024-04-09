import axios from 'axios';
import { setItems, updateLoadState, setInfo, setCharacters } from '../../redux/episodeSlice';

export const getEpisode = (id) => {
	return async(dispatch) => {
		try {
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
			dispatch( updateLoadState({state:2,error:null}) );
			dispatch(setItems(response.data));
			let characters = await Promise.all(response.data.characters.map(async characterApi => {
				const res = await fetch(characterApi);
				return await res.json();
			})); 
			dispatch(setCharacters(characters));
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}))
		}
	}
}

export const getEpisodesInfo = () => {
	return async(dispatch) => {
		try {
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
			dispatch( updateLoadState({state:2,error:null}) );
			dispatch(setInfo(response.data.info));
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}))
		}
	}
}