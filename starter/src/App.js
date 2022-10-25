import "./App.css";
import { useState } from "react";
import Search from "./components/search/Search.js";
import BookShelf from "./components/book-shelf/BookShelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [readingLists, setreadingLists] = useState({currentlyReading:[], wantToRead:[], read:[]});
  localStorage.setItem("readingLists", JSON.stringify(readingLists));

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
                readingList={readingLists.currentlyReading}
                setreadingLists={setreadingLists}
              />
               <BookShelf
                bookshelfTitle={"Want to Read"}
                readingList={readingLists.wantToRead}
                setreadingLists={setreadingLists}
              />
               <BookShelf
                bookshelfTitle={"Read"}
                readingList={readingLists.read}
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
