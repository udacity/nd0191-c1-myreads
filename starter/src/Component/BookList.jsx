import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import EachBook from "./EachBook";

export default function BookList({ booklist, addBook }) {
  let currentlyReading = JSON.parse(localStorage.getItem("currentlyReading"));
  let wantToRead = JSON.parse(localStorage.getItem("wantToRead"));
  let read = JSON.parse(localStorage.getItem("read"));

  const element = (book, bookshelf) => {
    return (
      <EachBook
        key={book.id}
        book={book}
        bookshelf={bookshelf}
        addBook={addBook}
      />
    );
  };

  return booklist == null ? (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'></span>
      </div>
    </div>
  ) : booklist.length === 0 ? (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-sm-12 empty-cart-cls text-center'>
            {addBook ? (
              <h5>No Book Yet</h5>
            ) : (
              <div className='m-4'>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/1178/1178479.png'
                  width='130'
                  height='130'
                  className='img-fluid mb-4 mr-3'
                  alt='Not Found img'
                />
                <h3>
                  <strong>No Book Found</strong>
                </h3>
                <Link to='/' className='btn btn-success cart-btn-transform m-3'>
                  Back To My Shelf
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ol className='books-grid'>
      {booklist.map((book) => {
        if (currentlyReading.findIndex((e) => e.id === book.id) > -1) {
          return element(book, "currentlyReading");
        } else if (wantToRead.findIndex((e) => e.id === book.id) > -1) {
          return element(book, "wantToRead");
        } else if (read.findIndex((e) => e.id === book.id) > -1) {
          return element(book, "read");
        } else {
          return <EachBook key={book.id} book={book} addBook={addBook} />;
        }
      })}
    </ol>
  );
}
BookList.propTypes = {
  booklist: PropTypes.array.isRequired,
  addBook: PropTypes.func,
};
