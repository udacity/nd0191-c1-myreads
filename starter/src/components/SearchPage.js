import { Link } from "react-router-dom";
import "../App.css";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "../lib/useDebounce";
import { search, update } from "../BooksAPI";
import Book from "./Book";

function SearchPage({ books, fetchBooks }) {
  const [queryBooks, setQueryBooks] = useState([]);
  const [invalidQuery, setInvalidQuery] = useState(false);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const booksMap = useMemo(
    () => new Map(books.map((book) => [book.id, book])),
    [books]
  );

  useEffect(() => {
    if (debouncedQuery) {
      const searchBooks = async () => {
        const booksFromServer = await search(debouncedQuery).then((data) => {
          if (data.error) {
            setInvalidQuery(true);
            return [];
          } else {
            setInvalidQuery(false);
            return data;
          }
        });

        const queriedBooks = booksFromServer.map(
          (book) => booksMap.get(book.id) || book
        );
        setQueryBooks(queriedBooks);
      };
      searchBooks();
    } else {
      setQueryBooks([]);
    }
  }, [debouncedQuery, setQueryBooks, booksMap]);

  const updateBook = async (book, shelf) => {
    await update(book, shelf);
    await fetchBooks();
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="back-button">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              autoFocus
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {invalidQuery ? (
            <h2>No result found</h2>
          ) : (
            <ol className="books-grid">
              {queryBooks.map?.((book) => (
                <Book key={book.id} book={book} updateBook={updateBook} />
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
