import {useState} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

const Search = ({currentBooks, onMoveBook}) => {

    const [books, setBooks] = useState([]);

    const searchBook = (event) => {
        console.log(`De waarde is: ${event.target.value}`);

        const getBooks = async () => {
            if (event.target.value === undefined || event.target.value.trim() === '') {
                setBooks([]);
            } else {
                const resp = await BooksAPI.search(event.target.value, 100);
                console.log(resp);
                console.log(resp?.error);
                if (resp?.error) {
                    setBooks([]);
                } else {
                    resp.forEach(boek => {
                        let currentBook = currentBooks.find(book => book.id === boek.id);
                        if (currentBook) {
                            boek.shelf = currentBook.shelf;
                        }
                    });
                    setBooks(resp);
                }
            }
        };

        getBooks();
    };

    return (
        <>
            <div className="search-books-bar">
                <a href="/">
                    <div className="close-search"></div>
                </a>
                <input type="text" placeholder="Search for a book title" onChange={searchBook}></input>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map((book) =>
                        <li key={book.id}>
                            <Book book={book} onMoveBook={onMoveBook}/>
                        </li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default Search;
