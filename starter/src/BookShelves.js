import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";
import { getAll, update } from "./BooksAPI";


//TODO handle errors in the asyn await below
const BookShelves = ({ booksOnShelf, booksById, bookToShelfMapper }) => {

    const shelves = ["currentlyReading", "wantToRead", "read"];

    const changeShelf = (book, newShelf) => {
        const updateBooks = async () => {
            const updatedShelf = await update(book, newShelf);
            const books = await getAll();
            bookToShelfMapper(books);
        }
        updateBooks();
    };

    const getBooksOnShelf = (shelf) => {
        let result = [];
        if (booksOnShelf && booksById && booksOnShelf[shelf] && booksById[booksOnShelf[shelf][0]])
            result = booksOnShelf[shelf].map(bookId => booksById[bookId]);
        return result;
    }

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <ol>
                    {
                        shelves.map(shelf => (<li key={shelf}><BookShelf type={shelf} books={getBooksOnShelf(shelf)} onShelfChange={changeShelf} /></li>))
                    }
                </ol>
            </div>
        </div>
        <div className="open-search">
            <Link to="/search" />
        </div>
    </div>
    );


};

export default BookShelves;