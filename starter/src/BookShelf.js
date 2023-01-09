
import React from "react";
import Book from "./Book";
import BooksGrid from "./BooksGrid";
const BookShelf = ({ type, books, onShelfChange }) => {
    const getTitle = () => type === 'currentlyReading' ? 'Currently Reading' :
        type === 'wantToRead' ? 'Want To Read' :
            type === 'read' ? 'Read' : 'Unknown shelf type';

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{getTitle()}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={books} onShelfChange={onShelfChange} />
            </div>
        </div>);
};
export default BookShelf;