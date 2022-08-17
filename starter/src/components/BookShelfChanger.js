import { useState } from "react";

const BookShelfChanger = ({ book, bookShelfHandler }) => {
  const [shelf, setShelf] = useState("none");

  const handleChange = (e) => {
    setShelf(e.target.value);
    bookShelfHandler(book, e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
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

export default BookShelfChanger;
