import { search } from "../../BooksAPI";
import { useState, useEffect } from "react";
import Book from "../book/Book.js";

const Search = ({
  showSearchPage,
  setShowSearchpage,
  readingLists,
  setreadingLists,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const searchBooks = (input) => {
  //   setSearchInput(input);
  // };

  useEffect(() => {
    if (searchInput) {
      console.log("changed");
      console.log("searchInput", searchInput);
      search(searchInput, 20)
        .then((data) => setSearchResults(data))
        .catch((err) => {
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
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
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
       {
        
        <div className="search-books-results">
          <ol className="books-grid">
            {/* {searchResults.map(book => <Book book={book} key={book.id}/>)} */}
           
            {searchResults.length && searchResults.map((book) => {
              return (
                <Book
                  book={book}
                  key={book.id}
                  readingLists={readingLists}
                  setreadingLists={setreadingLists}
                />
              );
            })}
          </ol>
        </div>
      }
    </div>
  );
};

export default Search;
