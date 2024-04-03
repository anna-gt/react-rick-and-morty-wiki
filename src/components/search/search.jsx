import React from 'react';
import styles from "./Search.module.scss";

const Search = ({ setSearchValue, setPageNumber, searchHandler }) => {

	const searchBtn = (eo) => {
    eo.preventDefault();
		searchHandler();
  };

	return (
		<form
    className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
		<input onChange={(eo) => {
    setPageNumber(1);
    setSearchValue(eo.target.value);
  		}}
  	placeholder="Search for characters"
  	className={styles.input}
  	type="text"
		/>
		<button
  		onClick={searchBtn}
  		className={`${styles.btn} btn btn-primary fs-5`}>
  		Search
		</button>
  </form>
	);
};

export default React.memo(Search);