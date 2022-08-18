import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const shelfItemsInfo = [
  { value: "currentlyReading", label: "Currently Reading" },
  { value: "wantToRead", label: "Want to Read" },
  { value: "read", label: "Read" },
  { value: "none", label: "None" },
];

const BookShelfChanger = ({ book, handleShelfChange }) => {
  const [shelf, setShelf] = useState(book.shelf ? book.shelf : "none");
  const [bookLocation, setBookLocation] = useState("library");
  const [shelfOptions, setShelfOptions] = useState([]);

  const handleChange = (e) => {
    setShelf(e.target.value);
    handleShelfChange(book, e.target.value);
  };

  useEffect(() => {
    let mounted = true;

    const getCurrentBookLocation = () => {
      const location = book.shelf === undefined ? "search" : "library";
      if (mounted) {
        setBookLocation(location);
        location === "search"
          ? setShelfOptions(shelfItemsInfo.slice(0, 3))
          : setShelfOptions(shelfItemsInfo);
      }
    };
    getCurrentBookLocation();
    return () => {
      mounted = false;
    };
  }, []);

  console.log("book loc", bookLocation);
  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => handleChange(e)}>
        {bookLocation === "search" ? (
          <option value="addTo" disabled>
            Add to...
          </option>
        ) : (
          <option value="moveTo" disabled>
            Move to...
          </option>
        )}
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
