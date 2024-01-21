import { Link } from "react-router-dom";
import "../App.css";
import { getAll, update } from "../BooksAPI";
import { useEffect, useState } from "react";
import Book from "./Book";

function MainPage () {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);
  
  const getBooks = async () => {
    const booksFromServer = await getAll().then((data) => data);
    setBooks(booksFromServer);
  }
  const updateBook = async(book, shelf) => {
    await update(book, shelf);
    await getBooks();
  }

  const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");


  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map((book) => <Book key={book.id} book={book} updateBook={updateBook} />)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.map((book) => <Book key={book.id} book={book} updateBook={updateBook} />)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {read.map((book) => <Book key={book.id} book={book}  updateBook={updateBook}/>)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
