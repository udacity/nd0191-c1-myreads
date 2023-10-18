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
                <Route path="/search" element={<Search onAddBook={storeBookOnShelf}/>}/>
            </Routes>

        </div>
    );
}

export default App;


// TODO Search results on the search page allow the user to select “Currently Reading”, “Want to Read”, or “Read” to place the book in a certain shelf.
// TODO If a book is assigned to a shelf on the main page and that book also appears on the search page, the correct shelf should be selected for that book on the search page.
// TODO Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
