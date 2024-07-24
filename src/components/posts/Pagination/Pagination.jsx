import React from 'react';
import PropTypes from 'prop-types';
import GenericBtn from 'components/ui/GenericBtn';
import css from './Pagination.module.css'

const Pagination = ({arrayOfPageNumbers, page, changePage}) => {
  return (
    <ul className={css.wrapper}>
      {
        arrayOfPageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <GenericBtn
              onClick={() => changePage(pageNumber)}
              active={pageNumber === page}
            >
              {pageNumber}
            </GenericBtn>
          </li>
        ))
      }
      
    </ul>
  );
}

Pagination.propTypes = {
  arrayOfPageNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,

}

export default Pagination;
