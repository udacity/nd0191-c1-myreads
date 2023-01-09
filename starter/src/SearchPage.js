import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { update, search, getAll } from "./BooksAPI";
const SearchPage = ({ booksById, bookToShelfMapper }) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const setBooks = (books) => {
        if (books && !books.error) {
            books.forEach(book => {
                book.shelf = booksById[book.id] ? booksById[book.id].shelf : "none";
            });
            setSearchResults(books);
        }
        else (setSearchResults([]));
    }
    //TODO ask someone why "Linux Command" query returns no results from the API
    const changeShelf = (book, newShelf) => {
        const updateBooks = async () => {
            const updatedBook = await update(book, newShelf);
            if (!updatedBook.error) {
                const booksOnShelf = await getAll();
                bookToShelfMapper(booksOnShelf);


                //TODO what is the right way to handle this. this is just a hack
                booksById[book.id] = book;
                booksById[book.id].shelf = newShelf;
                //TODO what is the right way to handle this. this is just a hack


                const books = await search(query.trim());
                setBooks(books);
            }

        }
        updateBooks();
    };

    useEffect(() => {
        let mounted = true;
        const getSearchResults = async () => {
            const books = await search(query.trim());
            mounted && setBooks(books);
        }
        query && getSearchResults();
        (!query) && setSearchResults([]);
        return () => { mounted = false; };
    }, [query])

    const onQueryChange = (e) => {
        setQuery(e.target.value);
    }
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/"
                    className="close-search" />

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={onQueryChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BooksGrid books={searchResults} onShelfChange={changeShelf} />
            </div>
        </div>);
};
export default SearchPage;