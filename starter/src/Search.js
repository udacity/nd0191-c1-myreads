import React from 'react'
import PropTypes from "prop-types";

const Search = ({ChangeshowSearchPage}) =>{
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a
        className="close-search"
        onClick={() => ChangeshowSearchPage(false)}
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
  )
}

Search.prototype ={
  ChangeshowSearchPage: PropTypes.func.isRequired,
}
export default Search