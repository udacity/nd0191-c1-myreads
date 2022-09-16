import PropTypes from "prop-types";

const BookShelfChanger = ({ book, updateBook }) => {
  const bookShelf = book.shelf !== undefined ? book.shelf : "none";

  return (
    <div className="book-shelf-changer">
      <select
        value={bookShelf}
        onChange={(e) => updateBook(book, e.target.value)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default BookShelfChanger;
