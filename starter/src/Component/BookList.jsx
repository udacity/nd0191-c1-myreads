import React from "react";
import EachBook from "./EachBook";

export default function BookList({ booklist, addBook }) {
  let currentlyReading = JSON.parse(localStorage.getItem("currentlyReading"));
  let wantToRead = JSON.parse(localStorage.getItem("wantToRead"));
  let read = JSON.parse(localStorage.getItem("read"));
  
  return !booklist ? (
    <div class='spinner-border' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
  ) : (
    <ol className='books-grid'>
      {booklist.map((book) => {
        if (currentlyReading.findIndex((e) => e.id === book.id) > -1) {
          return (
            <EachBook
              key={book.id}
              book={book}
              bookshelf='currentlyReading'
              addBook={addBook}
            />
          );
        } else if (wantToRead.findIndex((e) => e.id === book.id) > -1) {
          return (
            <EachBook
              key={book.id}
              book={book}
              bookshelf='wantToRead'
              addBook={addBook}
            />
          );
        }
        else if (read.findIndex((e) => e.id === book.id) > -1) {
          return (
            <EachBook
              key={book.id}
              book={book}
              bookshelf='read'
              addBook={addBook}
            />
          );
        }
        else {
          return (
            <EachBook
              key={book.id}
              book={book}
              addBook={addBook}
            />
          );
        }
      })}
    </ol>
  );
}
