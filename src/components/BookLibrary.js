import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import BookShelf from "./BookShelf.js";

const BookLibrary = ({ currentBooks, handleShelfChange }) => {
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
          <BookShelf
            title={"Currently Reading"}
            books={currentBooks.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            handleShelfChange={handleShelfChange}
          />
          <BookShelf
            title={"Want to Read"}
            books={currentBooks.filter((book) => book.shelf === "wantToRead")}
            handleShelfChange={handleShelfChange}
          />
          <BookShelf
            title={"Read"}
            books={currentBooks.filter((book) => book.shelf === "read")}
            handleShelfChange={handleShelfChange}
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
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookLibrary;
