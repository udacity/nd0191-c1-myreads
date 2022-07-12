import { useState, useEffect } from "react";

import BookShelf from "../Component/BookShelf";

export default function HomeScreen({ allBooks }) {
  const [currentRead, setcurrentRead] = useState([]);
  const [wantRead, setwantRead] = useState([]);
  const [read, setRead] = useState([]);

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
          <a href='/search'>Add a book</a>
        </div>
      </div>
    </div>
  );
}
