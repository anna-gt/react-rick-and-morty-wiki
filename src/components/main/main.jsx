import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './main.css';
import { getWiki } from '../actions/wiki';
import Card from '../card/card';


const Main = () => {

	const dispatch = useDispatch();
	const items = useSelector(state => state.wiki.items);
	const status = useSelector(state => state.wiki);

	useEffect(() => {
		dispatch(getWiki());
	}, [])

	return (
			<div className="App">
  			<h1 className="text-center mb-3">Characters</h1>
  			<div className="container">
  				<div className="row">
    				Filter component will be placed here
    				<div className="col-lg-8 col-12">
      				<div className="row">
        			Card component will be placed here
      				</div>
    				</div>
  				</div>
 				 </div>
			</div>		
	);
};


export default Main;