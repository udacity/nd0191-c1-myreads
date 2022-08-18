import { useState } from "react";
import PropTypes from "prop-types";

const shelfOptions = [
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want to Read" },
  { value: "read", label: "Read" },
  { value: "none", label: "None" },
];

const BookShelfChanger = ({ book, handleShelfChange }) => {
  const [shelf, setShelf] = useState(book.shelf ? book.shelf : "none");

  const handleChange = (e) => {
    setShelf(e.target.value);
    handleShelfChange(book, e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => handleChange(e)}>
        <option value="none" disabled>
          Move to...
        </option>
        {shelfOptions.map((option, idx) =>
          book.shelf === option.value ? (
            <option
              className={"selected-option"}
              key={idx}
              value={option.value}
            >
              {option.label}
            </option>
          ) : (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          )
        )}
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;
