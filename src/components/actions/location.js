import axios from 'axios';
import { setItems, updateLoadState } from '../../redux/locationSlice';

export const getLocation = (id) => {
	return async(dispatch) => {
		try {
			dispatch( updateLoadState({state:1,error:null}) );
			const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
			dispatch( updateLoadState({state:2,error:null}) );
			dispatch(setItems(response.data));
		}
		catch(err) {
			dispatch( updateLoadState({state:3,error:err.message}))
		}
	}
}
