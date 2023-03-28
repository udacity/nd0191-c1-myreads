import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = ({ currentBooks, onBookChangeShelf }) => {
    const [catalog, setCatalog] = useState([]);

    const searchCatalog = (query) => {
        const search = async (query) => {
          const res = (query === "") ? [] : await BooksAPI.search(query);
          setCatalog((Array.isArray(res) ? res : []))
        }
        search(query);
      };

    const handleQueryChange = (event) => {
        searchCatalog(event.target.value);
    };

    const getShelf = (book, currentBooks) => {
        if (book.shelf) return book.shelf;
        const res = currentBooks.find((b) => b.id === book.id);
        if (res) return res.shelf;
        return 'none';
    }

    const getThumbnailUrl = (book) => {
        return book.imageLinks?.thumbnail;
    }

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
              onChange={handleQueryChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {catalog.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      id={book.id}
                      title={book.title}
                      authors={book.authors}
                      thumbnailUrl={getThumbnailUrl(book)}
                      shelf={getShelf(book, currentBooks)}
                      onBookChangeShelf={onBookChangeShelf}
                    />
                  </li>
                );
            })}
          </ol>
        </div>
      </div>
    );
};

Search.propTypes = {
    currentBooks: PropTypes.arrayOf(Object).isRequired,
    onBookChangeShelf: PropTypes.func.isRequired
}

export default Search;