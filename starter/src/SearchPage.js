import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import { update, search } from "./BooksAPI";
const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const changeShelf = (book, newShelf) => {
        const updateBooks = async () => {
            const updatedShelf = await update(book, newShelf);
            const books = await search(query.trim());
            books && setSearchResults(books);
        }
        updateBooks();
    };

    useEffect(() => {
        let mounted = true;
        const getSearchResults = async () => {
            const books = await search(query.trim());
            mounted && ((books && books.error === undefined && setSearchResults(books)) || (!(books && books.error === undefined) && setSearchResults([])));
        }
        query && query !== "" && getSearchResults();
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