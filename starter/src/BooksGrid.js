import React from "react";
import Book from "./Book";

const BooksGrid = ({ books, onShelfChange }) => {
    return (<ol className="books-grid">
        {
            books !== undefined && books.map(
                book => (
                    <li key={book.id}>
                        <Book book={book} onShelfChange={onShelfChange} />
                    </li>
                ))
        }
    </ol>);
};
export default BooksGrid;