import PropTypes from "prop-types";
import Book from "./Book.js";

const Bookshelf = ({ title, books, handleShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      {books.length > 0 ? (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} handleShelfChange={handleShelfChange} />
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="bookshelf-no-books">No books in this shelf yet!</div>
      )}
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default Bookshelf;
