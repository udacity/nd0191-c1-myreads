import BookTop from "./BookTop";
import PropTypes from "prop-types";

const Book = ({ book, updateBook }) => {
  return (
    <div className="book">
      <BookTop book={book} updateBook={updateBook} />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors !== undefined ? book.authors.join(", ") : "No Authors"}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Book;
