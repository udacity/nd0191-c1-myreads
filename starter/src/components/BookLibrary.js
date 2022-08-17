import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Bookshelf from "./Bookshelf.js";

const BookLibrary = ({ currentBooks, changeBookShelf }) => {
  let navigate = useNavigate();

  const handleAddBook = () => {
    navigate("/search");
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title={"Currently Reading"}
            books={currentBooks.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            changeBookShelf={changeBookShelf}
          />
          <Bookshelf
            title={"Want to Read"}
            books={currentBooks.filter((book) => book.shelf === "wantToRead")}
            changeBookShelf={changeBookShelf}
          />
          <Bookshelf
            title={"Read"}
            books={currentBooks.filter((book) => book.shelf === "read")}
            changeBookShelf={changeBookShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => handleAddBook()}>Add a book</a>
      </div>
    </div>
  );
};

BookLibrary.propTypes = {
  currentBooks: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default BookLibrary;
