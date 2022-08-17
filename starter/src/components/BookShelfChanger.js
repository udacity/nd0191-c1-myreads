import { useState } from "react";

const BookShelfChanger = ({ book, changeBookShelf }) => {
  const [shelf, setShelf] = useState("none");

  const handleChange = (e) => {
    const changedShelf = e.target.value;
    setShelf(changedShelf);
    changeBookShelf(book, changedShelf);
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
