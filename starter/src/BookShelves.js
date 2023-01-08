import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";
import { getAll, update } from "./BooksAPI";


//TODO handle errors in the asyn await below
const BookShelves = () => {

    const shelves = ["currentlyReading", "wantToRead", "read"];
    const [booksOnShelf, setBooksOnShelf] = useState([]);

    const changeShelf = (book, newShelf) => {
        const updateBooks = async () => {
            const updatedShelf = await update(book, newShelf);
            const books = await getAll();
            setBooksOnShelf(books);
        }
        updateBooks();
        /*update(book,  newShelf)
            .then((updatedShelf) => {
                let mounted = true;
                getAll().then(
                    books => {
                        setBooksOnShelf(books);
                        //console.log(books);
                    });
            });
        */
    };

    useEffect(() => {
        let mounted = true;
        getAll().then(
            books => {
                mounted
                    && setBooksOnShelf(books);
                //console.log(books);
            });
        return () => { mounted = false };
    }, []);

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <ol>
                    {
                        shelves.map(shelf => (<li key={shelf}><BookShelf type={shelf} books={booksOnShelf.filter(book => book.shelf === shelf)} onShelfChange={changeShelf} /></li>))
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