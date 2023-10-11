import "./App.css";
import * as BooksAPI from "./BooksAPI";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Search from "./Search";
import MyReads from "./MyReads";

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

    const addBookToShelf = (book, shelf) => {
        console.log(`Book ${book.title} is added to ${shelf}`);
        BooksAPI.update(book, shelf).then(
            () => console.log(`The book is updated in BooksAPI`),
            err => console.log(`The book was rejected. See ${err}`));
    }

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MyReads booksCurrentlyReading={booksCurrentlyReading}
                                                  booksWantToRead={booksWantToRead} booksRead={booksRead}
                                                  moveBookToShelf={moveBookToShelf}/>}/>
                <Route path="/search" element={<Search onAddBook={addBookToShelf}/>}/>
            </Routes>

        </div>
    );
}

export default App;
