import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './main.css';
import { getWiki } from '../actions/wiki';
import Card from '../card/card';
import Search from "../search/search";
import Pagination from "../pagination/pagination";
import { setCurrentPage } from "../../redux/wikiSlice";


const Main = () => {

	const dispatch = useDispatch();
	const items = useSelector(state => state.wiki.items);
	const status = useSelector(state => state.wiki);
	const currentPage = useSelector(state => state.wiki.currentPage);

	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		dispatch(getWiki(searchValue, currentPage));
	}, [currentPage]);

	function searchHandler() {
		dispatch(setCurrentPage(1));
		dispatch(getWiki(searchValue, currentPage))
	}


	return (
			<div className="App">
  			<h1 className="text-center mb-3">Characters</h1>
				<Search setSearchValue={setSearchValue} searchHandler={searchHandler}/>
  			<div className="container">
  				<div className="row">
    				Filter component will be placed here
    				<div className="col-lg-8 col-12">
      				<div className="row">
							{ (status.dataLoadState===0) && "No Characters Found :/" }
							{ (status.dataLoadState===1) && 
							<div className="d-flex justify-content-center">
								<div className="spinner-grow text-primary" role="status"></div>
							</div> }
							{ (status.dataLoadState===2) && items.map((item, index) => <Card key={index} data={item} />) }
							{ (status.dataLoadState===4) && "Error" }
        			
      				</div>
    				</div>
  				</div>
 				 </div>
				 <Pagination />
			</div>		
	);
};


export default Main;