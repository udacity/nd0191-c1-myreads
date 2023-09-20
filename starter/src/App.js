import "./App.css";
import * as BooksAPI from "./BooksAPI";
import {useEffect, useState} from "react";
import Bookshelve from "./Bookshelve";

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
            <Bookshelve category="Currently Reading"></Bookshelve>
            <Bookshelve category="Want to Read"></Bookshelve>
            <Bookshelve category="Read"></Bookshelve>
        </div>
    );
}

export default App;
