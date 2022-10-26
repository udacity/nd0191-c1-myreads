import "./App.css";
import { useState } from "react";
import Search from "./components/search/Search.js";
import BookShelf from "./components/book-shelf/BookShelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const initialData = { currentlyReading: [], wantToRead: [], read: [] };
  const [readingLists, setreadingLists] = useState(initialData);

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          readingLists={readingLists}
          setreadingLists={setreadingLists}
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
                setreadingLists={setreadingLists}
              />
              <BookShelf
                bookshelfTitle={"Want to Read"}
                bookShelfKey={"wantToRead"}
                readingLists={readingLists}
                setreadingLists={setreadingLists}
                />
              <BookShelf
                bookshelfTitle={"Read"}
                bookShelfKey={"read"}
                readingLists={readingLists}
                setreadingLists={setreadingLists}
              />
            </div>
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
