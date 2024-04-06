import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './main.css';
import { getWiki } from '../actions/wiki';
import Card from '../card/card';
import Search from "../search/search";
import Pagination from "../pagination/pagination";
import Filter from "../Filter/filter";
import { setCurrentPage } from "../../redux/wikiSlice";


const Main = () => {

	const dispatch = useDispatch();
	const items = useSelector(state => state.wiki.items);
	const loadStatus = useSelector(state => state.wiki);
	const currentPage = useSelector(state => state.wiki.currentPage);

	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const [species, setSpecies] = useState('');

	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		dispatch(getWiki(searchValue, currentPage, status, gender, species));
	}, [currentPage, status, gender, species]);

	function searchHandler() {
		dispatch(setCurrentPage(1));
		dispatch(getWiki(searchValue, currentPage, status, gender, species))
	}
	function resetHandler() {
		dispatch(setCurrentPage(1));
		setSearchValue("");
		dispatch(getWiki("", currentPage))
	}


	return (
			<div className="App">
  			<h1 className="text-center mb-3">Characters</h1>
				<Search 
				searchValue={searchValue} 
				setSearchValue={setSearchValue} 
				searchHandler={searchHandler}
				resetHandler={resetHandler}
				/>
  			<div className="container">
  				<div className="row">
					<Filter
							status={status}
							setStatus={setStatus}
							setGender={setGender}
							setSpecies={setSpecies}
						/>
    				<div className="col-lg-8 col-12">
      				<div className="row">
							{ (loadStatus.dataLoadState===0) && "No Characters Found :/" }
							{ (loadStatus.dataLoadState===1) && 
							<div className="d-flex justify-content-center">
								<div className="spinner-grow text-primary" role="status"></div>
							</div> }
							{ (loadStatus.dataLoadState===2) && items.map((item, index) => <Card key={index} data={item} />) }
							{ (loadStatus.dataLoadState===4) && "Error" }
        			
      				</div>
    				</div>
  				</div>
 				 </div>
				 <Pagination />
			</div>		
	);
};


export default Main;