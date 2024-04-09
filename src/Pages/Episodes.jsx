import React, { useState, useEffect} from 'react';
import Card from '../components/card/card';
import InputGroup from '../components/Filter/category/inputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisode, getEpisodesInfo } from '../components/actions/episode';

const Episodes = () => {

	const dispatch = useDispatch();
	const results = useSelector(state => state.episode.items);
	const totalCount = useSelector(state => state.episode.info.count);
	const characters = useSelector(state => state.episode.characters);
	const { air_date, episode, name } = results;
	const [id, setID] = useState(1);

	useEffect(() => {
		dispatch(getEpisodesInfo());
		console.log(totalCount)
	}, [])

	useEffect(() => {
		dispatch(getEpisode(id));

	}, [id]);

	return (
		<div className="container">
			<div className="row mb-3">
				<h1 className="text-center mb-3">
					Episode name :{" "}
					<span className="text-primary">{name === "" ? "Unknown" : name}</span>
				</h1>
				<h5 className="text-center">
					Air Date: {air_date === "" ? "Unknown" : air_date}
				</h5>
					<div className="row">
					<div className="col-lg-3 col-12 mb-4">
						<h4 className="text-center mb-4">Pick Episode</h4>
						<InputGroup name="Episode" changeID={setID} total={totalCount} />
					</div>
					<div className="col-lg-8 col-12">
						<div className="row">
							{characters.map ((character, index) => <Card key={index} data={character}/>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Episodes;