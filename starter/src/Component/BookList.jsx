import React from "react";
import PropTypes from "prop-types";

import EachBook from "./EachBook";

export default function BookList({ booklist, addBook }) {
  let currentlyReading = JSON.parse(localStorage.getItem("currentlyReading"));
  let wantToRead = JSON.parse(localStorage.getItem("wantToRead"));
  let read = JSON.parse(localStorage.getItem("read"));

  return booklist == null ? (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'></span>
      </div>
    </div>
  ) : booklist.length == 0 ? (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-sm-12 empty-cart-cls text-center'>
            {addBook ? (
              <h5>No Book Yet</h5>
            ) : (
              <div>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/1178/1178479.png'
                  width='130'
                  height='130'
                  className='img-fluid mb-4 mr-3'
                />
                <h3>
                  <strong>No Book Found</strong>
                </h3>
                <a
                  href='/'
                  className='btn btn-sucess cart-btn-transform m-3'
                  data-abc='true'>
                  Back To My Shelf
                </a>
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
        } else if (read.findIndex((e) => e.id === book.id) > -1) {
          return (
            <EachBook
              key={book.id}
              book={book}
              bookshelf='read'
              addBook={addBook}
            />
          );
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
