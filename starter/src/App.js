import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import Main from "./Main";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  useEffect(() => {
    BooksAPI.getAll().then((result) => {
      setBooksArray(result);
      //console.log(result);
    });
  }, []);

  const updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const updatedBooks = booksArray
        .filter((b) => b.id !== book.id)
        .concat({
          ...book,
          shelf,
        });
      //console.log(updatedBooks);
      setBooksArray(updatedBooks);
    });
  };
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksArray, setBooksArray] = useState([]);

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          books={booksArray}
          setShowSearchpage={setShowSearchpage}
          updateBookShelf={updateBookShelf}
        />
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <Main books={booksArray} updateBookShelf={updateBookShelf} />
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
