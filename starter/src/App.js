import "./App.css";
import * as BooksAPI from "./BooksAPI";
import {useEffect, useState} from "react";
import Bookshelf from "./Bookshelf";

function App() {

    const [booksCurrentlyReading, setBooksCurrentlyReading] = useState([]);
    const [booksWantToRead, setbooksWantToRead] = useState([]);
    const [booksRead, setbooksRead] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const resp = await BooksAPI.getAll();
            console.log(resp);
            setBooksCurrentlyReading(resp.filter(book => book.shelf === 'currentlyReading'));
            setbooksWantToRead(resp.filter(book => book.shelf === 'wantToRead'));
            setbooksRead(resp.filter(book => book.shelf === 'read'));
        };

        getBooks();
    }, []);

    const moveBookToShelf = (book, shelf) => {
        setBooksCurrentlyReading(booksCurrentlyReading.filter(b => b.id !== book.id));
        setbooksWantToRead(booksWantToRead.filter(b => b.id !== book.id));
        setbooksRead(booksRead.filter(b => b.id !== book.id));

        book.shelf = shelf;
        if (shelf === 'currentlyReading') {
            setBooksCurrentlyReading([...booksCurrentlyReading, book]);
        }
        if (shelf === 'wantToRead') {
            setbooksWantToRead([...booksWantToRead, book]);
        }
        if (shelf === 'read') {
            setbooksRead([...booksRead, book]);
        }
    }

    return (
        <div className="app">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Bookshelf books={booksCurrentlyReading} onMoveBook={moveBookToShelf}
                       category="Currently Reading"></Bookshelf>
            <Bookshelf books={booksWantToRead} onMoveBook={moveBookToShelf} category="Want to Read"></Bookshelf>
            <Bookshelf books={booksRead} onMoveBook={moveBookToShelf} category="Read"></Bookshelf>
        </div>
    );
}

export default App;
