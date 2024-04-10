import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getLocationInfo } from '../components/actions/location';
import InputGroup from '../components/Filter/category/inputGroup';
import Card from '../components/card/card';

const Location = () => {

	const dispatch = useDispatch();
	const results = useSelector(state => state.location.result);
	const { dimension, type, name } = results;
	const totalCount = useSelector(state => state.location.info.count);
	const residents = useSelector(state => state.location.residents);
	const [number, setNumber] = useState(1);

	useEffect(() => {
		dispatch(getLocationInfo());
	}, [])

	useEffect(() => {
		dispatch(getLocation(number));

	}, [number]);

	return (
		<div className="container">
			<div className="row mb-3">
				<h1 className="text-center mb-3">
				Location :
					<span className="text-primary">{name === "" ? "Unknown" : name}</span>
				</h1>
				<h5 className="text-center">
				Dimension: {dimension === "" ? "Unknown" : dimension}
				</h5>
				<h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
					<div className="row">
					<div className="col-lg-3 col-12 mb-4">
						<h4 className="text-center mb-4">Pick Episode</h4>
						<InputGroup name="Location" changeID={setNumber} total={totalCount} />
					</div>
					<div className="col-lg-8 col-12">
						<div className="row">
							{residents.map ((resident, index) => <Card page="/location/" key={index} data={resident}/>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;