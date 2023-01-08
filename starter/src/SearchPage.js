import React from "react";
import { Link } from "react-router-dom";
const SearchPage = () => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/"
                    className="close-search" />

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>);
};
export default SearchPage;