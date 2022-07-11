import React from "react";
import BookList from "./BookList";

export default function SearchPage({ changeSearchPage }) {
  const [search, setSearch] = React.useState([]);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <a className='close-search' onClick={() => changeSearchPage()}>
          Close
        </a>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title, author, or ISBN' />
        </div>
      </div>
      <div className='search-books-results'>
        <BookList  booklist={search} value="none"/>
      </div>
    </div>
  );
}
