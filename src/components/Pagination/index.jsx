import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { teamSelector } from '../../store/teams/selectors';
import { setCount, setPage } from '../../store/teams/teams';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const { page, limit, teams, count } = useSelector(teamSelector);
  const dispatch = useDispatch();
  const backRef = React.useRef();
  const forwardRef = React.useRef();

  const handlePageForward = () => {
    const num = count - (count % limit);
    if (page < num) {
      return dispatch(setPage(page + 12));
    } else {
      return page;
    }
  };
  const handlePageBack = () => {
    if (page !== 0) {
      return dispatch(setPage(page - 12));
    } else {
      return page;
    }
  };

  React.useEffect(() => {
    dispatch(setCount(teams?.count));
  }, [teams]);
  return (
    <>
      <ul className={styles.root}>
        <li
          style={{ background: page === 0 ? 'none' : 'rgb(0, 82, 53)' }}
          ref={backRef}
          onClick={handlePageBack}>
          <p style={{ color: page === 0 ? 'grey' : '#fff' }}>
            <ArrowBackIos fontSize="small" />
          </p>
        </li>
        <li
          style={{ background: page === 72 ? 'none' : 'rgb(0, 82, 53)', color: 'grey' }}
          ref={forwardRef}
          onClick={handlePageForward}>
          <p style={{ color: page === 72 ? 'grey' : '#fff' }}>
            <ArrowForwardIos fontSize="small" />
          </p>
        </li>
      </ul>
    </>
  );
};

export default Pagination;

/**
 <ReactPaginate
        className={styles.root}
        breakLabel=""
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={12}
        pageCount={3}
        renderOnZeroPageCount={null}
      /> 
 */
