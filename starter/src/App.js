import "./App.css";
import * as BooksAPI from "./BooksAPI";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Search from "./Search";
import MyReads from "./MyReads";

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

    const moveBookToShelf = (book, shelf) => {
        book.shelf = shelf;
        setBooks([...books]);

        storeBookOnShelf(book, shelf);
    }

    const storeBookOnShelf = (book, shelf) => {
        console.log(`Book ${book.title} is added to ${shelf}`);
        BooksAPI.update(book, shelf).then(
            () => console.log(`The book is updated in BooksAPI`),
            err => console.log(`The book was rejected. See ${err}`));
    }

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MyReads books={books} moveBookToShelf={moveBookToShelf}/>}/>
                <Route path="/search" element={<Search currentBooks={books} onMoveBook={storeBookOnShelf}/>}/>
            </Routes>

        </div>
    );
}

export default App;
