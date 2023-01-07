
import React from "react";
import Book from "./Book";
const BookShelf = ({ type, books }) => {
    const getTitle = () => type === 'currentlyReading' ? 'Currently Reading' :
        type === 'wantToRead' ? 'Want To Read' :
            type === 'read' ? 'Read' : 'Unknown shelf type';
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{getTitle()}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(
                        book => (
                            <li>
                                <Book title={book.title} author={book.author} url={book.imageLinks.thumbnail} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>);
};
export default BookShelf;