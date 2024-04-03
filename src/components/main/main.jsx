import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './main.css';
import { getWiki } from '../actions/wiki';
import Card from '../card/card';
import Search from "../search/search";


const Main = () => {

	const dispatch = useDispatch();
	const items = useSelector(state => state.wiki.items);
	const status = useSelector(state => state.wiki);
	const [pageNumber, setPageNumber] = useState(1);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		dispatch(getWiki(searchValue, pageNumber));
	}, []);

	function searchHandler() {
		setPageNumber(1);
		dispatch(getWiki(searchValue, pageNumber))
	}


	return (
			<div className="App">
  			<h1 className="text-center mb-3">Characters</h1>
				<Search setSearchValue={setSearchValue} setPageNumber={setPageNumber} searchHandler={searchHandler}/>
  			<div className="container">
  				<div className="row">
    				Filter component will be placed here
    				<div className="col-lg-8 col-12">
      				<div className="row">
							{ (status.dataLoadState===0) && "No Characters Found :/" }
							{ (status.dataLoadState===1) && "Loading" }
							{ (status.dataLoadState===2) && items.map((item, index) => <Card key={index} data={item} />) }
							{ (status.dataLoadState===4) && "Error" }
        			
      				</div>
    				</div>
  				</div>
 				 </div>
			</div>		
	);
};


export default Main;