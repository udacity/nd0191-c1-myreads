import React from "react";

import BookList from "../Component/BookList";
import * as BookApi from "../BooksAPI";

export default function SearchPage() {
  const [search, setSearch] = React.useState([]);

  React.useEffect(() => {
    getBooks();
  }, []);

  //Get All Books From API
  const getBooks = async () => {
    const res = await BookApi.getAll();
    setSearch(res);
  };
  const SeachText = async (e) => {
    if (e.target.value === "") getBooks();
    //Search From API
    const res = await BookApi.search(e.target.value, 20);
    if (Array.isArray(res)) {
      setSearch(res);
    } else {
      setSearch([]);
    }
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <a className='close-search' href='/'>
          Close
        </a>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            onChange={SeachText}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <BookList booklist={search} />
      </div>
    </div>
  );
}
