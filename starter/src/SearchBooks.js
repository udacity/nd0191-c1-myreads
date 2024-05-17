import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "./BooksAPI";

const SearchBooks = () => {
    const location = useLocation();
    const booksOfMain = location.state || [];
    const [input, setInput] = useState(sessionStorage.getItem('searchInput') || '');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        sessionStorage.setItem('searchInput', input); 
        if (input) {
            const inputTrimmed = input.trim();
            BooksAPI.search(inputTrimmed).then(res => {
                if (res.error) {
                    setBooks([]);
                } else {
                    const filteredBooks = checkDuplicatedBook(res);
                    setBooks(filteredBooks);
                }
            }).catch((error) => {
                console.error("Error searching book :", error);
            });
        } else {
            setBooks([]);
        }
    }, [input]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const checkDuplicatedBook = (books) => {

        const filteredBooks = books.map((book) => {
            const duplicatedBook = booksOfMain.find((b) => b.id === book.id);
            if (duplicatedBook) {
                book.shelf = duplicatedBook.shelf;
            }
            return book;
        });

        return filteredBooks;
    };

    return (<div className="search-books">
        <div className="search-books-bar">
            <Link
                className="close-search"
                to="/"
            >
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={input}
                    onChange={handleInputChange}
                    autoFocus
                />
            </div>
        </div>
        <div className="search-books-results">
            {books.length !== 0 && <BookGrid books={books} isSearch={true}/>}
        </div>
    </div>);
};

export default SearchBooks;