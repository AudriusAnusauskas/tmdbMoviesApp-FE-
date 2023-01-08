import React from 'react';
import classnames from 'classnames';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import usePagination from '../../Hooks/usePagination';
import styles from './Pagination.module.css';

type PaginationProps = {
  totalPages: number;
  activePage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
};
// eslint-disable-next-line
const Pagination = ({ totalPages, activePage, onPageChange, siblingCount = 1, className }: PaginationProps) => {
  const paginationRange = usePagination({ totalPages, siblingCount, page: activePage });

  const onNext = () => {
    onPageChange(activePage + 1);
  };

  const onPrevious = () => {
    onPageChange(activePage - 1);
  };

  const lastPage = paginationRange?.[paginationRange.length - 1];

  return (
    <ul className={classnames(styles.paginationContainer, className)}>
      <li
        className={classnames(styles.paginationItem, {
          [styles.disabled]: activePage === 1,
        })}
        onClick={onPrevious}
      >
        <span>
          <HiOutlineChevronLeft />
        </span>
      </li>

      {paginationRange?.map((pageNumber) => {
        if (pageNumber === '...') {
          return <li className={styles.dots}>...</li>;
        }

        return (
          <li
            className={classnames(styles.paginationItem, {
              [styles.active]: pageNumber === activePage,
            })}
            key={Math.random()}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={classnames(styles.paginationItem, {
          [styles.disabled]: activePage === lastPage,
        })}
        onClick={onNext}
      >
        <span>
          <HiOutlineChevronRight />
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
