import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = () => {
    const [books, setBooks] = useState([]);

    const searchBooks = (query) => {
        if (query === '') {
            setBooks([]);
            return [];
        }

        const search = async (query) => {
            const res = await BooksAPI.search(query);
            if (res.error) {
                setBooks([]);
            } else {
                setBooks(res);
            }
        }
        return search(query);
      };

    const handleQueryChange = (event) => {
        searchBooks(event.target.value);
    };

    const onBookChange = (id, shelf) => {
        console.log("BOOK CHANGE", id, shelf);

        const update = async (id, shelf) => {
            var res = await BooksAPI.update({ id: id }, shelf);
            console.log("UPDATE", id, shelf, res);
        };

        update(id, shelf);
    };


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
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <Book book={book} onBookChange={onBookChange} />
                    </li>
                );
            })}
          </ol>
        </div>
      </div>
    );

};

export default Search;