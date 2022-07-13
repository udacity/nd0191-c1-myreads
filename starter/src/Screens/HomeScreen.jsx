import { useState, useEffect } from "react";

import BookShelf from "../Component/BookShelf";

export default function HomeScreen({ allBooks }) {
  const [currentRead, setcurrentRead] = useState(
    JSON.parse(localStorage.getItem("currentlyReading"))
  );
  const [wantRead, setwantRead] = useState(
    JSON.parse(localStorage.getItem("wantToRead"))
  );
  const [read, setRead] = useState(JSON.parse(localStorage.getItem("read")));

  const addBook = (value, books) => {
    switch (value) {
      case "currentlyReading":
        setcurrentRead(books);
        break;
      case "wantToRead":
        setwantRead(books);
        break;
      case "read":
        setRead(books);
        break;
      default:
        break;
    }
  };

  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          <BookShelf
            title={"Currently Reading"}
            booklist={currentRead}
            addBook={addBook}
          />
          <BookShelf
            title={"Want Read"}
            booklist={wantRead}
            addBook={addBook}
          />
          <BookShelf
            title={"Read"}
            booklist={read}
            addBook={addBook}
          />
        </div>

        <div className='open-search'>
          <a href='/search'>Add a book</a>
        </div>
      </div>
    </div>
  );
}
