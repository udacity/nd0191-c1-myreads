import { useState} from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = ({ updateBook }) => {

  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const updateQuery = (query) => {
    const retrieveSearchResults = async () => {
      setQuery(query.trim());
      if (query.length !== 0) {
        console.log("query: " + query)
        const res = await BooksAPI.search(query);
        console.log(res);
        setSearchedBooks(res);
      }
      else {
        setSearchedBooks([]);
      }
    };

    retrieveSearchResults();
  };

  const clearQuery = () => {
    updateQuery("");
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            className="search-books"
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
        <ol className="books-grid">
          {searchedBooks.map((book) => (
            <li key={book.title}>
              <Book book={book} updateBook={updateBook}></Book>
            </li>
          ))};
        </ol>
        <div className="showing-books">
          <button onClick={clearQuery}>Clear</button>
        </div>
      </div>
    </div>

  );
}

export default Search;