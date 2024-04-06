import React from 'react';
import Gender from './category/gender';
import Species from './category/species';
import Status from './category/status';
import { setCurrentPage } from '../../redux/wikiSlice';
import { useDispatch } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';

const Filter = ({setStatus, setGender, setSpecies}) => {

	const dispatch = useDispatch();

	const clear = () => {
		setStatus('');
		setGender('');
		setSpecies('');
		dispatch(setCurrentPage(1));
		window.location.reload(false);
	}

	return (
		<div className="col-lg-3 col-12 mb-5">
			<div className="text-center fw-bold fs-4 mb-2">Filters</div>
				<div
					style={{ cursor: "pointer" }} onClick={clear}
					className="text-primary text-decoration-underline text-center mb-3"> Clear Filters </div>
				<Accordion>
					<Status setStatus={setStatus} />
					<Species setSpecies={setSpecies} />
					<Gender setGender={setGender} />
				</Accordion>
		</div>
	);
};

export default Filter;