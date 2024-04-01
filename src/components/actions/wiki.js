import axios from 'axios';
import { setItems, updateLoadState } from '../../redux/wikiSlice';

export const getWiki = () => {
	return async (dispatch) => {
		try {
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=1`);
			dispatch( updateLoadState({state:2,error:null}) );
			dispatch(setItems(response.data));
			console.log(response.data);
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}) );
		}
	}
}