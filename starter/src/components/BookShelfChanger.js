import { useState } from "react";

const BookShelfChanger = () => {
  const [shelf, setShelf] = useState("none");

  const handleChange = (e) => {
    e.preventDefault();
    setShelf(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select>
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
