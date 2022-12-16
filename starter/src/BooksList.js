import React from "react";
import ListContent from "./ListContent";

import { Link } from "react-router-dom";

const BooksList = ({ BooksListState, UpdateBooksListState }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ListContent
            BooksListContent={BooksListState.currentlyReading}
            ListName="Currently Reading"
            UpdateBooksListState={UpdateBooksListState}
          />
          <ListContent
            BooksListContent={BooksListState.wantToRead}
            ListName="Want to Read"
            UpdateBooksListState={UpdateBooksListState}
          />
          <ListContent
            BooksListContent={BooksListState.read}
            ListName="Read"
            UpdateBooksListState={UpdateBooksListState}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book </Link>
      </div>
    </div>
  );
};

export default BooksList;
