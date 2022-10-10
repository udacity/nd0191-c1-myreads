import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({books, updateBook}) => {
  let navigate = useNavigate();

  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter((b) =>
          b.title.toLowerCase().includes(query.toLowerCase())
        );

return (
  <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              // onClick={navigate("/")}
            >
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
                  {showingBooks.map((book) => (
                    <li key={book.title}>
                      <Book book={book} updateBook={updateBook}></Book>
                    </li>
                     ))};
            </ol>
          <div className="showing-books">
          <span>
            Now showing {showingBooks.length} of {books.length}
          </span>
          <button onClick={clearQuery}>Show all</button>
        </div>
          </div>
  </div>
              
);
}

export default Search;