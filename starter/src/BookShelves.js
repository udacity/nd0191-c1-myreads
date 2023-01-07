import React, { useEffect, useState } from "react";

import BookShelf from "./BookShelf";
import { getAll } from "./BooksAPI";

const shelves = ["currentlyReading", "wantToRead", "read"];
const BookShelves = ({ onNavigate }) => {

    const [booksOnShelf, setBooksOnShelf] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAll().then(
            books => {
                mounted
                    && setBooksOnShelf(books);
                console.log(books);
            });
        return () => { mounted = false };
    }, []);

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {
                    shelves.map(shelf => (<BookShelf type={shelf} books={booksOnShelf.filter(book => book.shelf === shelf)} />))
                }
            </div>
        </div>
        <div className="open-search">
            <a onClick={onNavigate}>Add a book</a>
        </div>
    </div>
    );
};

export default BookShelves;