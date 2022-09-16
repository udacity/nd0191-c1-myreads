import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({ books, updateBook }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultBooks, setResultBooks] = useState([]);

  const searchInputValue = (e) => {
    const query = e.target.value;

    setInputValue(query);

    const search = async () => {
      const res = await BooksAPI.search(query, 25);

      console.log(res);

      if (res.error === "empty query") {
        setResultBooks([]);

        return;
      }

      const filteredResults = res.filter((book) => {
        console.log(book);

        return book.authors !== undefined;
      });

      setResultBooks(filteredResults);
    };

    if (query !== "") {
      search();
    }
  };

  // const updateBook = (book, shelf) => {
  //   const update = async () => {
  //     await BooksAPI.update(book, shelf);
  //   };

  //   update();
  // };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={inputValue}
            onChange={searchInputValue}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {resultBooks.map((book) => (
            <Book book={book} updateBook={updateBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
