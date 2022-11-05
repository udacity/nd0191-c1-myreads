import "./App.css";
import { getAll } from "./BooksAPI";
import { useState, useEffect } from "react";
import Search from "./components/search/Search.js";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
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
        <Routes>
          <Route
            path="/search"
            element={
              <Search
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
            }
          />
          <Route
            path="/"
            element={
              <Main
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
