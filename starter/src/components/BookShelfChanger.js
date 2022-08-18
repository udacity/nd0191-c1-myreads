import { useState } from "react";
import PropTypes from "prop-types";

const shelfOptions = [
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want to Read" },
  { value: "read", label: "Read" },
  { value: "none", label: "None" },
];

const BookShelfChanger = ({ book, bookShelfHandler }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const handleChange = (e) => {
    console.log("shelf", e.target.value);
    console.log("b shelf", book.shelf);
    setShelf(e.target.value);
    bookShelfHandler(book, e.target.value);
  };

  console.log("shelf o", shelf);
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
  bookShelfHandler: PropTypes.func.isRequired,
};

export default BookShelfChanger;
