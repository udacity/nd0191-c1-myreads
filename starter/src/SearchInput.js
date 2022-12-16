import React from "react";

import * as BooksAPI from "./BooksAPI";
const SearchInput = ({ SetList }) => {
  const handleChange = (event) => {
    const val = event.target.value;
    if (val.length > 0) {
      const getBooks = async () => {
        const res = await BooksAPI.search(val, 25).catch((err) => {
          console.log(err);
        });
        SetList(res);
      };
      getBooks();
    } else {
      SetList([]);
    }
  };
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        autoFocus
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
