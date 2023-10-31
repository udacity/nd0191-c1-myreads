import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import NoBooksFound from './NoBooksFound';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const Search = ({currentBooks, onMoveBook}) => {

    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const searchValue = localStorage.getItem('searchValue');
        if (searchValue) {
            setSearchValue(searchValue);
            console.log(`The stored searchValue is ${searchValue}`);
            getBooks(searchValue);
        }
    }, []);

    const fetchBooks = async (searchValue, callback) => {
        const resp = await BooksAPI.search(searchValue, 100);
        callback(resp);
    }

    const debouncedFetchBooks = debounce((searchValue, callback) => {
        fetchBooks(searchValue, callback);
    }, 500);

    const getBooks = async (searchValue) => {
        if (!searchValue || searchValue.trim() === '') {
            debouncedFetchBooks.cancel(); // Cancel fetching books when there is no value entered anymore
            setBooks([]);
        } else {
            debouncedFetchBooks(searchValue, resp => {
                resp?.forEach(boek => {
                    let currentBook = currentBooks.find(book => book.id === boek.id);
                    if (currentBook) {
                        boek.shelf = currentBook.shelf;
                    } else {
                        boek.shelf = 'none';
                    }
                });
                resp ? setBooks(resp) : setBooks([]);
            });
        }
    };

    const searchBook = (event) => {
        let initialSearchValue = event.target.value;
        console.log(`the search value is: ${initialSearchValue}`);
        setSearchValue(initialSearchValue);
        localStorage.setItem('searchValue', initialSearchValue);

        getBooks(initialSearchValue);
    };

    return (
        <>
            <div className="search-books-bar">
                <a href="/">
                    <div className="close-search"></div>
                </a>
                <input type="text" placeholder="Search for a book title" onChange={searchBook}
                       value={searchValue}></input>
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
