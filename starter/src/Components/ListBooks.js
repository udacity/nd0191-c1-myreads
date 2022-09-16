import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const ListBooks = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={books.filter((book) => book.shelf === "currentlyReading")}
            updateBook={updateBook}
          />
          <BookShelf
            title={"Want to Read"}
            books={books.filter((book) => book.shelf === "wantToRead")}
            updateBook={updateBook}
          />
          <BookShelf
            title={"Read"}
            books={books.filter((book) => book.shelf === "read")}
            updateBook={updateBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default ListBooks;
