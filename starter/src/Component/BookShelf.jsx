import React from "react";
import BookList from "./BookList";

export default function BookShelf({ title, booklist ,value}) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BookList booklist={booklist} value={value} />
      </div>
    </div>
  );
}
