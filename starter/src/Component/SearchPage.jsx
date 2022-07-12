import React from "react";
import BookList from "./BookList";

export default function SearchPage({ booklist }) {
  const [search, setSearch] = React.useState([]);

  React.useEffect(() => {
    setSearch(booklist);
  });

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
        <BookList booklist={search}  />
      </div>
    </div>
  );
}
