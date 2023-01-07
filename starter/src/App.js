import "./App.css";
import React, { useState } from "react";

import BookShelves from "./BookShelves";




function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
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
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <BookShelves onNavigate={() => setShowSearchpage(!showSearchPage)} />
      )}
    </div>
  );
}

export default App;
