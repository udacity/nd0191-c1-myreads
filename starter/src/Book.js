import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, shelf, onShelfChange }) => {
    const title = book.title;
    const author = book.author;
    const url = book.imageLinks.thumbnail;

    const changeShelf = e => onShelfChange(book, e.target.value);

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 180,
                        backgroundImage:
                            `url(${url})`,
                    }}
                ></div>
                <BookShelfChanger shelf={shelf} onShelfChange={changeShelf} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>);
};
export default Book;