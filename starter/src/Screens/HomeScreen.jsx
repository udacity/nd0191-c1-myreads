import { useState, useEffect } from "react";

import BookShelf from "../Component/BookShelf";
import SearchPage from "../Component/SearchPage";

export default function HomeScreen({ allBooks }) {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [currentRead, setcurrentRead] = useState(allBooks);
  const [wantRead, setwantRead] = useState([1]);
  const [read, setRead] = useState([1, 2, 3, 4]);

  const changeSearchPage = () => {
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className='app'>
      {showSearchPage ? (
        <SearchPage changeSearchPage={changeSearchPage} />
      ) : (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>

          <div className='list-books-content'>
            <BookShelf
              title={"Currently Reading"}
              booklist={currentRead}
              value='currentlyReading'
            />
            <BookShelf
              title={"Want Read"}
              booklist={wantRead}
              value='wantToRead'
            />
            <BookShelf title={"Read"} booklist={read} value='read' />
          </div>

          <div className='open-search'>
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}
