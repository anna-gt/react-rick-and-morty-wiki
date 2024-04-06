import React from 'react';
import { setCurrentPage } from '../../redux/wikiSlice';
import { useDispatch} from 'react-redux';

import styles from './filterBtn.module.scss';

const FilterBtn = ({ input, task, index, name }) => {

	const dispatch = useDispatch();

	function clickHandler() {
		console.log('click');
		task(input);
		dispatch(setCurrentPage(1));
	}

	return (
		<div className="form-check">
			<input
				className={`form-check-input ${styles.x}`} type="radio"
				name={name} id={`${name}-${index}`}
			/>
			<label
				onClick={clickHandler}
				className='btn btn-outline-primary'
				htmlFor={`${name}-${index}`}
			> {input} </label>
		</div>
	);
};

export default FilterBtn;