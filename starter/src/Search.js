import Bookshelf from "./Bookshelf";
import {useState} from "react";
import * as BooksAPI from "./BooksAPI";

const Search = ({onAddBook}) => {

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
                <Bookshelf category="Found books" books={books} onAddBook={onAddBook}/>
            </div>
        </>
    )
}

export default Search;
