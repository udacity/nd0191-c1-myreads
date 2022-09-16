import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

const BookTop = ({ book, updateBook }) => {
  return (
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${book.imageLinks.thumbnail}")`,
        }}
      ></div>
      <BookShelfChanger book={book} updateBook={updateBook} />
    </div>
  );
};

BookTop.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default BookTop;
