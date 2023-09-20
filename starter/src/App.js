import "./App.css";
import * as BooksAPI from "./BooksAPI";
import {useEffect, useState} from "react";
import Bookshelf from "./Bookshelf";

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const resp = await BooksAPI.getAll();
            console.log(resp);
            setBooks(resp);
        };

        getBooks();
    }, []);

    return (
        <div className="app">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Bookshelf books={books} category="Currently Reading"></Bookshelf>
            <Bookshelf books={books} category="Want to Read"></Bookshelf>
            <Bookshelf books={books} category="Read"></Bookshelf>
        </div>
    );
}

export default App;
