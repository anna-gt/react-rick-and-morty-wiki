import React from 'react';
import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue, searchHandler, resetHandler }) => {

	const searchBtn = (eo) => {
    eo.preventDefault();
		searchHandler();
  };
	const resetBtn = (eo) => {
		eo.preventDefault();
		resetHandler();
	}

	return (
		<form
    className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
		<input onChange={(eo) => {
    setSearchValue(eo.target.value);
  		}}
		onKeyDown={(eo) => {
			if (eo.key === 'Enter') 
			searchHandler();
			} 
		}
  	placeholder="Search for characters"
  	className={styles.input}
  	type="text"
		value={searchValue}
		/>
		<button
  		onClick={searchBtn}
  		className={`${styles.btn} btn btn-primary fs-5`}>
  		Search
		</button>
		<button
  		onClick={resetBtn}
  		className={`${styles.btn} btn btn-primary fs-5`}>
  		Reset
		</button>
  </form>
	);
};

export default React.memo(Search);