import { search } from "../../BooksAPI";
import { useState, useEffect } from "react";

const Search = ({ showSearchPage, setShowSearchpage }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const searchBooks = (input) => {
   
    setSearchInput(input);
    
  };

  useEffect(()=>{
    search(searchInput,20).then(data => setSearchResults(data))
    console.log("searchResults",searchResults);
  },[searchInput])

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
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default Search;
