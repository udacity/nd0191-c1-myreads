import React from "react";
import BookShelf from "./BookShelf";


function MainShelf({ books, updateShelf, book,search, bookFound }) {
  
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );

  const wantToRead = books.filter((book) => book.shelf === "wantToRead");

 
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <BookShelf
        shelfName="Currently Reading"
        books={currentlyReading}
        updateShelf={updateShelf}
        book={book}
        search={search}
        bookFound={bookFound}
      />
      <BookShelf
        shelfName="Want To Read"
        books={wantToRead}
        updateShelf={updateShelf}
        
      />

      <BookShelf shelfName="Read" books={read} updateShelf={updateShelf} />
    </div>
  );
}

export default MainShelf;