import React from "react";
import BookList from "../components/BookList";

const Home = ({ setShowSearchpage }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <BookList />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <BookList />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <BookList />
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <a href="!#" onClick={() => setShowSearchpage((prev) => !prev)}>
          Add a book
        </a>
      </div>
    </div>
  );
};

export default Home;
