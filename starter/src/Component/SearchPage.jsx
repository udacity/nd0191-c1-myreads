import React from "react";
import PropTypes from "prop-types";

import BookList from "./BookList";
import * as BookApi from "../BooksAPI";

export default function SearchPage({ booklist }) {
  const [search, setSearch] = React.useState([]);

  React.useEffect(() => {
    setSearch(booklist);
    //Get All Books From API
    //  const getBooks = async () => {
    //   const res = await BookApi.search("",booklist.length)
    //   setSearch(res);
    // };
    // getBooks();
  }, [booklist]);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <a className='close-search' href='/'>
          Close
        </a>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title, author, or ISBN' />
        </div>
      </div>
      <div className='search-books-results'>
        <BookList booklist={search} />
      </div>
    </div>
  );
}
SearchPage.propTypes = {
  booklist: PropTypes.array.isRequired,
};
