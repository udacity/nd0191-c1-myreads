import { useState } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";

const SearchBooks = ({books, searchedBooks, onSearchBooks, onChangeShelf}) => {
    const [query, setQuery] = useState("");
    const updateQuery = ((query) => {
        setQuery(query.trim())
        onSearchBooks(query)
    })

    const clearQuery = () => {
        updateQuery("");
    };

    let searchedBooksWithShelves = []
    if(searchedBooks && searchedBooks.length){
      searchedBooksWithShelves = searchedBooks.map(searchedBook => {
        const bookIds = books.map(book => book.id);
        if(bookIds.includes(searchedBook.id)){
          searchedBook.shelf = books.find(book => book.id === searchedBook.id).shelf
        }
        return searchedBook
      })
    }
    
    const shouldShowErrorMessage = searchedBooksWithShelves.length === 0 || query.length === 0;
  
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" onClick={clearQuery}>
                Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          {searchedBooksWithShelves && query.length > 0 && <div className="search-books-results" >
            <BooksGrid books={searchedBooksWithShelves} onChangeShelf={onChangeShelf} />  
          </div>}
          {shouldShowErrorMessage && <div className="no-search-results">Sorry, no search results found. Please try again.</div>}
        </div>
    );

};

export default SearchBooks;