import "./App.css";
import { useState, useEffect } from "react";
import TitleApp from "./components/TitleApp";
import MainShelf from "./components/MainShelf";
import * as BooksAPI from "./components/BooksAPI";
import Book from "./components/Book";

const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [oneBook, setOneBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [bookFound, setBookFound] = useState([]);
  const [updatedFromSearch, setUpdatedFromSearch] = useState([]);

  
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
     
      setOneBooks(data);
    });
  }, []);

 
  useEffect(() => {
    let on = true;
    if (search) {
      BooksAPI.search(search).then((data) => {
        if (data.error) {
          setBookFound([]);
        } else {
          if (on) {
            console.log(data);
            setBookFound(data);
          }
        }
      });
    }
    return () => {
      on = false;
      setBookFound([]);
    };
  }, [search]);

  
  function updateShelf(currentBook, newShelf) {
    const updatedShelf = oneBook.map((book) => {
      return book.id === currentBook.id && (currentBook.shelf = newShelf)
        ? currentBook
        : book;
   
    });
    setOneBooks(updatedShelf);
    BooksAPI.update(currentBook, newShelf).then((data) => {
      console.log(data);
      return data;
    });
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {bookFound.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    updateShelf={updateShelf}
                    shelfName="Currently Reading"
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <TitleApp />
          <div className="list-books-content">
            <MainShelf books={oneBook} updateShelf={updateShelf} />
          </div>

          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
