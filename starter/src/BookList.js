import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const BookList = ({ books, onBookChangeShelf }) => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              books={books}
              heading="Currently Reading"
              shelf="currentlyReading"
              onBookChangeShelf={onBookChangeShelf}
            />
            <Shelf
              books={books}
              heading="Want to Read"
              shelf="wantToRead"
              onBookChangeShelf={onBookChangeShelf}
            />
            <Shelf
              books={books}
              heading="Read"
              shelf="read"
              onBookChangeShelf={onBookChangeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
};

export default BookList;