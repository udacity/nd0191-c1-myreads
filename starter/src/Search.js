import {useState} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import NoBooksFound from './NoBooksFound';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const Search = ({currentBooks, onMoveBook}) => {

    const [books, setBooks] = useState([]);

    const fetchBooks = async (searchValue, callback) => {
        const resp = await BooksAPI.search(searchValue, 100);
        callback(resp);
    }

    const debouncedFetchBooks = debounce((searchValue, callback) => {
        fetchBooks(searchValue, callback);
    }, 500);

    const searchBook = (event) => {
        console.log(`the search value is: ${event.target.value}`);

        const getBooks = async () => {
            let searchValue = event.target.value;
            if (!searchValue || searchValue.trim() === '') {
                debouncedFetchBooks.cancel(); // Cancel fetching books when there is no value entered anymore
                setBooks([]);
            } else {
                debouncedFetchBooks(searchValue, resp => {
                    if (resp?.error) {
                        setBooks([]);
                    } else {
                        resp?.forEach(boek => {
                            let currentBook = currentBooks.find(book => book.id === boek.id);
                            if (currentBook) {
                                boek.shelf = currentBook.shelf;
                            } else {
                                boek.shelf = 'none';
                            }
                        });
                        resp ? setBooks(resp) : setBooks([]);
                    }
                });
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
                    <NoBooksFound books={books}/>
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

Search.propTypes = {
    currentBooks: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired,
}

export default Search;
