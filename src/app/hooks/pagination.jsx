import React from "react";
import PropTypes from "prop-types";
import { PaginationContainer, PageNumber, PageLabel } from "./paginationStyled";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <PageNumber
        key={i}
        onClick={() => onPageChange(i)}
        selected={currentPage === i}
      >
        {i}
      </PageNumber>
    );
  }

  return (
    <PaginationContainer>
      <PageLabel>Página</PageLabel>
      {pageNumbers}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
