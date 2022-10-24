import { search } from "../../BooksAPI";
import { useState, useEffect } from "react";
import Book from "../book/Book";

const Search = ({ showSearchPage, setShowSearchpage }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const searchBooks = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    console.log("searchInput", searchInput);
    if (searchInput) {
      search(searchInput, 20).then((data) => setSearchResults(data));
    }
    else{
        setSearchResults([])
    }
  }, [searchInput]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => searchBooks(e.target.value)}
          />
        </div>
      </div>
      {searchResults && (
        <div className="search-books-results">
          <ol className="books-grid">
            {/* {searchResults.map(book => <Book book={book} key={book.id}/>)} */}
            {searchResults.map((book) => {
              console.log(searchResults);
              return <Book book={book} key={book.id} />;
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Search;
