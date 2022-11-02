import "./App.css";
import { getAll } from "./BooksAPI";
import { useState, useEffect } from "react";
import Search from "./components/search/Search.js";
import BookShelf from "./components/book-shelf/BookShelf";

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
    <div className="app">
      {showSearchPage ? (
        <Search
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          readingLists={readingLists}
          setReadingLists={setReadingLists}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                bookshelfTitle={"Currently Reading"}
                bookShelfKey={"currentlyReading"}
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
              <BookShelf
                bookshelfTitle={"Want to Read"}
                bookShelfKey={"wantToRead"}
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
              <BookShelf
                bookshelfTitle={"Read"}
                bookShelfKey={"read"}
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
            </div>
          </div>
          <div className="open-search">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShowSearchpage(!showSearchPage);
              }}
            >
              Add a book
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
