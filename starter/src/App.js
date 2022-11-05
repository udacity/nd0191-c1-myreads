import "./App.css";
import { getAll } from "./BooksAPI";
import { useState, useEffect } from "react";
import Search from "./components/search/Search.js";
// import BookShelf from "./components/book-shelf/BookShelf";
// import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const initialData = { currentlyReading: [], wantToRead: [], read: [] };
  const [readingLists, setReadingLists] = useState(initialData);

  useEffect(() => {
    getAll().then((books) => {
      let newReadlingLists = { currentlyReading: [], wantToRead: [], read: [] };
      books.map((book) => newReadlingLists[book.shelf].push(book));
      setReadingLists(newReadlingLists);
    });
  }, []);

  return (
    <BrowserRouter>
     
      <div className="app">
      {/* <Routes> */}
      {/* <Route /> */}
        {showSearchPage ? (
          <Search
            showSearchPage={showSearchPage}
            setShowSearchpage={setShowSearchpage}
            readingLists={readingLists}
            setReadingLists={setReadingLists}
          />
        ) : (
          <Main
            readingLists={readingLists}
            setReadingLists={setReadingLists}
            setShowSearchpage={setShowSearchpage}
            showSearchPage={showSearchPage}
          />
        )}
     {/* </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
