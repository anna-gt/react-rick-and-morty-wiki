import React from 'react';
import { useState, useEffect } from 'react';
import { setCurrentPage } from '../../redux/wikiSlice';
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss';

const Pagination = () => {

	const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []); 

	const dispatch = useDispatch();
	const pagesCount = useSelector(state => state.wiki.pages);
	const currentPage = useSelector(state => state.wiki.currentPage)

	const handlePageClick = (eo) => {
		dispatch(setCurrentPage(eo.selected+1));
	}
	

	return (
			<ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
				forcePage={currentPage === 1 ? 0 : currentPage-1}
        previousLabel="Previous"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={pagesCount}
        onPageChange={handlePageClick}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
	);
};


export default React.memo(Pagination);