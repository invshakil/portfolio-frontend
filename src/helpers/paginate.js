import React, {useState, useEffect} from "react"
import ReactPaginate from "react-paginate"
import {FcPrevious} from "react-icons/fc"
import {FcNext} from "react-icons/fc"

const Paginate = ({data,page}) => {

    const handlePageClick = (event) => {
        const newOffset = (event.selected * page) % data?.length;
        setItemOffset(newOffset);
    };

    return (
        <ReactPaginate
            //  containerClassName='paginate'
            // pageClassName='pageNumber'
            activeClassName='activeCLass'
            previousClassName='prevClass'
            nextClassName='prevClass'
            className='paginate'
            breakLabel="..."
            nextLabel=<FcNext size='25px' color={'red'}/>
            onPageChange = {handlePageClick}
            pageRangeDisplayed = {5}
            pageCount = {page}
            previousLabel = <FcPrevious size='25px'/>
            renderOnZeroPageCount = {null}
    />
)}

export default Paginate