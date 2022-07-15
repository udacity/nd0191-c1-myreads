import React from "react";
import PropTypes from "prop-types";
const SearchInput = ({ Query, setQuery }) => {
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={Query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
SearchInput.prototype = {
  Query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
