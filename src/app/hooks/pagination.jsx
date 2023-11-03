import React from "react";
import PropTypes from "prop-types";
import {
  PaginationContainer,
  PageNumber,
  PageLabel,
  NavigationButton,
} from "./paginationStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faCircleChevronLeft,
  faCircleChevronRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const pagesToShow = 5; // Define quantas páginas visíveis você deseja.

  for (
    let i = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    i <= Math.min(totalPages, currentPage + Math.floor(pagesToShow / 2));
    i++
  ) {
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
      <NavigationButton onClick={() => onPageChange(1)}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </NavigationButton>
      <NavigationButton
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </NavigationButton>
      {pageNumbers}
      <NavigationButton
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </NavigationButton>
      <NavigationButton onClick={() => onPageChange(totalPages)}>
        <FontAwesomeIcon icon={faAnglesRight} />
      </NavigationButton>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
