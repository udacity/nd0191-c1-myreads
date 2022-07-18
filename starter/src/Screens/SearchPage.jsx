import React from "react";
import { Link } from "react-router-dom";


import BookList from "../Component/BookList";
import * as BookApi from "../BooksAPI";

export default function SearchPage() {
  const [search, setSearch] = React.useState([]);

  const SearchText = async (e) => {
    if (e.target.value === "") setSearch([]);
    //Search From API
    const res = await BookApi.search(e.target.value, 20).catch(() =>
      setSearch([])
    );
    if (Array.isArray(res)) {
      setSearch(res);
    } else {
      setSearch([]);
    }
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            onChange={SearchText}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <BookList booklist={search} />
      </div>
    </div>
  );
}
